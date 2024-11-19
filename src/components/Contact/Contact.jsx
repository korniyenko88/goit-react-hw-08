
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';


const Contact = ({ data: { id, name, number } }) => {
  return (
    <li className={styles.item}>
      <div className={styles.iteminfo}>
        <span className={styles.name}>🙍‍♂️{name}</span>
        <span>📞{number}</span>
      </div>
      <button
        onClick={() => useDispatch(deleteContact({ id, name, number }))}
        className={styles.btn}
        type="button"
      >
        ❌
      </button>
    </li>
  );
};

export default Contact;
