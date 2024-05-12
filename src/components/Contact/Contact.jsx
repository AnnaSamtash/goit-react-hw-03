import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ name, number, id, onDelete }) {
  return (
    <div className={css.contact_container}>
      <div className={css.contact_descr}>
        <p className={css.contact_descr_name}>
          <IoPersonSharp size={16} className={css.contact_descr_icon} />
          {name}
        </p>
        <p className={css.contact_descr_number}>
          <FaPhoneAlt size={16} className={css.contact_descr_icon} />
          {number}
        </p>
      </div>
      <button
        className={css.contact_btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
