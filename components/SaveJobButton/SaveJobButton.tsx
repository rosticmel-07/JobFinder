"use client";

import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import css from "./SaveJobButton.module.css";
import toast from "react-hot-toast";

type SaveJobButtonProps = {
  jobId: string;
};

export default function SaveJobButton({ jobId }: SaveJobButtonProps) {
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("saved-jobs");

    if (saved) {
      setSavedJobIds(JSON.parse(saved));
    }

    setIsLoaded(true);
  }, []);

  const isSaved = savedJobIds.includes(jobId);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("saved-jobs", JSON.stringify(savedJobIds));
  }, [savedJobIds, isLoaded]);

  const handleSave = () => {
    if (isSaved) {
      setSavedJobIds((prev) => prev.filter((id) => id !== jobId));
    } else {
      setSavedJobIds((prev) => [...prev, jobId]);
    }
  };
  const handleButtonClick = () => {
    if (isSaved) {
      toast.success("Job removed from saved jobs!");
    } else {
      toast.success("Job saved successfully!");
    }
    handleSave();
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`${css.saveButton} ${isSaved ? css.saved : ""}`}
    >
      <Bookmark size={18} />
      {isSaved ? "Saved" : "Save"}
    </button>
  );
}
