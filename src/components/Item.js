import React from 'react'
import '../assets/css/amorios.css'
function Item(props) {
    return (
        <div className="ItemK">
            <div className="image"><img src={props.image} alt={"Imagen"} width="100%" /></div>
            <div className='title'>{props.title}</div>
            <div className='description'> {props.description}</div>
        </div>
    )
}
export default Item;
 /*  <div className="actions">
              <button >Eliminar</button>
          </div>*/
