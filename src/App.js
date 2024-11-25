
import './css/style.css'
import './css/bootstrap.css'
import './css/style.css.map'
import  SlideOferta from './pages/componentsApp/SlideOferta'
import './css/app.css'



function App() {
 

  return (
    <div className="App">
        <div className="hero_area">
    <div className="bg-box">
    
      
    </div>
    
     {/*'header section strats'*/}
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              Parada Obrigatória
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="menu.html">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="book.html">Reservas</a>
              </li>
            </ul>
            <div className="user_option">
              <a href="index.html" className="user_link">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
              <a className="cart_link" href="#index.html">
              <img width="35" height="35" src="https://img.icons8.com/sf-regular-filled/35/FFFFFF/shopping-cart.png" alt="shopping-cart"/>
              </a>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a href="index.html" className="order_online">
                Pedido Online
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}

    
    <section className="slider_section">
     
      <SlideOferta />
   
    </section>
    
  </div>

    </div>
  );
}

export default App;
