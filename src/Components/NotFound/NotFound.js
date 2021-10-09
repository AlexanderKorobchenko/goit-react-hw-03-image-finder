import s from './NotFound.module.css';

function NotFound({ value }) {
  return <span className={s.message}>Not found "{value}"</span>;
}

export default NotFound;
