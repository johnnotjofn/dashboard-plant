import React from "react";
import * as TiIcons from 'react-icons/ti'

const fontTheme = {
   fontSize: '2.5rem',
}
const error = {
   color: 'red'
}
const success = {
   color: 'green'
}

export const NotificationData = {
   statusIcon: {
      successIcon: <TiIcons.TiTick className="notification-icon" style={{ ...fontTheme, ...success }} />,
      errorIcon: <TiIcons.TiTimes className="notification-icon" style={{ ...fontTheme, ...error }} />
   },
   threshold: {
      temp: 40,
      soil: 80,
      light: 70,
   },
   errors: [
      {
         errorCode: 0,
         errorType: 'Temperature is too high!',
         alert: 'You need to check your plant!'
      },
      {
         errorCode: 1,
         errorType: 'Soil is too dry!',
         alert: 'You need to turn the pump on!'
      },
      {
         errorCode: 2,
         errorType: 'Light gain is not enough!',
         alert: 'You need to check your plant and the lamp!'
      },
   ]


}