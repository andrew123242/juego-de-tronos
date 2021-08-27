import React from 'react';
import { NavLink } from 'react-router-dom';
import Item from './Item';
import '../assets/css/amorios.css';
export default class Lista extends React.Component {

    constructor(props){
        super(props);
        this.state={
            Kings:[
                {id:0, title:'Khal Drogo', raza:'Vaes Dothrak', description:'Drogo fue un rico y poderoso Khal Dothraki. Antes de los treinta años, Drogo lideraba el más grande khalasar en el Mar Dothraki, con 40.000 guerreros. Sus jinetes de sangre eran Cohollo, Qotho y Haggo.',image: 'https://static.wikia.nocookie.net/hieloyfuego/images/0/0c/Khal_Drogo_by_Magali_Villeneuve%2C_Fantasy_Flight_Games©.jpg'},
                {id:1, title:'Hizdahr zo Loraq', raza:'Familia Loraq', description:'Hizdahr zo Loraq fue un antiguo comerciante de esclavos de la ciudad de Meereen,en la costa de la Bahía del Esclavo,y un scion de la Casa de Loraq,una antigua y orgullosa línea de esclavos.',image:'https://static.wikia.nocookie.net/gameofthrones/images/5/5f/Hizdahr_season_5_wars_to_come.jpg'},
                {id:2, title:'Daario Naharis', raza:'Tyrosh', description:'Daario Naharis es el capitán de la compañía mercenaria Cuervos de Tormenta. Es originario de Tyrosh. Se convierte en capitán de los Cuervos de Tormenta luego de asesinar a los otros dos capitanes.',image:'https://external-preview.redd.it/44Tn2PbnJqh4PNXfm7ieixjCobkLcdqawUy50flQLVE.jpg?auto=webp&s=138d2ada79d34ad5fe6031faf931674db19a829c'},
                {id:3, title:'Jon Snow', raza:'Casa Stark', description:'Lord Jon Snow es el Lord Comandante de la Guardia de la Noche nº 998. Es hijo bastardo de Lord Eddard Stark.',image:'https://i.pinimg.com/originals/e3/98/57/e39857c9cff6a34811b4a467334c008d.jpg'}
            ]
            
        };
    }

    render() {  
    let mensaje="";
    let num= Math.floor ( Math.random ()* this.state.Kings.length) ;
        if(num< 0.1) {
            mensaje=(
                <React.Fragment>
                    <h2 className='mensaje'>Eres digno, podras seguir conmigo</h2>
                </React.Fragment>
            )

        }
        else{
            mensaje=(
                <React.Fragment>
                    <h2 className='mensaje'>No eres digno, tu castigo sera la exclavitud y se te sacaran los ojos</h2>
                </React.Fragment>
            )   
        }
         

        return(
            <React.Fragment>
             <div className='body-amorios'>
                <div className='list'>
            {
                this.state.Kings.map( item => {
                    return(
                            <Item key={item.id}
                                  title= {item.title} 
                                  image = {item.image} 
                                  description={item.description}/>
                       
                    );
            }) }  
                </div>
                <div> <NavLink to='/' className='btn btn-dark'>Atras</NavLink></div>
                <form>
                    <input type="text" onChange={this.state.title} className='entrada'></input>
                    <input type="submit" value="Enviar" className='send' onChange={this.state.title}>
                    </input>
                    {
                        mensaje
                        
                    }
                 
                </form>
                
            </div>
            </React.Fragment>
                   
    
        )
    }
}