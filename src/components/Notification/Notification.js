import React from "react";
import './Notification.scss'
import { NotificationData } from "./NotificationData";
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from "../ErrorComponent";

class Notification extends React.Component {
   state = {
      hasError: false,
      currentWeather: { ...this.props.current }
   }

   change = () => {
      this.setState({
         hasError: !this.state.hasError
      })
   }

   render() {
      let current = this.state.currentWeather
      return (
         <div className="notification">
            <div className="status">
               {
                  !this.state.hasError ?
                     <>
                        {NotificationData['statusIcon'].successIcon}
                        <span>Your plant is still healthy and happy 😊😊😊</span>
                     </>

                     :
                     <>
                        {NotificationData['statusIcon'].errorIcon}
                        <span>Cây sắp chết rồi, check đi</span>
                     </>
               }
            </div>
            <button onClick={() => this.change()}>Change</button>
            <div className="weather-forecast">
               {
                  current && <>
                     <span>{current.main.temp}°C</span>
                     <img src={`http://openweathermap.org/img/wn/04d@2x.png`} alt="" />
                     <span style={{ fontSize: 20 }}>{current.weather[0].description}</span>
                  </>
               }
            </div>
         </div>
      )
   }
}


export default withErrorBoundary(Notification, {
   FallbackComponent: ErrorComponent
})