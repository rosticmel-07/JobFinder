import JobsCards from "@/components/Jobs/JobsCards/JobsCards";
export default function JobsPage() {
  return (
    <div>
      <h2>Browse Jobs</h2>
      <p>Find your next opportunity with our extensive job listings.</p>
      <button> Post a Job</button>
      <JobsCards />
    </div>
  );
}
