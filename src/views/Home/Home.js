import React from 'react'
import axios from 'axios'
import CurrentCondition from '../../components/CurrentCondition/CurrentCondition'
import Notification from '../../components/Notification/Notification'
import { WEATHER_API } from '../../constants/weatherApi';
import PlantSelect from '../../components/PlantSelect/PlantSelect'
import { getData, postData, updateData } from '../../services/thingspeakService'
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
      current: null
   }

   async componentDidMount() {
      try {
         let res = await axios.get(WEATHER_API)
         this.setState({
            ...this.state,
            current: res.data
         })
         // let intervalId = setInterval(async () => {
         //    await updateData('light')
         //    let postRes = await postData()
         //    if (postRes) {
         //       let res = await getData()
         //       let latestData = res.data[res.data.length - 1]
         //       this.setState({
         //          timerId: intervalId,
         //          condition: {
         //             airTemperature: latestData.airTemperature,
         //             airHumidity: latestData.airHumidity,
         //             lightIntensity: latestData.lightIntensity,
         //             soilMoisture: latestData.soilMoisture
         //          },
         //          device: {
         //             pumpStatus: latestData.lampStatus,
         //             lampStatus: latestData.pumpStatus
         //          }
         //       })
         //    }
         // }, 3000)
      } catch (e) {
         console.log(e)
      }
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
                  <PlantSelect device={this.state.device} />
                  <div className="stats-section">
                     {
                        this.state.current && <Notification current={this.state.current} />
                     }

                     <CurrentCondition condition={this.state.condition} />
                  </div>
               </>
            }
         </div>
      )
   }
}

export default Home