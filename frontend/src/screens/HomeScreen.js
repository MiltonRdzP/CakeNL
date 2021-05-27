import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import {Carousel} from '3d-react-carousal';
const HomeScreen = (props) => {

  let slides = [
    <img  src="images/c1.jpeg" alt="1" style={{width:"800px", height:"350px"}}/>,
    <img  src="images/c2.jpeg" alt="2" style={{width:"800px", height:"350px"}}/>  ,
    <img  src="images/c3.jpeg" alt="3" style={{width:"800px", height:"350px"}}/>   ];
    
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProducts());
      return () => {
      };
    }, []);

    return ( 
      <div>
        <div style={{"margin-top": "20px"}}>
        <Carousel slides={slides} autoplay={true} interval={8000}/>
        </div>

      {
        loading ? <div>Cargando...</div> :
        error ? <div>{error}</div> :
        (
         <ul className="products">
           
              {
                products.map(product =>
                  <li key={product._id}>
                  <div className="product" >
                  <Link to={'/product/' + product._id}>
                      <img className="product-image" src={product.image} alt="product" />
                  </Link>
                    <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.rating} Estrellas ({product.numReviews})</div>
                  </div>
                </li>
                  )
              }   
            </ul>
        )
      }
          
   
      </div>
    )
}

export default HomeScreen
