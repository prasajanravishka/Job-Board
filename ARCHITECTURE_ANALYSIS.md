# Job Board Architecture Analysis

## 📊 System Overview

This is a **Next.js 16** job board application with a client-server architecture. Data is stored in-memory using TypeScript arrays in the `data/jobs.ts` module.

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      JOB BOARD PLATFORM                     │
└─────────────────────────────────────────────────────────────┘

                    ┌─────────────────────┐
                    │   DATA LAYER        │
                    │  data/jobs.ts       │
                    │  (In-Memory Array)  │
                    │                     │
                    │ - jobs[] array      │
                    │ - addJob() function │
                    │ - Job interface     │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
    ┌──────────────────┐ ┌──────────────┐ ┌──────────────┐
    │   PAGES (Pages)  │ │ COMPONENTS   │ │   ACTIONS    │
    │                  │ │              │ │              │
    │ - / (Home)       │ │ - JobCard    │ │ - actions.ts │
    │ - /jobs          │ │ - JobFilters │ │   (Server)   │
    │ - /jobs/[id]     │ │ - Header     │ │              │
    │ - /companies     │ │ - Footer     │ │ Functions:   │
    │ - /companies/    │ │ - Hero       │ │ - createJob  │
    │   post-job       │ │ - Pagination │ │   Action     │
    └──────────────────┘ └──────────────┘ └──────────────┘
```

---

## 📄 Data Model

### Job Interface
```typescript
interface Job {
  id: string;              // Unique identifier (generated)
  title: string;          // Job title (e.g., "React Developer")
  company: string;        // Company name
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;       // Job location
  postedAt: string;       // Date posted (YYYY-MM-DD)
  salary?: string;        // Optional salary range
  skills: string[];       // Required skills array
  description: string;    // Full job description
}
```

**Current Dataset**: 15 pre-seeded jobs in `data/jobs.ts`

---

## 🔄 Page Connection Flow

### 1. **HOME PAGE** (`/`)
- **File**: [app/page.tsx](app/page.tsx)
- **Connections**:
  - ✅ Imports `jobs` from [data/jobs.ts](data/jobs.ts)
  - ✅ Renders `Hero` component
  - ✅ Renders `JobCard` components (first 5 jobs, paginated)
  - ✅ Renders `Pagination` component
  - ✅ Displays "Popular Categories" section (static data)
- **Data Flow**: 
  ```
  data/jobs.ts → Home Page → JobCard (displays jobs)
                           → Pagination (navigation)
  ```
- **Search Params**: `?page=1` (pagination)

---

### 2. **JOBS LISTING PAGE** (`/jobs`)
- **File**: [app/jobs/page.tsx](app/jobs/page.tsx)
- **Connections**:
  - ✅ Imports `jobs` from [data/jobs.ts](data/jobs.ts)
  - ✅ Renders `JobCard` components for filtered results
  - ✅ Renders `JobFilters` component
  - ✅ Renders `Pagination` component
- **Filtering Capabilities**:
  - Query search (`?q=react`)
  - Location filter (`?location=remote`)
  - Job type filter (`?type=Full-time`)
  - Skill filter (`?skill=JavaScript`)
  - Pagination (`?page=2`)
- **Data Flow**:
  ```
  Search Params (URL) ──→ JobsPage ──→ Filter jobs array ──→ JobCard
                                                           ──→ Pagination
  ```

---

### 3. **JOB DETAIL PAGE** (`/jobs/[id]`)
- **File**: [app/jobs/[id]/page.tsx](app/jobs/%5Bid%5D/page.tsx)
- **Connections**:
  - ✅ Imports `jobs` from [data/jobs.ts](data/jobs.ts)
  - ✅ Receives `id` parameter from URL
  - ✅ Finds specific job by ID
  - ✅ Returns 404 if job not found (via `notFound()`)
- **Dynamic Routing**: Uses `params.id` to look up job
- **Data Flow**:
  ```
  URL Parameter [id] ──→ JobDetail Page ──→ Find in jobs array ──→ Display Details
  ```

---

### 4. **COMPANIES LANDING PAGE** (`/companies`)
- **File**: [app/companies/page.tsx](app/companies/page.tsx)
- **Connections**:
  - ✅ Static content (no database connection)
  - ✅ CTA button links to `/companies/post-job`
- **Purpose**: Marketing page for companies to post jobs
- **Data Flow**: None (static content)

---

### 5. **POST JOB PAGE** (`/companies/post-job`)
- **File**: [app/companies/post-job/page.tsx](app/companies/post-job/page.tsx)
- **Connections**:
  - ✅ Renders `PostJobForm` component
  - ✅ Form submits to server action
- **Form Component**: [PostJobForm.tsx](app/companies/post-job/PostJobForm.tsx)
- **Data Flow**:
  ```
  User Input ──→ PostJobForm ──→ createJobAction (Server) ──→ addJob() ──→ jobs array
  ```

---

## 🔗 Server Action Connection

### **CREATE JOB ACTION**
- **File**: [app/companies/post-job/actions.ts](app/companies/post-job/actions.ts)
- **Type**: Server Action (`'use server'`)
- **Flow**:
  1. PostJobForm collects form data
  2. Calls `createJobAction(formData)`
  3. Extracts fields: title, company, location, type, skills, description
  4. Creates new Job object (without ID)
  5. Calls `addJob()` from [data/jobs.ts](data/jobs.ts)
  6. Invalidates cache for `/jobs` path
  7. Redirects to `/jobs` page

```typescript
// Data Flow in createJobAction:
FormData → Extract fields → Create Job object 
         → addJob() → Insert at start of jobs[] 
         → revalidatePath('/jobs') → redirect('/jobs')
```

---

## 🧩 Component Connection Map

| Component | Location | Uses Data From | Connects To |
|-----------|----------|-----------------|-------------|
| **JobCard** | components/JobCard/ | `jobs` array (individual) | Links to `/jobs/[id]` |
| **JobFilters** | components/JobFilters/ | N/A (UI only) | Updates search params |
| **Pagination** | components/Pagination/ | Page count | Navigates via `?page=` |
| **Header** | components/Header/ | N/A (UI only) | Navigation links |
| **Footer** | components/Footer/ | N/A (UI only) | Static content |
| **Hero** | components/Hero/ | N/A (UI only) | Static banner |
| **PostJobForm** | app/companies/post-job/ | N/A (form input) | Calls `createJobAction` |

---

## 📡 Data Flow Diagram - Complete Journey

### **Scenario 1: View All Jobs**
```
User visits / or /jobs
    ↓
Page loads and imports jobs[] from data/jobs.ts
    ↓
Jobs are filtered by search params (q, location, type, skill)
    ↓
Paginated slice of jobs array
    ↓
JobCard components render each job
    ↓
User clicks "View Details" on a job
    ↓
Navigate to /jobs/[job.id]
```

### **Scenario 2: View Job Details**
```
User visits /jobs/react-developer-techcorp-abc123
    ↓
Page receives params = { id: 'react-developer-techcorp-abc123' }
    ↓
Find job in jobs[] array where job.id === params.id
    ↓
Job found → Display full details
    ↓
If not found → Show 404 page
```

### **Scenario 3: Post New Job**
```
Company visits /companies/post-job
    ↓
See PostJobForm component
    ↓
Fill form (title, company, location, type, skills, description)
    ↓
Submit form (FormData object)
    ↓
PostJobForm sends to createJobAction (Server Action)
    ↓
Server Action processes FormData
    ↓
Calls addJob() to insert into jobs[] array
    ↓
Revalidates cache for /jobs
    ↓
Redirect to /jobs page
    ↓
New job appears in the list!
```

---

## 🔌 Module Dependencies

```
data/jobs.ts (Core Data Module)
  ├── Exports: jobs[], Job interface, addJob()
  └── Used by:
      ├── app/page.tsx (Home)
      ├── app/jobs/page.tsx (Jobs List)
      ├── app/jobs/[id]/page.tsx (Job Detail)
      ├── app/companies/post-job/actions.ts (Server Action)
      └── components/JobCard/JobCard.tsx

utils/idGenerator.ts (Utility)
  ├── Exports: generateJobId()
  └── Used by:
      └── data/jobs.ts (generates unique IDs)

components/* (UI Components)
  ├── JobCard → Links to /jobs/[id]
  ├── JobFilters → Updates search params
  ├── Pagination → Navigates pages
  ├── Hero, Header, Footer → Static UI
  └── PostJobForm → Triggers Server Action

app/companies/post-job/actions.ts (Server Actions)
  ├── createJobAction() → Modifies jobs array
  └── Calls: addJob(), revalidatePath(), redirect()
```

---

## 📍 Critical Connection Points

| Connection | Type | Direction | Purpose |
|-----------|------|-----------|---------|
| jobs.ts → All Pages | Import | Read | Fetch job data |
| SearchParams → JobsPage | URL Query | Read | Filter results |
| JobCard → /jobs/[id] | Link | Navigate | View details |
| PostJobForm → actions.ts | Server Action | Write | Create job |
| actions.ts → jobs.ts | Function Call | Write | Insert job |
| actions.ts → /jobs | Redirect | Navigate | Show new job |

---

## 🚀 Data Persistence Note

⚠️ **Important**: Current data storage is **in-memory only**:
- Jobs stored in `data/jobs.ts` as JavaScript array
- New jobs added via `addJob()` function
- **Data is lost on server restart**
- No database (SQL/NoSQL)
- Perfect for development/testing; not suitable for production

**To scale to production**, you would need to:
- Replace in-memory array with a real database (PostgreSQL, MongoDB, etc.)
- Implement API routes or ORM (Prisma, TypeORM, etc.)
- Add authentication for company job postings
- Implement pagination at database level

---

## 📋 URL Routes Summary

| Route | Page File | Data Source | Params |
|-------|-----------|-------------|--------|
| `/` | app/page.tsx | jobs[] | `?page` |
| `/jobs` | app/jobs/page.tsx | jobs[] | `?q`, `?location`, `?type`, `?skill`, `?page` |
| `/jobs/[id]` | app/jobs/[id]/page.tsx | jobs[] | `[id]` |
| `/companies` | app/companies/page.tsx | None | None |
| `/companies/post-job` | app/companies/post-job/page.tsx | FormData input | None |

---

## 🎯 Key Findings

✅ **Clear data flow**: Single source of truth in `data/jobs.ts`
✅ **Type-safe**: Full TypeScript support with `Job` interface
✅ **Modular**: Components are independent and reusable
✅ **Server Actions**: Uses Next.js 16 server actions for mutations
✅ **Search/Filter**: Multi-criteria filtering on client
✅ **Dynamic Routing**: Proper use of `[id]` dynamic segments
✅ **Pagination**: Implemented on client-side pagination

⚠️ **Considerations**:
- No backend database (in-memory only)
- Search params handled client-side (not indexed for SEO)
- No persistent storage after restart
- No authentication/authorization
- No API layer (data tightly coupled to Next.js)
