import React from "react";
import './NavBar.scss'
import * as RiIcons from 'react-icons/ri'
class NavBar extends React.Component {
   render() {
      return (
         <div className="navbar-container">
            <div className="app-title">
               <RiIcons.RiPlantFill className="title-icon" />
               <span>Plant Monitoring System</span>

            </div>
         </div>
      )
   }
}

export default NavBar