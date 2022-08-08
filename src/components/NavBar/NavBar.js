import React from "react";
import './NavBar.scss'
import * as RiIcons from 'react-icons/ri'
import AutoSwitch from "../AutoSwitch";
import { FormControlLabel, FormGroup } from '@mui/material'


class NavBar extends React.Component {
   state = {
      isAuto: true,
   }
   handleChangeMode = (e) => {
      this.setState({
         isAuto: e.target.checked
      })
   }
   render() {
      // console.log(localStorage.getItem('isAuto'))
      localStorage.setItem('isAuto', this.state.isAuto)

      return (
         <div className="navbar-container">
            <div className="app-title">
               <RiIcons.RiPlantFill className="title-icon" />
               <span>Plant Monitoring System</span>
               <FormGroup className="auto">
                  <FormControlLabel
                     control={
                        <AutoSwitch
                           checked={this.state.isAuto}
                           onChange={(e) => this.handleChangeMode(e)}

                        />
                     }
                     label={`Auto: ${this.state.isAuto ? 'ON' : 'OFF'}`}
                  />
               </FormGroup>
            </div>
         </div>
      )
   }
}

export default NavBar