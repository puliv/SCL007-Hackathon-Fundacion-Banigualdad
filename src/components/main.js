import React, {Component} from 'react';
import './main.css'
import imagen from '../IMG/cremas.png'
import imagen1 from '../IMG/bolso.png'
import imagen2 from '../IMG/jacket1.png'
import {orderRef} from './firebase';

class Main extends Component {
        constructor(props){
            super(props);
            this.state = {
                data:null
            }
        }
        componentDidMount() {
            orderRef.once("value", snapshot => {
                this.setState({
                    ...this.state,
                    data: snapshot.val()
                })
            })
        }

        render () {
         
        let gg = [];   
        if(this.state.data)   {

            const users = [];    
        Object.keys(this.state.data).forEach(item =>{
            users.push(this.state.data[item])
        })
        const products = [];
        users.forEach(user => {
            if(user.productosOServicios){
                for(let item in user.productosOServicios){
                    products.push(user.productosOServicios[item])
                }
            }
        })
        
        const objectMap = products.map(item => {
            return (
                <div className="container">
                <div className="row">
                <div className="col s12 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="img-prod" src={item.foto} alt={item.nombreProducto}/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="tag-contain">
                                <button className="btn-small btn-categories">{item.rubro}</button>
                            </div>
                            <p className="description">{item.nombreProducto}</p>
                            <p className="price">{item.precio}</p>
                        </div>
                        <div className="card-action">
                            <a className="place" href="#">{item.ubicacion}</a>
                        </div>

                    </div>
                </div>
                </div>  

                
                </div>
            </div>

            )
        })
        gg=objectMap




        } 
        
        return gg;

    }   
}

export default Main;