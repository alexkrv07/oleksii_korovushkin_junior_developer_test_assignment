import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Image from '../Image/Image';
import Price from '../Price/Price';
import { getPrice, setInitialtAttributes } from '../../../helpers/Product';
import styles from './styles.module.css';

class ProductCard extends Component {
  state = {
    isRedirect: false,
  }

  goToPageProductDescriptionPage = () => {
    this.setState({
      isRedirect: true
    });
  };

  addProductToCart = (event) => {
    event.stopPropagation();
    const selectedAttributeList = setInitialtAttributes(this.props.product);

    const productToCart = {
      ...this.props.product,
      selectedAttributeList,
      count: 1
    }
    this.props.addProductToCart(productToCart);
  }

  render() {

    const product = this.props.product;
    const price = getPrice(product, this.props.activeCurrency);
    const isInStock = this.props.product.inStock;

    if (this.state.isRedirect) {
      return <Navigate to={`/products/${product.id}`}/>
    }

    return (
      <li
        className={`${styles.productCard} ${this.props.className ? this.props.className : ''}`}
        onClick={this.goToPageProductDescriptionPage}
      >
        <Image
          className={styles.productCardImage}
          src={product.gallery[0]}
          alt={product.id}
          width={300}
        />
        <h3 className={styles.productCardTitle}>{`${product.brand} ${product.name}`}</h3>
        <Price
          className={styles.productPrice}
          price={price}
        />
        { isInStock &&
          <button
            className={styles.buttonAddToCart}
            onClick={this.addProductToCart}
          >
            <span className={styles.buttonAddToCartIcon}></span>
          </button>
        }
        {!isInStock &&
          <div className={styles.disactive}>
            Out of stock
          </div>
        }
      </li>
    );
  }
}

export default ProductCard;
