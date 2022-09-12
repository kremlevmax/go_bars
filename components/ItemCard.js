import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/ItemCard.module.css";

const ItemCard = () => {
  const [imageSrc, setImageSrc] = useState("/cards/01_01.png");
  const [isBestseller, setIsBestseller] = useState(true);

  return (
    <div
      className={styles.itemCard}
      onMouseEnter={() => setImageSrc("/cards/01_02.png")}
      onMouseLeave={() => setImageSrc("/cards/01_01.png")}
    >
      <div className={styles.itemCardImageContainer}>
        {isBestseller && (
          <div className={styles.bestSellerBadge}>
            <span>Bestseller</span>
          </div>
        )}
        <Image src={imageSrc} width={251} height={251} alt='Product' />
        <div className={styles.itemQuickViewButton}>
          <span>Quick View</span>
        </div>
      </div>
      <div className={styles.itemCardDescContainer}>
        <p className={styles.itemName}>I&apos;m a product</p>
        <p className={styles.itemPrice}>$15.99</p>
      </div>
      <div className={styles.itemMenu}>
        <div className={styles.itemQuantity}>
          <span className={styles.itemMinusQuantity}>-</span>
          <span className={styles.itemQuantityNumber}>1</span>
          <span className={styles.itemPlusQuantity}>+</span>
        </div>
        <div className={styles.itemAddButton}>
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
