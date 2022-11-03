import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllDogs } from "../../redux/actions";
import ProductCard from "../../components/ProductCard/ProductCard";
import img from "../../img-cp2/main-image-cp2.jpg";
import './Home.css'
// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllDogs();
  }
  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>;
        <img className='img' src={img} alt="main-img" />
        <h3>Products</h3>
        {this.props.products &&
          this.props.products.map((curr) => {
            return (
              <ProductCard
                key={curr.id}
                id={curr.id}
                name={curr.name}
                price={curr.price}
                stock={curr.stock}
                image={curr.image}
              />
            );
          })}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { products: state.products };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllDogs: () => dispatch(getAllDogs()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
