import s from './Button.module.css';

function Button({ addImages }) {
  return (
    <button type="button" className={s.button} onClick={() => addImages()}>
      Load more
    </button>
  );
}

export default Button;
