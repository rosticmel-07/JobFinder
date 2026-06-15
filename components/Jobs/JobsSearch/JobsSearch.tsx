import css from "./JobsSearch.module.css";

interface JobsSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JobsSearch({ value, onChange }: JobsSearchProps) {
  return (
    <div className={css.wrapper}>
      <label htmlFor="search" className={css.label}>
        {" "}
      </label>
      <input
        id="search"
        className={css.input}
        type="text"
        value={value}
        placeholder="Search jobs..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
