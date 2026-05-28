"use client";
import { Bookmark } from "lucide-react";
import css from "./SaveJobButton.module.css";
import { useState } from "react";
export default function SaveJobButton() {
  const [isSaved, setIsSaved] = useState(false);
  const handleSave = () => {
    setIsSaved(!isSaved);
  };
  return (
    <button
      onClick={handleSave}
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: isSaved ? "#4CAF50" : "#f0f0f0",
        color: isSaved ? "#ffffff" : "#333333",
        border: "none",
        cursor: "pointer",
        transition: "0.3s",
      }}
      className={css.saveButton}
    >
      {" "}
      <Bookmark size={18} /> {isSaved ? "Saved" : "Save"}{" "}
    </button>
  );
}
