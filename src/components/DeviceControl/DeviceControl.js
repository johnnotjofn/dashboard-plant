import React from "react";
import './DeviceControl.scss'
import { FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import CustomizedSwitch from "../CustomSwitch";

class DeviceControl extends React.Component {
   state = {
      device: {
         pumpStatus: false,
         lampStatus: false,
      }
   }

   componentDidMount() {
      this.setState({
         device: this.props.device
      })
   }
   handleChangePumpStatus = (e) => {
      this.setState({
         device: {
            pumpStatus: e.target.checked,
            lampStatus: this.state.device.lampStatus
         }
      })
   }
   handleChangeLampStatus = (e) => {
      this.setState({
         device: {
            pumpStatus: this.state.device.pumpStatus,
            lampStatus: e.target.checked,
         }
      })
   }

   render() {
      let device = this.state.device
      return (
         <div className="device-control">
            <FormGroup className="form-group">
               <FormLabel className="form-label">Control Panel</FormLabel>
               <FormControlLabel
                  control={
                     <CustomizedSwitch
                        checked={device.pumpStatus}
                        onChange={(e) => this.handleChangePumpStatus(e)}

                     />
                  }
                  label={`Lamp: ${device.pumpStatus ? 'ON' : 'OFF'}`}
                  className="form-control-label"
               />
               <FormControlLabel
                  control={
                     <CustomizedSwitch
                        checked={device.lampStatus}
                        onChange={(e) => this.handleChangeLampStatus(e)}
                     />
                  }
                  label={`Pump: ${device.lampStatus ? 'ON' : 'OFF'}`}
                  className="form-control-label"
               />
            </FormGroup>
         </div>
      )
   }
}

export default DeviceControl