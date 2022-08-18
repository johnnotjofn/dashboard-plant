import React from "react";
import './PlantSelect.scss'
import tomato from '../../assets/img/tomato.gif'
import DeviceControl from "../DeviceControl/DeviceControl";

class PlantSelect extends React.Component {
   render() {
      return (
         <div className="plant-select">
            <div className="title">Tomato</div>
            <img src={tomato} alt="" />
            <div className="description">Sweet, acidy flavor and juicy</div>
            <DeviceControl
               device={this.props.device}
               auto={this.props.auto}
               changeMode={this.props.changeMode}
               changeLamp={this.props.changeLamp}
               changePump={this.props.changePump} />
         </div>
      )
   }
}

export default PlantSelect
