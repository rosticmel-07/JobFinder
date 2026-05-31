import css from "./JobsFilters.module.css";
type JobsFiltersProps = {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
};
export default function JobsFilters({
  selectedLevel,
  onLevelChange,
}: JobsFiltersProps) {
  return (
    <div className={css.filters}>
      <button
        onClick={() => onLevelChange("All")}
        className={
          selectedLevel === "All"
            ? `${css.filterButton} ${css.filterButtonActive}`
            : css.filterButton
        }
      >
        All
      </button>

      <button
        onClick={() => onLevelChange("Junior")}
        className={
          selectedLevel === "Junior"
            ? `${css.filterButton} ${css.filterButtonActive}`
            : css.filterButton
        }
      >
        Junior
      </button>

      <button
        onClick={() => onLevelChange("Middle")}
        className={
          selectedLevel === "Middle"
            ? `${css.filterButton} ${css.filterButtonActive}`
            : css.filterButton
        }
      >
        Middle
      </button>

      <button
        onClick={() => onLevelChange("Senior")}
        className={
          selectedLevel === "Senior"
            ? `${css.filterButton} ${css.filterButtonActive}`
            : css.filterButton
        }
      >
        Senior
      </button>
    </div>
  );
}
