import styles from './Speciality.module.css';

export default function SpecialityList({ specialities, activeCat, setActiveCat }) {
  const cats = specialities.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? styles.active : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <ul className={styles.SpecialityList}>
      {cats}
    </ul>
  );
}