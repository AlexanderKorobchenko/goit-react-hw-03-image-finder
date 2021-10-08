import s from './Loader.module.css';

function Loader() {
  return (
    <div class={s.loader}>
      <div class={s.circle}></div>
      <div class={s.circle}></div>
      <div class={s.circle}></div>
    </div>
  );
}

export default Loader;
