import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import { useSelector, useDispatch} from 'react-redux';

const ProductScreen = (props) => {
    
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            //
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return <div> 
            <div className="back-to-result">
                <Link to='/'>Volver a inicio</Link>
            </div>
            { loading ? <div> Cargando.. </div> :
                error ? <div> {error} </div> :
                (
                    <div className="details">
                        <div className="details-image">
                            <img src={product.image} alt="imgcake"></img>
                        </div>
                    <div className="details-info" >
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.rating} Estrellas ({product.numReviews} )
                            </li>
                            <li>
                            Precio: <b>${product.price}</b>
                            </li>
                            <li>
                                Descripción:
                                <div>
                                    {product.description}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>
                                Precio: {product.price}
                            </li>
                            <li>
                                Estatus: {product.countInStock > 0 ? "En existencia" : "Sin existencia"
                                }
                            </li>
                            <li>
                                Cantidad: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                  {[...Array(product.countInStock).keys()].map(x=>
                                    <option value={x+1}>{x+1}</option>
                                  )}
                                </select>
                            </li>
                            <li>
                                {product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary">Añadir al carrito</button>
                                }
                               
                            </li>
            
                        </ul>
                    </div>
                </div>
                )
            }
            </div>
}

export default ProductScreen
