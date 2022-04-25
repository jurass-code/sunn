import React, { useState } from "react";
import s from "./Gallery.module.css";
type Props = { photos: string[] };
export const Gallery: React.FC<Props> = ({ photos }) => {
  const [idxMainImage, setIdxMainImage] = useState(0);
  return (
    <div className={s.gallery}>
      <div className={s.gallery__items}>
        {photos.map((el, i) => {
          if (i !== idxMainImage) return <ItemGallery setIdxMainImage={setIdxMainImage} key={i} idx={i} photo={el} />;
          else return "";
        })}
      </div>
      <div className={s.mainImageBox}>
        <img className={s.mainImage} src={photos[idxMainImage]} alt="Product" />
      </div>
    </div>
  );
};

type ItemGalleryPropsType = { photo: string; idx: number; setIdxMainImage: (idx: number) => void };
const ItemGallery: React.FC<ItemGalleryPropsType> = ({ photo, idx, setIdxMainImage }) => {
  return (
    <div
      onClick={() => {
        setIdxMainImage(idx);
      }}
      className={s.itemGallery}
    >
      <img className={s.itemGalleryImg} src={photo} alt="ItemGallery" />
    </div>
  );
};
