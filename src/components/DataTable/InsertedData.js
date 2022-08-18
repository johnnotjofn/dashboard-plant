
export const InsertedData = {
   columns: [
      {
         type: 'number',
         field: 'airTemperature',
         headerName: 'Air Temperature',
         width: 130,
         hideable: false,
      },
      {
         type: 'number',
         field: 'airHumidity',
         headerName: 'Air Humidity',
         width: 150
      },
      {
         type: 'number',
         field: 'soilMoisture',
         headerName: 'Soil Moisture',
         width: 150,
      },
      {
         type: 'number',
         field: 'lightIntensity',
         headerName: 'Light Intensity',
         width: 150,
      },
      {
         type: 'boolean',
         field: 'lampStatus',
         headerName: 'Lamp Status',
         width: 130,
      },
      {
         type: 'boolean',
         field: 'pumpStatus',
         headerName: 'Pump Status',
         width: 130,
      },
      {
         type: 'boolean',
         field: 'controlCheck',
         headerName: 'Auto Mode',
         width: 130,
      },
      {
         field: 'createdTime',
         type: 'date',
         headerName: 'At',
         width: 250,
      },
   ],
}

