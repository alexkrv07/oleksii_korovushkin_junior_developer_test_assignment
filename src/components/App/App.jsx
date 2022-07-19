import React, { Component } from 'react';
import Header from '../Header/Header';
import ProductsPage from '../ProductsPage/ProductsPage';
import './app.css';

class App extends Component {

  state = {
    activeCategory: '',
    activeCurrency: {},
    cart: {
      items: 0,
      products: []
    },
    productId: null,
  }

  setActiveCategory = (category) => {
    this.setState({
      activeCategory: category,
    });
  };

  setActiveCurrency = (currency) => {
    this.setState({
      activeCurrency: currency,
    });
  };

  render() {
    return (
      <>
        <Header
          activeCategory={this.state.activeCategory}
          activeCurrency={this.state.activeCurrency}
          setActiveCategory={this.setActiveCategory}
          setActiveCurrency={this.setActiveCurrency}
        />
        <main className="main">
          <div className="container">
            <ProductsPage
              category={this.state.activeCategory}
              productId={this.props.productId}
              activeCurrency={this.state.activeCurrency}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
