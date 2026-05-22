import { fetchJobs } from "@/lib/api";
export default async function JobsCards() {
  const jobs = await fetchJobs();
  return (
    <div>
      <h1>Jobs List</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
