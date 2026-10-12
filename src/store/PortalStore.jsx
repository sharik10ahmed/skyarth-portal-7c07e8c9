import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultArticles,
  defaultFaqs,
  defaultLocalities,
  defaultMedia,
  defaultProjects,
  defaultProperties,
  defaultServices,
  defaultSettings,
  defaultTeam,
} from "@/data/demoData";

const STORAGE_KEY = "skyarth-portal:v1";
const StoreContext = createContext(null);

function createInitialState() {
  return {
    properties: defaultProperties,
    projects: defaultProjects,
    localities: defaultLocalities,
    services: defaultServices,
    articles: defaultArticles,
    faqs: defaultFaqs,
    team: defaultTeam,
    media: defaultMedia,
    settings: defaultSettings,
    leads: [],
    submissions: [],
    saved: [],
    compared: [],
    recent: [],
  };
}

function readStoredState() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    if (!parsed || parsed.version !== 1 || !parsed.data || typeof parsed.data !== "object") return null;
    return { ...createInitialState(), ...parsed.data };
  } catch {
    return null;
  }
}

function storeState(data) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, data }));
  } catch {
    // The in-memory demo continues to work when browser storage is unavailable.
  }
}

export function createLocalId(prefix = "SKY") {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export function PortalProvider({ children }) {
  const [data, setData] = useState(createInitialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredState();
    if (stored) setData(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) storeState(data);
  }, [data, hydrated]);

  const update = useCallback((key, updater) => {
    setData((current) => {
      const nextValue = typeof updater === "function" ? updater(current[key]) : updater;
      const next = { ...current, [key]: nextValue };
      storeState(next);
      return next;
    });
  }, []);

  const addLead = useCallback((lead) => {
    const record = { ...lead, id: createLocalId("LEAD"), status: "New", assigned: "Unassigned", notes: "", createdAt: new Date().toISOString() };
    update("leads", (leads) => [record, ...leads]);
    return record;
  }, [update]);

  const reset = useCallback(() => {
    const fresh = createInitialState();
    storeState(fresh);
    setData(fresh);
  }, []);

  const value = useMemo(() => ({ data, update, addLead, reset, hydrated }), [data, update, addLead, reset, hydrated]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function usePortal() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("usePortal must be used inside PortalProvider");
  return value;
}