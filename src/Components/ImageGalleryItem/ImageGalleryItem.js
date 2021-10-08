import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ array }) {
  return (
    <>
      {array.map(element => {
        return (
          <li className={s.photo} key={element.id}>
            <img
              className={s.image}
              src={element.webformatURL}
              alt={element.id}
            />
          </li>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;
