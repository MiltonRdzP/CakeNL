import React from 'react';
import  {Route, BrowserRouter, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import {FaBirthdayCake, FaShoppingCart, FaUserCircle} from 'react-icons/fa'
function App() {
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
              <a href="cart.html"><FaShoppingCart
              style={{
                marginRight:"5px",
                marginLeft:"5px",
                marginTop:"2px"
              }}/>Carrito de compras</a>
              <a href="signin.html"><FaUserCircle
              style={{
                marginRight:"5px",
                marginLeft:"5px",
                marginTop:"2px"
              }}/>Iniciar Sesión</a>
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
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/" exact={true} component={HomeScreen} />
              
            </div>
            </main>
          <footer className="footer">
            All right reserved.
          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
