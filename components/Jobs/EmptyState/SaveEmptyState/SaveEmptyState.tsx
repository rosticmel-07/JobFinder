import css from "./SaveEmptyState.module.css";
export default function SaveEmptyState() {
  return (
    <p className={css.emptyState}>
      No saved jobs yet
      <br />
      Browse jobs and save opportunities to see them here.
    </p>
  );
}
