import Image from "next/image";
import React from "react";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        <div className={styles.galleryDescription}>
          <h2>Go Bar Gallery</h2>
          <p>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            It&apos;s easy. Just click “Edit Text” or double click me to add
            your own content and make changes to the font.
          </p>
        </div>
        <div className={styles.gallery_images}>
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
          <Image
            src='/gallery/0101.jpeg'
            width={305}
            height={305}
            alt='instagram'
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
