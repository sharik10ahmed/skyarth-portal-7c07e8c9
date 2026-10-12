import heroImage from "@/assets/skyarth-hero.jpg";

const base = {
  city: "Pune",
  images: [heroImage],
  areaUnit: "sq.ft.",
  furnishing: "Semi-furnished",
  possession: "Ready to move",
  published: true,
  featured: false,
  verified: false,
  parking: "1 covered",
  amenities: ["Lift", "Power backup", "Security"],
  postedBy: "SKYARTH Property demo inventory",
  contact: { name: "SKYARTH Property", phone: "9945678901", email: "support@skyarthupvc.com" },
};

export const defaultProperties = [
  { ...base, id: "p-101", title: "Sunlit 3 BHK apartment near EON IT Park", type: "Apartment", category: "Residential", transaction: "Buy", locality: "Kharadi", price: 16800000, area: 1420, bedrooms: 3, bathrooms: 3, floor: "8 of 18", verified: true, featured: true, description: "A bright, well-planned home with a generous balcony and everyday conveniences nearby.", amenities: ["Clubhouse", "Gym", "Lift", "Power backup", "Security"] },
  { ...base, id: "p-102", title: "Modern 2 BHK for rent in Viman Nagar", type: "Flat", category: "Residential", transaction: "Rent", locality: "Viman Nagar", monthlyRent: 38000, price: 38000, area: 980, bedrooms: 2, bathrooms: 2, furnishing: "Fully furnished", postedBy: "Property owner", description: "Move-in ready apartment close to daily amenities and transit." },
  { ...base, id: "p-103", title: "Corner 4 BHK villa with private garden", type: "Villa", category: "Residential", transaction: "Buy", locality: "Wagholi", price: 28500000, area: 2850, bedrooms: 4, bathrooms: 4, furnishing: "Unfurnished", featured: true, description: "Independent villa layout with a private garden and flexible living spaces." },
  { ...base, id: "p-104", title: "High-floor 2 BHK resale residence", type: "Apartment", category: "Residential", transaction: "Buy", locality: "Hadapsar", price: 11200000, area: 1050, bedrooms: 2, bathrooms: 2, age: "5–10 years", description: "A practical resale option in an established residential neighbourhood." },
  { ...base, id: "p-105", title: "Garden-facing 3 BHK family home", type: "Apartment", category: "Residential", transaction: "Buy", locality: "Baner", price: 19400000, area: 1580, bedrooms: 3, bathrooms: 3, furnishing: "Unfurnished", description: "Comfortable family layout with leafy views and a wide living room." },
  { ...base, id: "p-106", title: "Compact 1 BHK studio apartment", type: "Studio Apartment", category: "Residential", transaction: "Buy", locality: "Wakad", price: 6500000, area: 610, bedrooms: 1, bathrooms: 1, description: "Efficiently planned first home or city base with useful shared amenities." },
  { ...base, id: "p-107", title: "Open-plan 2 BHK in Magarpatta", type: "Flat", category: "Residential", transaction: "Rent", locality: "Magarpatta", monthlyRent: 42000, price: 42000, area: 1120, bedrooms: 2, bathrooms: 2, furnishing: "Semi-furnished", description: "Well-connected rental home with bright interiors and a practical layout." },
  { ...base, id: "p-108", title: "Premium penthouse with expansive terrace", type: "Penthouse", category: "Residential", transaction: "Buy", locality: "Koregaon Park", price: 46200000, area: 3100, bedrooms: 4, bathrooms: 4, floor: "Top floor", featured: true, description: "A top-floor residence with a large terrace and flexible entertaining spaces." },
  { ...base, id: "p-109", title: "Independent 3 BHK house in Kalyani Nagar", type: "Independent House", category: "Residential", transaction: "Buy", locality: "Kalyani Nagar", price: 31500000, area: 2200, bedrooms: 3, bathrooms: 3, description: "Independent home with adaptable rooms in a well-established locality." },
  { ...base, id: "p-110", title: "New 2 BHK under construction", type: "Apartment", category: "Residential", transaction: "New Projects", locality: "Hinjawadi", price: 8900000, area: 1050, bedrooms: 2, bathrooms: 2, possession: "Under construction", verified: true, description: "A sample new-project home with a projected possession timeline." },
  { ...base, id: "p-111", title: "Fitted office suite in Kharadi business district", type: "Office Space", category: "Commercial", transaction: "Commercial Lease", locality: "Kharadi", monthlyRent: 125000, price: 125000, area: 1450, furnishing: "Fully furnished", parking: "2 covered", verified: true, description: "Office suite with meeting rooms and workstations; lease terms are indicative demo data." },
  { ...base, id: "p-112", title: "Bright managed office for sale", type: "Office Space", category: "Commercial", transaction: "Commercial Sale", locality: "Viman Nagar", price: 28500000, area: 1900, furnishing: "Semi-furnished", parking: "2 covered", description: "Flexible commercial floorplate suited to a range of business uses." },
  { ...base, id: "p-113", title: "Street-front retail shop with wide frontage", type: "Retail Shop", category: "Commercial", transaction: "Commercial Lease", locality: "Baner", monthlyRent: 78000, price: 78000, area: 760, furnishing: "Unfurnished", parking: "Street parking", description: "Ground-floor retail space with visible frontage and a flexible fit-out." },
  { ...base, id: "p-114", title: "Warehouse with loading access", type: "Warehouse", category: "Commercial", transaction: "Commercial Lease", locality: "Wagholi", monthlyRent: 185000, price: 185000, area: 5200, furnishing: "Unfurnished", parking: "Loading bay", description: "Open warehouse space with loading access; availability is illustrative demo data." },
  { ...base, id: "p-115", title: "Showroom space on a busy connector road", type: "Showroom", category: "Commercial", transaction: "Commercial Sale", locality: "Hadapsar", price: 38500000, area: 2350, furnishing: "Unfurnished", description: "Open showroom floor with street-facing windows and configurable interiors." },
  { ...base, id: "p-116", title: "Residential plot with road frontage", type: "Residential Plot", category: "Plot", transaction: "Residential Plots", locality: "Wagholi", price: 7200000, area: 1800, parking: "Road access", furnishing: "Not applicable", description: "Illustrative residential plot listing; buyers should independently review documentation." },
  { ...base, id: "p-117", title: "Mixed-use commercial plot opportunity", type: "Commercial Plot", category: "Plot", transaction: "Commercial Plots", locality: "Hinjawadi", price: 22600000, area: 3600, parking: "Road access", furnishing: "Not applicable", description: "Commercial land listing shown for demonstration; legal status not represented." },
  { ...base, id: "p-118", title: "Agricultural land parcel outside Pune", type: "Agricultural Land", category: "Plot", transaction: "Agricultural Land", locality: "Shirur", city: "Pune district", price: 9500000, area: 14500, parking: "Road access", furnishing: "Not applicable", description: "Illustrative land parcel. Please independently assess access, title and permitted use." },
  { ...base, id: "p-119", title: "Furnished 1 BHK near Bengaluru tech corridor", type: "Apartment", category: "Residential", transaction: "Rent", locality: "Whitefield", city: "Bengaluru", monthlyRent: 31000, price: 31000, area: 720, bedrooms: 1, bathrooms: 1, furnishing: "Fully furnished", description: "Sample out-of-market rental listing demonstrating city discovery." },
];

export const defaultProjects = [
  { id: "pr-1", name: "The Courtyard Residences", developer: "Independent demo profile", location: "Kharadi, Pune", city: "Pune", startingPrice: 11200000, configurations: ["2 BHK", "3 BHK"], status: "Under construction", possession: "Dec 2027 (illustrative)", amenities: ["Clubhouse", "Garden", "Gym"], image: heroImage, published: true, featured: true, overview: "A sample residential project profile for discovery and enquiry." },
  { id: "pr-2", name: "Vista at Viman Nagar", developer: "Independent demo profile", location: "Viman Nagar, Pune", city: "Pune", startingPrice: 14900000, configurations: ["2 BHK", "3 BHK"], status: "Ready to move", possession: "Ready to move", amenities: ["Pool", "Gym", "Security"], image: heroImage, published: true, overview: "Demo project information; no developer partnership is implied." },
  { id: "pr-3", name: "Northfield Homes", developer: "Independent demo profile", location: "Wagholi, Pune", city: "Pune", startingPrice: 7200000, configurations: ["1 BHK", "2 BHK"], status: "New launch", possession: "Mar 2028 (illustrative)", amenities: ["Garden", "Play area", "Lift"], image: heroImage, published: true, overview: "A sample project profile with indicative pricing and timelines." },
  { id: "pr-4", name: "Greenline Living", developer: "Independent demo profile", location: "Baner, Pune", city: "Pune", startingPrice: 18500000, configurations: ["2 BHK", "3 BHK", "4 BHK"], status: "Under construction", possession: "Jun 2027 (illustrative)", amenities: ["Clubhouse", "Garden", "Gym"], image: heroImage, published: true, overview: "Illustrative project detail used for portal demonstration." },
  { id: "pr-5", name: "Magarpatta Workspaces", developer: "Independent demo profile", location: "Magarpatta, Pune", city: "Pune", startingPrice: 16500000, configurations: ["Office suites", "Retail"], status: "Ready to move", possession: "Ready to move", amenities: ["Reception", "Power backup", "Parking"], image: heroImage, published: true, overview: "A demo commercial project page for business enquiries." },
  { id: "pr-6", name: "West Pune Plot Collection", developer: "Independent demo profile", location: "Wakad, Pune", city: "Pune", startingPrice: 5400000, configurations: ["Residential plots"], status: "New launch", possession: "Timeline on enquiry", amenities: ["Road access"], image: heroImage, published: true, overview: "Sample plotted-development profile. Verify all information independently." },
];

export const defaultLocalities = ["Kharadi", "Viman Nagar", "Hadapsar", "Baner", "Wakad", "Hinjawadi", "Wagholi", "Koregaon Park", "Kalyani Nagar", "Magarpatta"].map((name, index) => ({ slug: name.toLowerCase().replaceAll(" ", "-"), name, overview: `Explore homes, workspaces and everyday conveniences around ${name}. This locality profile uses illustrative demo content.`, highlights: ["Everyday retail", "Road connectivity", "Residential choices"], range: [6500000 + index * 850000, 22000000 + index * 1500000], types: ["Apartments", "Resale homes", "Commercial spaces"] }));

export const defaultServices = ["Residential Property Buying", "Residential Property Renting", "Property Resale", "Commercial Property Leasing", "Commercial Property Sales", "New Project Advisory", "Plot and Land Advisory", "Property Valuation Advisory", "Site Visit Coordination", "Buyer-Seller Negotiation", "Documentation Assistance", "Investment Property Consultation", "Landlord Assistance", "Tenant Assistance"].map((title) => ({ title, description: `Practical support for ${title.toLowerCase()}, from initial discovery through your next steps.` }));

export const defaultFaqs = [
  { question: "How do I arrange a property visit?", category: "Site visits", answer: "Send an enquiry from a listing or contact SKYARTH Property to discuss a suitable time." },
  { question: "Are the prices and listings real-time?", category: "Enquiries", answer: "No. This portal uses illustrative demo inventory and locally stored sample content." },
  { question: "What should I check before buying?", category: "Documentation", answer: "Independently review ownership, approvals, applicable agreements, and other relevant documents with qualified advisers." },
  { question: "Can I list a property here?", category: "Listing a property", answer: "Submit the local demo form. The submission is saved in this browser and is not transmitted to a server." },
  { question: "How do rental enquiries work?", category: "Renting", answer: "Open a rental listing and use its enquiry form to share your preferred details." },
  { question: "How is a valuation arranged?", category: "Valuation", answer: "Request a callback through the contact page; any valuation discussion is advisory and subject to further information." },
  { question: "Does SKYARTH guarantee a transaction?", category: "Buying property", answer: "No. SKYARTH Property facilitates discovery and transaction assistance; outcomes depend on the parties involved." },
  { question: "How is my enquiry stored?", category: "Privacy", answer: "Demo enquiries are stored locally in this browser only and are not sent to a server." },
];

export const defaultArticles = [
  { slug: "homebuyer-document-checklist", title: "A practical homebuyer document checklist", category: "Buying guides", excerpt: "A useful starting point for reviewing a property transaction with qualified professionals." },
  { slug: "planning-a-site-visit", title: "How to prepare for a property site visit", category: "Buyer resources", excerpt: "Questions and observations to bring along when you view a property." },
  { slug: "commercial-lease-basics", title: "Commercial lease conversations: key topics", category: "Commercial", excerpt: "A plain-language overview of topics tenants and landlords commonly discuss." },
  { slug: "rental-viewing-guide", title: "A renter's guide to viewing a home", category: "Renting guides", excerpt: "Compare practical details and prepare for a rental conversation." },
];

export const defaultSettings = {
  brand: "SKYARTH Property", tagline: "Discover Better Properties. Make Smarter Moves.",
  phone: "9945678901", email: "support@skyarthupvc.com", whatsapp: "919945678901",
  address: "Office No. 113, Tower B, City Vista, Kharadi, Pune - 411014, Maharashtra, India.",
  heroTitle: "Find a Property That Moves You Forward.",
  heroText: "Explore thoughtfully selected homes, investment opportunities, commercial spaces and plots with SKYARTH Property.",
  hours: "Monday–Saturday, 10:00 am–6:00 pm", currency: "INR", demoMode: true,
};

export const defaultTeam = [{ id: "tm-1", name: "SKYARTH Property Consultant", role: "Property Consultant", phone: "9945678901", email: "support@skyarthupvc.com", active: true }];
export const defaultMedia = [{ id: "md-1", title: "SKYARTH Pune residential banner", alt: "Contemporary Pune residential towers at sunset", url: heroImage }];