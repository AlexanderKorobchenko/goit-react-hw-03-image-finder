import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ array }) {
  return (
    <>
      {array.map(element => {
        return (
          <li className={s.card} key={element.id}>
            <img
              className={s.image}
              src={element.webformatURL}
              alt={element.id}
              data={element.largeImageURL}
            />
            {/* <div className={s.stats}>
              <p className={s.item}>
                <i className={s.icons}>thumb_up</i>
                {element.likes}
              </p>
              <p className={s.item}>
                <i className={s.icons}>visibility</i>
                {element.views}
              </p>
              <p className={s.item}>
                <i className={s.icons}>comment</i>
                {element.comments}
              </p>
              <p className={s.item}>
                <i className={s.icons}>cloud_download</i>
                {element.downloads}
              </p>
            </div> */}
          </li>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;
