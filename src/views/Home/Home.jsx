import React from 'react'
import axios from 'axios'
import CurrentCondition from '../../components/CurrentCondition/CurrentCondition'
import Notification from '../../components/Notification/Notification'
import { WEATHER_API } from '../../constants/weatherApi';
import PlantSelect from '../../components/PlantSelect/PlantSelect'
import { getData, postData } from '../../services/thingspeakService'
import './Home.scss'

class Home extends React.Component {
   state = {
      timerId: 0,
      isMounted: true,
      condition: {
         airTemperature: 25,
         airHumidity: 57,
         lightIntensity: 100,
         soilMoisture: 78,
      },
      device: {
         pumpStatus: false,
         lampStatus: false,
      },
      isAuto: true,
      current: null,
      hasError: 'No',
   }

   async componentDidMount() {
      try {
         let res = await axios.get(WEATHER_API)
         this.setState({
            current: res.data
         })
         let intervalId = setInterval(async () => {
            let postRes = await postData()
            if (postRes) {
               let res = await getData()
               let latestData = res.data[res.data.length - 1]
               this.setState({
                  condition: {
                     airTemperature: latestData.airTemperature.toFixed(1),
                     airHumidity: latestData.airHumidity.toFixed(1),
                     lightIntensity: latestData.lightIntensity.toFixed(1),
                     soilMoisture: latestData.soilMoisture.toFixed(1)
                  },
                  device: {
                     pumpStatus: latestData.pumpStatus,
                     lampStatus: latestData.lampStatus,
                  },
                  isAuto: this.state.isAuto,
               })
            }
         }, 500)
         this.setState({
            timerId: intervalId
         })
      } catch (e) {
         console.log(e)
      }
   }

   changeMode = async (auto) => {
      this.setState({
         isAuto: auto
      })
      // clearInterval(this.state.timerId)
      await postData()
   }

   changePump = async (pump) => {
      this.setState({
         device: {
            pumpStatus: pump,
            lampStatus: this.state.device.lampStatus
         }
      })
      await postData()
   }

   changeLamp = async (lamp) => {
      this.setState({
         device: {
            pumpStatus: this.state.device.pumpStatus,
            lampStatus: lamp
         }
      })
      await postData()
   }

   componentWillUnmount() {
      clearInterval(this.state.timerId)
   }
   render() {
      return (
         <div className="home" >
            {
               this.state.isMounted &&
               <>
                  <PlantSelect
                     device={this.state.device}
                     auto={this.state.isAuto}
                     changeMode={this.changeMode}
                     changeLamp={this.changeLamp}
                     changePump={this.changePump} />
                  <div className="stats-section">
                     {this.state.current && <Notification current={this.state.current} hasError={this.state.hasError} />}
                     <CurrentCondition condition={this.state.condition} />
                  </div>
               </>
            }
         </div>
      )
   }
}

export default Home