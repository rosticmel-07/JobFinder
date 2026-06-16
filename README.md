# JobFinder

JobFinder is a job search and application tracking dashboard built with Next.js and React. The application helps users browse vacancies, save interesting jobs, submit applications, and track their job search progress in one place.

## Features

### Dashboard

* Dynamic statistics based on user activity
* Applications tracking
* Saved jobs counter
* Interview tracking
* Rejected applications tracking
* Recent applications section

### Browse Jobs

* Browse available job opportunities
* Search jobs by title
* Filter jobs by level (Junior, Middle, Senior)
* View detailed job information

### Job Details

* Job description
* Salary information
* Job type and level
* Save jobs to favorites
* Apply for a position directly from the page

### Applications Management

* Submit job applications
* Track application statuses
* Change application status:

  * Applied
  * Interview
  * Rejected
  * Offer
* Delete applications

### Saved Jobs

* Save and remove favorite jobs
* Quick access to bookmarked opportunities

### User Experience

* Toast notifications
* Empty states
* Responsive design
* Persistent data storage using LocalStorage

## Tech Stack

* Next.js 16
* React
* TypeScript
* CSS Modules
* Formik
* Yup
* React Hot Toast
* Lucide React

## Project Structure

```bash
app/
├── dashboard/
├── jobs/
│   └── [jobId]/
├── applications/
├── saved/
└── page.tsx

components/
├── StatsCards/
├── RecentApplications/
├── JobsCards/
├── ApplyButton/
├── SaveJobButton/
└── Sidebar/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Future Improvements

* Authentication
* Backend integration
* Database support
* Company profiles
* User profile management
* Dark mode
* Charts and analytics
* Real API integration

## Author

Rostyslav Melnychuk

Frontend Developer focused on React, Next.js, and modern web applications.
