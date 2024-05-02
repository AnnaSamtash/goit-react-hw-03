import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox_container}>
      <h2 className={css.searchBox_title}>Find contacts by name</h2>
      <input
        className={css.searchBox_input}
        type="text"
        value={value}
        onChange={evt => {
          onFilter(evt.target.value);
        }}
      />
    </div>
  );
}
