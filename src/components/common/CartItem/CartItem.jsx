import React, { Component } from 'react';
import Image from '../Image/Image';
import Counter from '../Counter/Counter';
import styles from './styles.module.css';
import ProductInfo from '../ProductInfo/ProductInfo';
import ImageSlider from '../ImageSlider/ImageSlider';

class CartItem extends Component {
  incrementProductCount = () => {
    this.props.incrementProductCount(this.props.index);
  }

  decrementProductCount = () => {
    this.props.decrementProductCount(this.props.index);
  }

  render() {
    const mainStyle = this.props.isOverlay
      ? `${styles.cartItemOverlay} ${this.props.className ? this.props.className : ''}`
      : `${styles.cartItem} ${this.props.className ? this.props.className : ''}`;
      const { gallery, name } = this.props.product;

    return (
      <li
        className={mainStyle}
      >
        <ProductInfo
          product={this.props.product}
          activeCurrency={this.props.activeCurrency}
          selectedAttributeList={this.props.selectedAttributeList}
          isOverlay={this.props.isOverlay}
          isCart={this.props.isCart}

        />
        <Counter
          className={styles.counter}
          count={this.props.product.count}
          incrementCount={this.incrementProductCount}
          decrementCount={this.decrementProductCount}
        />
        { this.props.isOverlay && (
            <div className={styles.mainImageWrp}>
              <Image
                className={styles.mainImage}
                alt={name}
                src={gallery[0]}
              />
            </div>
          )
        }

        { this.props.isCart && (
            <ImageSlider
              className={styles.imageSlider}
              gallery={this.props.product.gallery}
              alt={this.props.product.name}
            />
          )
        }
      </li>
    );
  }
}

export default CartItem;
