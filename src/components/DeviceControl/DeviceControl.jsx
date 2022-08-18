import React from "react";
import './DeviceControl.scss'
import { FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import CustomizedSwitch from "../customized-components/CustomSwitch";
import AutoSwitch from "../customized-components/AutoSwitch";
import { updateData } from "../../services/thingspeakService";
class DeviceControl extends React.Component {

   state = {
      auto: true,
      device: {
         pumpStatus: false,
         lampStatus: false,
      }
   }

   componentDidMount() {
      this.setState({
         auto: this.props.auto,
         device: { ...this.props.device }
      })
   }
   handleChangeMode = async (e) => {
      try {
         await updateData('control')
         this.props.changeMode(!e.target.checked)
         this.setState({
            auto: !e.target.checked
         })
      } catch (e) {
         console.log(e)
      }
   }
   handleChangeLampStatus = async (e) => {
      try {
         await updateData('light')
         this.props.changeLamp(!e.target.checked)
         this.setState({
            device: {
               pumpStatus: this.state.device.pumpStatus,
               lampStatus: !e.target.checked
            }
         })

      } catch (e) {
         console.log(e)
      }
   }
   handleChangePumpStatus = async (e) => {
      try {
         await updateData('pump')
         this.props.changePump(!e.target.checked)
         this.setState({
            device: {
               lampStatus: this.state.device.lampStatus,
               pumpStatus: !e.target.checked
            }
         })

      } catch (e) {
         console.log(e)
      }
   }


   render() {
      let device = this.state.device
      let auto = this.state.auto
      return (
         <div className="device-control">
            <FormGroup className="form-group">
               <FormLabel className="form-label">Control Panel</FormLabel>
               <FormControlLabel
                  control={
                     <AutoSwitch
                        checked={auto}
                        onChange={(e) => this.handleChangeMode(e)}
                     />
                  }
                  label={`Auto: ${auto ? 'ON' : 'OFF'}`}
                  className="form-control-label"
               />
               <FormControlLabel
                  control={
                     <CustomizedSwitch
                        checked={device.pumpStatus}
                        onChange={(e) => this.handleChangePumpStatus(e)}
                     />
                  }
                  label={`Pump: ${device.pumpStatus ? 'ON' : 'OFF'}`}
                  className="form-control-label"
                  disabled={auto ? true : false}
               />
               <FormControlLabel
                  control={
                     <CustomizedSwitch
                        checked={device.lampStatus}
                        onChange={(e) => this.handleChangeLampStatus(e)}
                     />
                  }
                  label={`Lamp: ${device.lampStatus ? 'ON' : 'OFF'}`}
                  className="form-control-label"
                  disabled={auto ? true : false}
               />
            </FormGroup>
         </div>
      )
   }
}

export default DeviceControl