import React, { Component } from 'react';
import firebase from 'firebase';
import {DB_CONFIG} from '../Initializers/firebase'

class SearchRegion extends Component {
  constructor(props){
    super(props);
    firebase.initializeApp(DB_CONFIG);
    
  }
  filterRegion(userSelect){
    console.log(userSelect.userSelect);

    
    var ref = firebase.database().ref();
    ref.orderByChild("Region").equalTo(userSelect.userSelect).on("value", 
    function(snapshot) {
     
      console.log(snapshot.val());
    });
  }
  render() {
    return (
      <div >
     <select id="selectRegion" onChange={event => this.filterRegion({userSelect:event.target.value})}>
                    <option value="0" defaultValue>Seleccione Región</option>
                    <option value="Tarapacá">Región de Tarapacá</option>
                    <option value="Antofagasta">Región de Antofagasta</option>
                    <option value="Atacama">Región de Atacama</option>
                    <option value="Coquimbo">Región de Coquimbo</option>
                    <option value="Valparaíso">Región de Valparaíso</option>
                    <option value="Libertador">Región del Libertador Gral. Bernardo O'Higgins</option>
                    <option value="Maule">Región del Maule</option>
                    <option value="Ñuble">Región del Ñuble</option>
                    <option value="Bíobío">Región del Bíobío</option>
                    <option value="La Araucanía">Región De La Araucanía</option>
                    <option value="Los Ríos">Región de Los Ríos</option>
                    <option value="Los Lagos">Región de Los Lagos</option>
                    <option value="Metropolitana">Región Metropolitana</option>
                    </select>
      </div>
    );
  }
}
export default SearchRegion;