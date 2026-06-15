"use client";

import { useState } from "react";
import css from "./AvatarUpload.module.css";

export default function AvatarUpload() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
  };

  return (
    <div className={css.wrapper}>
      <label className={css.avatarContainer}>
        {avatar ? (
          <img src={avatar} alt="Avatar preview" className={css.avatar} />
        ) : (
          <div className={css.placeholder}>Upload Photo</div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={css.input}
        />
      </label>
    </div>
  );
}
