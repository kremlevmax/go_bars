import React from "react";
import styles from "../styles/OurProducts.module.css";
import Carousel from "./Carousel";
import ItemCard from "./ItemCard";

const OurProducts = () => {
  return (
    <div className={styles.ourProductsWrapper}>
      <div className={styles.ourProducts}>
        <h1>Our Products</h1>
        <p>
          I&apos;m a paragraph. Click here to add your own text and edit me.
          It&apos;s easy.
        </p>
        <Carousel>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </Carousel>
      </div>
    </div>
  );
};

export default OurProducts;
