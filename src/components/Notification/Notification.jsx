import React from "react";
import './Notification.scss'
import { NotificationData } from "./NotificationData";
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from "../ErrorComponent";

class Notification extends React.Component {

   render() {
      let current = this.props.current
      let error = this.props.hasError
      return (
         <div className="notification">
            <div className="status">
               {
                  error === 'No' &&
                  <>
                     {NotificationData['statusIcon'].successIcon}
                     <span>Your plant is still healthy and happy 😊😊😊</span>
                  </>
               }
               {
                  error === 'Yes' &&
                  <>
                     {NotificationData['statusIcon'].errorIcon}
                     <span>Cây sắp chết rồi, check đi</span>
                  </>
               }
            </div>
            <div className="weather-forecast">
               {
                  current && <>
                     <span>{current.main.temp}°C</span>
                     <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="" />
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