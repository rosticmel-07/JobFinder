import css from "./EmptyState.module.css"
export default function EmptyState() {
    return (
      <p className={css.emptyState}>
        No jobs found.
        <br />
        Try changing your search query or filters.
      </p>
    );
}
