import css from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <div className={css.wrapper}>
      <label htmlFor="search" className={css.label}></label>

      <input
        id="search"
        className={css.input}
        type="text"
        placeholder="Search for a job..."
      />
    </div>
  );
}
