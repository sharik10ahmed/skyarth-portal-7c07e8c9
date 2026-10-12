# Skyarth Portal

https://github.com/sharik10ahmed/skyarth-portal
copy this repo and start where it left off
below are instructions note:

The SKYARTH visual direction, Pune demo listings, local-only storage model, hero image, and core portal/admin screen code are in place. The work stopped before wiring the new app into the homepage and styling it, so the site is not yet complete or tested; credits ran out, and continuing requires available credits. The portal is incomplete: the preview has typecheck errors in src/components/PortalApp.jsx, and the homepage is not yet wired to the new screens; would you like me to continue in a new request? The preview still has build errors. Ask me to fix them in a new message.

initial prompt was:
# PROJECT: SKYARTH PROPERTY — PREMIUM REAL ESTATE PORTAL & DYNAMIC ADMIN DASHBOARD

Build a complete, responsive, premium real estate portfolio and property discovery website for **SKYARTH Property**, inspired by the feature depth and property-search experience of https://www.99acres.com.

The website must be original in branding and UI. Do not copy 99acres logos, proprietary graphics, text, or exact page designs. Create a premium, modern real estate experience customized for SKYARTH Property, Pune, India.

## 1. STRICT TECHNOLOGY REQUIREMENTS

Use ONLY the following technologies:

- React
- Vite
- Tailwind CSS
- Native JavaScript
- Native React hooks and React Context where required
- Standard HTML and CSS

**Do not install or use any other technology, library, framework, package, or external service.**

Strictly prohibited:
- TypeScript
- Next.js
- Backend frameworks
- Node-based backend APIs
- Databases of any kind
- Supabase or Firebase
- Authentication services
- External UI component libraries
- Icon libraries
- Chart libraries
- Animation libraries
- Form libraries
- Routing libraries
- State management libraries
- ORM tools
- External map SDKs

Use React state, Context, native browser APIs, and plain JavaScript functions. Use CSS and inline SVG for icons and simple charts. Implement navigation using the History API or a lightweight custom React routing solution without installing a routing package.

Use mock JavaScript data stored in local files. Use localStorage for browser-side persistence of demo listings, settings, inquiries, saved properties, and other editable data. No database or server is required.

Use Tailwind CSS for all primary styling. Minimal custom CSS is permitted for features that cannot reasonably be achieved with utility classes.

Deliver a working website, not a static design mockup. All buttons, forms, filters, navigation items, dashboard actions, and modals must function.

## 2. BUSINESS INFORMATION

Use these details throughout the website and admin panel:

Brand name: SKYARTH Property

Tagline: Discover Better Properties. Make Smarter Moves.

Business category: Real estate consultancy, property broking, property marketing, leasing, and transaction management.

Office address:
Office No. 113, Tower B, City Vista,
Kharadi, Pune - 411014, Maharashtra, India.

Phone: 9945678901

Email: support@skyarthupvc.com

Primary market: Pune and surrounding Maharashtra locations, with the ability to display listings from other Indian cities through mock data.

Business description:
SKYARTH Property facilitates verified residential projects, resale properties, commercial spaces, and plotted developments. Services include property discovery, curated site visits, valuation advisory, buyer-seller negotiations, leasing assistance, and documentation support.

Never invent real client testimonials, legal certifications, actual verification claims, or genuine company statistics. Use clearly identified demo content wherever necessary.

## 3. BRAND IDENTITY AND COLOR SYSTEM

Create an elegant, trustworthy, premium real estate design.

Primary navy: #102A43
Secondary navy: #243B53
Emerald green: #16856B
Light emerald: #E8F5EF
Warm gold accent: #C6A15B
Main background: #F7F9FC
White: #FFFFFF
Primary text: #1F2937
Secondary text: #64748B
Border: #E2E8F0

Use navy for the header, footer, typography accents, and professional sections. Use emerald green for primary action buttons, verified indicators, and active states. Use gold sparingly for premium property badges and featured listings.

Typography should be clean, elegant, and readable, using a system font stack without external font libraries.

Design requirements:
- Premium editorial real estate aesthetic.
- Large architectural imagery.
- Generous whitespace.
- Rounded property cards.
- Subtle shadows and borders.
- High-quality responsive layouts.
- Desktop mega-navigation where appropriate.
- Mobile navigation drawer.
- Consistent buttons, forms, badges, and modal designs.
- Accessible keyboard navigation and visible focus states.

Avoid excessive gradients, excessive animation, clutter, and generic template styling.

## 4. GLOBAL HEADER AND NAVIGATION

Create a sticky responsive header featuring:

- SKYARTH Property logo built with text and simple inline SVG architecture imagery.
- Home
- Buy
- Rent
- Commercial
- New Projects
- Plots & Land
- Property Services
- Insights
- Contact
- List Your Property
- Saved Properties
- Call Now

Provide dropdowns or mega menus for property categories.

On mobile, show a clean navigation drawer and prominent search and contact actions.

Display the business phone number in the header on desktop. Use a functional tel link for calling.

## 5. HOMEPAGE HERO SECTION

Create a visually striking, premium hero section with a large real estate banner image.

Use a high-quality architectural image of a contemporary luxury residential building or modern Pune skyline. Use a remote image URL or a local image asset if available. Include a dark translucent overlay to preserve text readability.

Hero headline:
"Find a Property That Moves You Forward."

Supporting text:
"Explore thoughtfully selected homes, investment opportunities, commercial spaces and plots with SKYARTH Property."

Add two CTA buttons:
- Explore Properties
- List Your Property

Add a prominent property-search panel over the hero.

Search tabs:
- Buy
- Rent
- Commercial
- Projects
- Plots & Land

Search fields:
- Location, locality, landmark or project
- Property type
- Budget range
- Bedrooms where relevant

Include a Search Properties button.

The search panel must be functional. Submitting the form should navigate to the property listing page and apply the selected filters.

Add a small trust message:
"Your property journey, guided with clarity."

Never claim that listings are verified unless their mock data explicitly contains a verified status.

## 6. PROPERTY SEARCH AND LISTING EXPERIENCE

Create a dedicated /properties page with advanced search and filtering.

Support these transaction categories:
- Buy
- Rent
- Commercial Sale
- Commercial Lease
- New Projects
- Residential Plots
- Commercial Plots
- Agricultural Land
- PG / Co-living as an optional category

Property types:
- Apartment
- Flat
- Penthouse
- Villa
- Independent House
- Builder Floor
- Studio Apartment
- Office Space
- Retail Shop
- Showroom
- Warehouse
- Industrial Property
- Residential Plot
- Commercial Plot
- Agricultural Land

Search filters:
- City
- Locality
- Landmark
- Transaction type
- Property category
- Minimum and maximum budget
- Bedrooms
- Bathrooms
- Minimum and maximum area
- Area unit
- Furnishing
- Property age
- Possession status
- Ready to move
- Under construction
- Posted by owner, agent, or builder
- Verified status
- Amenities
- Parking
- Availability status

Provide:
- Sort by newest
- Price low to high
- Price high to low
- Area
- Featured listings
- Grid view
- List view
- Active filter chips
- Clear all filters
- Results count
- Pagination or load more
- Empty state with suggestions
- Responsive mobile filter drawer

All filters must operate on mock data using JavaScript. Do not simulate server requests.

Display a helpful empty state when no results match.

## 7. PROPERTY CARDS AND DETAIL PAGES

Build attractive reusable property cards containing:

- Main property image
- Optional image count
- Property title
- Locality and city
- Asking price or monthly rent
- Price per square foot when available
- Area and area unit
- Bedrooms and bathrooms when applicable
- Property type
- Furnishing status
- Possession status
- Featured badge
- Verified badge only when explicitly marked verified
- Posted by information
- Save/unsave heart button
- Compare checkbox
- View Details button
- Contact Agent button

Create a detailed property page at /property/:id.

The property detail page must include:
- Image gallery with next/previous controls
- Main image and thumbnails
- Full property description
- Price and area information
- Key features
- Amenities
- Floor and furnishing details
- Possession information
- Available documents checklist as informational demo content
- Location and locality description
- Nearby landmarks and transport details from mock data
- Seller or consultant profile
- Enquiry form
- Call consultant button
- WhatsApp enquiry button
- Similar properties
- Save property
- Compare property
- Share property using the native share API when available, otherwise copy the URL
- Report listing form

Never show a precise residential address unless present in the mock data and appropriate for display. Use locality-level location descriptions by default.

## 8. PROPERTY COMPARISON

Allow users to compare up to four properties.

Create a /compare page that displays:
- Property image and title
- Asking price
- Price per square foot
- Property type
- Area
- Bedrooms and bathrooms
- Furnishing
- Possession status
- Amenities
- Parking
- Locality
- Key differences

Highlight the lowest price and largest area where values are comparable.

Comparison data must come from the selected mock listings. Allow removal of individual properties.

## 9. SAVED PROPERTIES AND RECENTLY VIEWED

Create /saved-properties and /recently-viewed pages.

Features:
- Save and unsave listings.
- Persist saved IDs in localStorage.
- Record recently viewed properties.
- Remove individual saved properties.
- Clear recent history.
- Provide helpful empty states.
- Allow navigation back to property details.

These features must work without user accounts or backend authentication.

## 10. NEW PROJECTS

Create /projects and /project/:id pages.

Project listing cards should include:
- Project name
- Developer name
- Location
- Project images
- Starting price
- Configurations
- Project status
- Possession timeline
- Available amenities
- Project overview
- Enquire Now CTA

Add project filters for city, locality, budget, project status, configuration, and possession timeline.

Provide a dedicated project detail page containing gallery, overview, available configurations, amenities, location information, and an enquiry form.

Project information must use mock data and must not imply a real developer partnership unless confirmed.

## 11. COMMERCIAL PROPERTIES

Create a dedicated /commercial page.

Include:
- Offices for sale
- Offices for lease
- Retail shops
- Showrooms
- Warehouses
- Industrial properties
- Co-working spaces
- Commercial land

Filters:
- Sale or lease
- Budget or monthly rent
- Carpet area and built-up area
- Property type
- Furnishing
- Parking
- Floor
- Business district
- Possession status

Commercial cards must display the most relevant metrics, including carpet area, lease price, sale price, and monthly rent where applicable.

Add a dedicated commercial enquiry form for businesses, landlords, and investors.

## 12. PLOTS AND LAND

Create /plots with categories for residential, commercial, and agricultural plots.

Include:
- Plot area
- Price
- Price per square foot where available
- Location
- Road access
- Plot dimensions when known
- Ownership/documentation status as explicitly provided in mock data
- Development status
- Enquiry CTA

Allow filtering and sorting.

Do not present legal approval or land-title claims as verified facts unless explicitly supported by the data.

## 13. LIST YOUR PROPERTY

Create /list-property with a multi-step form.

Step 1: Choose transaction type.

Step 2: Choose property category.

Step 3: Enter location and property details.

Step 4: Enter pricing, area, furnishing, and possession details.

Step 5: Enter owner or authorized contact information.

Step 6: Add image URLs and description.

Step 7: Review and submit.

Requirements:
- Required field validation.
- Inline validation messages.
- Back and next buttons.
- Progress indicator.
- Final confirmation screen.
- Save submissions to a mock enquiries/listing submissions collection in localStorage.
- Newly submitted properties should appear in the admin panel as pending listings.
- Pending listings must not automatically appear in the public approved property catalogue.
- Allow the admin to approve, reject, edit, or delete submissions.

This is a frontend-only demo submission workflow. Clearly document that it does not transmit information to a server.

## 14. ENQUIRY AND LEAD MANAGEMENT EXPERIENCE

Add working enquiry forms to:
- Property detail pages
- Project pages
- Commercial pages
- Contact page
- List Property page
- Site visit booking
- Valuation requests

Fields:
- Full name
- Phone
- Email
- Enquiry type
- Preferred property
- Preferred date for site visit, where applicable
- Budget
- Message
- Consent checkbox

Validate all forms. Store submitted enquiries in localStorage and display a success confirmation.

Include quick contact actions:
- Call
- Email
- WhatsApp

Use the supplied phone number and email. The WhatsApp link should use the appropriate wa.me URL for the supplied phone number, with an enquiry message.

Add a lead tracking identifier generated locally for each submission.

## 15. PROPERTY SERVICES

Create a /services page with detailed service cards:

- Residential Property Buying
- Residential Property Renting
- Property Resale
- Commercial Property Leasing
- Commercial Property Sales
- New Project Advisory
- Plot and Land Advisory
- Property Valuation Advisory
- Site Visit Coordination
- Buyer-Seller Negotiation
- Documentation Assistance
- Investment Property Consultation
- Landlord Assistance
- Tenant Assistance

Each service needs a description, CTA, and enquiry form or modal.

Make the services page editable through the admin panel.

## 16. LOCALITY INSIGHTS AND MARKET TRENDS

Create /locality-insights and /locality/:slug pages.

Use mock data for Pune areas such as:
- Kharadi
- Viman Nagar
- Hadapsar
- Baner
- Wakad
- Hinjawadi
- Wagholi
- Koregaon Park
- Kalyani Nagar
- Magarpatta

Include:
- Locality overview
- Lifestyle highlights
- Connectivity
- Nearby facilities
- Typical property types
- Indicative mock price ranges
- Sample price trend chart rendered using inline SVG or CSS
- Related property listings
- Similar localities
- Enquiry CTA

Every market statistic must be marked "Illustrative demo data" unless supported by genuine current research. Do not invent factual market claims or represent mock trends as real transaction data.

## 17. PROPERTY INVESTMENT AND BUYER RESOURCES

Create an /insights section featuring:
- Buying guides
- Renting guides
- Seller resources
- Commercial property guides
- Investment basics
- Property documentation checklists
- Homebuyer FAQs
- Real estate glossary

Articles must be editable from the admin panel.

Include category filters, article detail pages, related articles, and search.

Avoid unsupported financial returns, guaranteed appreciation, or investment promises.

## 18. ABOUT SKYARTH PROPERTY

Create /about featuring:
- Business introduction
- Company mission
- Service approach
- Transparent property dealings
- End-to-end transaction assistance
- Customer-first approach
- Professional service values
- Contact CTA

Use a premium architectural banner and professional visual layout.

Do not invent founder names, staff biographies, registration numbers, awards, client counts, or testimonials.

## 19. CONTACT PAGE

Create /contact containing:
- Office address
- Phone number
- Email
- Contact enquiry form
- Request a callback
- Request a property valuation
- Schedule a site visit
- Business hours editable in admin
- Directions link to Google Maps using the supplied office address

Forms must work locally and save enquiries to localStorage.

Do not embed a third-party map SDK. Use a standard external directions link if needed.

## 20. FAQ AND TRUST INFORMATION

Create /faq with categorized, searchable questions covering:
- Buying property
- Renting property
- Commercial leasing
- Listing a property
- Site visits
- Valuation
- Negotiations
- Documentation
- Enquiries
- Privacy

Manage FAQs through the admin panel.

Include Privacy Policy, Terms and Conditions, and Disclaimer pages with editable demo content.

Make clear that SKYARTH Property facilitates transactions and that buyers, sellers, landlords, and tenants should independently verify relevant property and legal documentation.

## 21. ADMIN LOGIN AND ROUTING

Create a dedicated /admin/login route.

Create a frontend-only demo login with the following credentials:

Email: admin@skyarthupvc.com
Password: Skyarth@123

Display a clear notice that these are demo credentials and are not suitable for production security.

Requirements:
- Login form with validation.
- Show/hide password.
- Logout.
- Session state stored in sessionStorage.
- Protected admin routes.
- Redirect unauthenticated visitors to /admin/login.
- Redirect successful demo logins to /admin/dashboard.
- Add an "Admin Login" link in the website footer pointing to /admin/login.

Important: This is a frontend-only mock authentication system. Do not claim that client-side credentials or protected routes provide real security. Never store real passwords or confidential credentials in localStorage.

## 22. ADMIN DASHBOARD

Create a professional, responsive admin dashboard at /admin/dashboard.

Use a sidebar on desktop and a collapsible navigation drawer on mobile.

Dashboard overview cards:
- Total properties
- Published properties
- Pending property submissions
- Featured properties
- Total enquiries
- New enquiries
- Scheduled site visits
- Published projects

Use derived counts from the current mock data rather than hardcoded values.

Include a recent activity table and latest enquiries.

Use simple CSS or inline SVG charts for enquiry trends and property category distribution.

Provide global search and a profile menu.

## 23. ADMIN PROPERTY MANAGEMENT

Create /admin/properties.

The admin must be able to:
- View all properties.
- Search by property title or location.
- Filter by category, transaction type, status, and featured status.
- Create properties.
- Edit existing properties.
- Delete properties with a confirmation dialog.
- Preview property details.
- Publish and unpublish properties.
- Mark or unmark properties as featured.
- Change verification status.
- Update property images.
- Edit pricing, location, amenities, and description.
- Change listing status.
- Manage owner and consultant contact details.
- Approve or reject submitted listings.

Use a reusable property editor form with field validation.

Changes must update the public property catalogue and persist in localStorage.

## 24. ADMIN PROJECT MANAGEMENT

Create /admin/projects.

Allow admins to:
- Add, edit, and delete projects.
- Change project status.
- Manage project images.
- Edit developer name, configurations, amenities, location, pricing, and possession information.
- Publish or unpublish projects.
- Mark featured projects.
- Review project enquiries.

Changes must reflect immediately on the public website.

## 25. ADMIN LEADS AND ENQUIRIES

Create /admin/leads.

Show enquiries in a searchable table with:
- Lead ID
- Name
- Phone
- Email
- Enquiry type
- Related property or project
- Date received
- Status
- Assigned consultant
- Notes

Statuses:
- New
- Contacted
- Qualified
- Site Visit Scheduled
- Negotiation
- Converted
- Closed
- Not Interested

Admin actions:
- View enquiry details.
- Change lead status.
- Add internal notes.
- Assign a consultant.
- Update site visit date.
- Search and filter leads.
- Delete demo records after confirmation.
- Export enquiries as CSV using native JavaScript and Blob APIs.

Keep all data local to the browser.

## 26. ADMIN WEBSITE CONTENT MANAGEMENT

Create /admin/content.

Make the following website sections editable:
- Logo text and tagline
- Homepage hero headline
- Homepage supporting text
- Hero image URL
- CTA labels
- Featured properties
- Featured projects
- Homepage service sections
- About section
- Contact details
- Office address
- Phone number
- Email
- Business hours
- Footer text
- Navigation labels
- FAQs
- Articles and guides
- Testimonials section
- Locality insights
- Privacy policy
- Terms
- Disclaimer

All changes should update the public website immediately through shared React state and localStorage.

For testimonials, use clearly marked demo content and provide controls to remove it. Never invent real customer reviews.

## 27. ADMIN MEDIA MANAGEMENT

Create /admin/media.

Allow the admin to:
- Add image URLs.
- Preview images.
- Edit image titles and alt text.
- Associate image URLs with properties and projects.
- Select a hero banner image.
- Remove image records.
- Choose from predefined local demo image URLs.

Because no upload service or backend is allowed, explain that media management uses image URLs and does not upload files to a server.

Handle broken images with a fallback image or styled placeholder.

## 28. ADMIN SITE SETTINGS

Create /admin/settings.

Include:
- Business name
- Tagline
- Address
- Phone
- Email
- WhatsApp number
- Business hours
- Default property currency: INR
- Default area units: sq.ft. and sq.m.
- Homepage featured sections
- Listing display limits
- Demo mode indicator
- Reset mock data button with confirmation
- Export mock data as JSON
- Import valid JSON backup using a native file input and JSON.parse
- Reset selected content to defaults

All editable settings must persist in localStorage.

## 29. ADMIN USERS AND CONSULTANTS

Create /admin/team.

This is a demo team management interface only.

Allow the admin to manage consultant display names, roles, contact information, profile image URLs, and active status.

Assign consultants to leads.

Do not create real user accounts or pretend to implement secure multi-user permissions.

## 30. ADMIN REPORTS

Create /admin/reports.

Display:
- Property inventory by category
- Listings by status
- Enquiries by status
- Enquiries by source
- Monthly mock enquiry counts
- Featured property inventory
- Project inventory

Use native SVG or CSS for charts and JavaScript for aggregation.

Clearly label analytics as based on locally stored demo data.

Allow CSV export of suitable reports.

## 31. MOCK DATA REQUIREMENTS

Create separate JavaScript data modules for:
- properties
- projects
- localities
- services
- articles
- FAQs
- testimonials
- team members
- enquiries
- site visits
- site settings
- media

Include at least 18 realistic, varied demo properties across Pune locations and a few other Indian cities.

Include a variety of:
- Residential apartments
- Villas
- Resale properties
- Rental properties
- Commercial offices
- Shops
- Warehouses
- Residential plots
- Commercial land

Include at least 6 demo projects and 8 locality profiles.

Each property should contain a unique ID, title, description, category, transaction type, price, rent where relevant, area, area unit, location, locality, city, images, amenities, property specifications, contact details, published status, featured status, and verification status.

Use realistic Indian pricing and formatting. All listings must be labeled as demo inventory in the appropriate site disclaimer.

Create reusable functions for:
- Filtering
- Sorting
- Searching
- Currency formatting in INR
- Area formatting
- Generating local IDs
- Form validation
- Saving and loading localStorage data
- Exporting CSV and JSON
- Image fallback handling

Avoid duplicated mock data across components.

## 32. PERSISTENCE AND STATE MANAGEMENT

Use React Context and native hooks to maintain shared application state.

Initialize data from localStorage, falling back to default mock data.

Persist changes after:
- Property creation and editing
- Publishing and unpublishing
- Enquiry submission
- Lead status changes
- Project editing
- Website content editing
- Settings changes
- Saving properties
- Updating team members
- Managing FAQs and articles

Use versioned localStorage keys and defensive JSON parsing.

Keep admin edits and public page data synchronized during the active browser session.

Handle empty storage, malformed JSON, and reset operations gracefully.

Provide loading, success, error, empty, and confirmation states where appropriate.

Never imply that locally stored data is synchronized between different devices or browsers.

## 33. FOOTER

Create a rich footer with:
- SKYARTH Property branding
- Short company description
- Quick links
- Buy
- Rent
- Commercial
- New Projects
- Plots & Land
- Property Services
- About
- Contact
- Privacy Policy
- Terms and Conditions
- Disclaimer
- Office address
- Phone
- Email
- WhatsApp contact link
- Copyright notice

**Mandatory: Include a visible "Admin Login" footer link pointing to /admin/login.**

The footer should be elegant, dark navy, and consistent across all public pages.

## 34. RESPONSIVE DESIGN AND ACCESSIBILITY

Ensure complete responsive behavior for:
- Desktop
- Laptop
- Tablet
- Mobile

Requirements:
- No horizontal overflow.
- Mobile-friendly property filters.
- Responsive image galleries.
- Collapsible admin sidebar.
- Accessible labels and keyboard controls.
- Semantic headings.
- Appropriate alt text.
- Form validation and helpful error messages.
- Adequate color contrast.
- Touch-friendly controls.
- Consistent spacing and typography.

## 35. SEO AND PERFORMANCE

Implement:
- Descriptive page titles.
- Meta descriptions.
- Semantic HTML.
- Clean readable URL paths where possible.
- Proper image alt attributes.
- Internal links between properties, projects, localities, and guides.
- Lightweight components.
- Lazy loading for below-the-fold images.
- No unnecessary dependencies.
- No external analytics or tracking scripts.

Use standard browser capabilities only.

## 36. REQUIRED ROUTES

Public:
/
 /properties
 /property/:id
 /buy
 /rent
 /commercial
 /projects
 /project/:id
 /plots
 /compare
 /saved-properties
 /recently-viewed
 /list-property
 /services
 /about
 /contact
 /locality-insights
 /locality/:slug
 /insights
 /insights/:slug
 /faq
 /privacy-policy
 /terms
 /disclaimer

Admin:
 /admin/login
 /admin/dashboard
 /admin/properties
 /admin/projects
 /admin/leads
 /admin/content
 /admin/media
 /admin/team
 /admin/reports
 /admin/settings

Ensure all links work, direct route loading works within the Vite development setup, and invalid routes show a custom 404 page.

## 37. FINAL ACCEPTANCE CRITERIA

Before considering the website complete, verify all of the following:

1. The project uses React, Vite, and Tailwind CSS only, with no extra dependencies.
2. No database or backend is present.
3. The website has a premium, consistent SKYARTH Property identity.
4. The homepage includes an architectural hero banner and working search.
5. Search and filters return the correct mock properties.
6. Property details load using their IDs.
7. Saving and comparing properties works.
8. The list-property form submits to a pending admin queue.
9. Enquiries are saved and visible in the admin panel.
10. The admin login redirects correctly.
11. Unauthenticated admin access redirects to the login page.
12. The footer contains the Admin Login link.
13. Property CRUD operations work.
14. Project CRUD operations work.
15. Website content edits appear on the public site.
16. Lead statuses and notes persist.
17. Settings, mock data exports, and reset functionality work.
18. Responsive navigation and mobile filters work.
19. Broken images and empty states are handled.
20. No buttons are decorative or nonfunctional.
21. No real company metrics, testimonials, legal claims, or property verification claims are fabricated.
22. The application builds and runs successfully using Vite.
23. The browser console has no avoidable runtime errors.
24. No backend, database, or unapproved dependency is introduced.

## FINAL INSTRUCTION

Build the complete working application, not merely the homepage.

Prioritize implementation quality, consistent reusable components, functional admin CRUD, synchronized mock data, a premium property discovery experience, and responsive layouts.

If the full scope is too large for one generation, implement it in coherent phases while preserving the architecture and finishing the core end-to-end flows first. Do not remove major features silently or replace functional pages with placeholder screens.

Start by creating the React + Vite + Tailwind CSS project structure, mock data modules, reusable layout, shared state, public pages, and admin dashboard. Then implement all remaining routes and test the complete workflow.

Remember: NO DATABASE, NO BACKEND, NO EXTRA LIBRARIES, MOCK DATA ONLY.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f7405719-680e-48f9-9f70-41879007e728).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
