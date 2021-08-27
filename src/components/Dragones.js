import react from 'react';
import { NavLink } from 'react-router-dom'
import Dra1 from '../assets/images/Dra1.jpg'
import Dra2 from '../assets/images/Dra2.jpg'
import Dra3 from '../assets/images/Dra3.jpg'
import Familia from '../assets/images/familia.jpg'
class Dragones extends react.Component {
    render() {
        return (
            <react.Fragment>
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

  <div className="carousel-inner ">
    <div className="carousel-item active" >
      <img src={Familia} className="d-block w-100" height='645'alt="..." />
      <h1 className="text-uppercase mb-2 font-weight-bold">Los tres hermanos</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
    </div>
    <div className="carousel-item">
      <img src={Dra1} className="d-block w-100"  alt="..."/>
      <h1 className="text-uppercase mb-2 font-weight-bold">Drogon</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
    </div>
    <div className="carousel-item">
      <img src={Dra2} className="d-block w-100" height='645' alt="..."/>
      <h1 className="text-uppercase mb-2 font-weight-bold">Viserion</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
    </div>
    <div className="carousel-item">
      <img src={Dra3} className="d-block w-100" height='645' alt="..."/>
      <h1 className="text-uppercase mb-2 font-weight-bold">Rhaegal</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
          </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

                    <div><NavLink to='/' className='btn btn-dark' >Volver</NavLink></div>
            </react.Fragment>
        )
    }
}
export default Dragones; 