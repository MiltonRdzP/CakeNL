import React from 'react';
import  {Route, BrowserRouter, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {FaBirthdayCake, FaShoppingCart, FaUserCircle} from 'react-icons/fa'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
              <Link to="/"><FaBirthdayCake
              style={{
                marginRight:"10px",
                marginLeft:"10px",
                marginTop:"2px"
              }}/>CakeNL</Link>
            </div>
            <div className="header-links">
              <Link to={"Cart"}><FaShoppingCart
              style={{
                marginRight:"5px",
                marginLeft:"5px",
                marginTop:"2px"
              }}
              />Carrito de compras</Link>
              {
              userInfo ? <Link to="/profile">{userInfo.name}</Link>
              :
              <a href="/signin"><FaUserCircle
              style={{
                marginRight:"5px",
                marginLeft:"5px",
                marginTop:"2px"
              }}/>Iniciar Sesión</a>
            }

              
            </div>
          </header>
          <aside className="sidebar">
            <h3>Categorias</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">Pasteles</a>
              </li>

              <li>
                <a href="index.html">Reposteria</a>
              </li>

            </ul>
          </aside>
          <main className="main">
          
            <div className="content">
            <Route path="/profile" component={ProfileScreen} />
              <Route path="/products" component={ProductsScreen} />         
              <Route path="/shipping" component={ShippingScreen} /> 
              <Route path="/payment" component={PaymentScreen} />                 
              <Route path="/placeorder" component={PlaceOrderScreen} />                 
              <Route path="/signin" component={SigninScreen} />             
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/register" component={RegisterScreen} />
            </div>
            </main>
            
          <footer className="footer">
            Cake NL     Derechos reservados ©
          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
