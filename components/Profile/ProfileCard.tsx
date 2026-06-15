import { Pencil } from "lucide-react";
import AvatarUpload from "./AvatarUpload/AvatarUpload";
import css from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <aside className={css.wrapper}>
      <AvatarUpload />

      <div className={css.profileInfo}>
        <h3 className={css.name}>Rostyslav Melnychuk</h3>
        <p className={css.role}>Frontend Developer</p>

        <button className={css.editButton}>
          <Pencil size={18} />
          Edit Profile
        </button>
      </div>

      <div className={css.contacts}>
        <h4>Contacts</h4>

        <div className={css.info}>
          <p>📧 rostikmel@example.com</p>
          <p>⭐ Experience: 1 year</p>
          <p>🎓 Education: GoIT</p>
          <p>🛠 React, JavaScript, Node.js</p>
        </div>
      </div>
    </aside>
  );
}
