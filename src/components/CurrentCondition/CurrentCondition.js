import React from "react";
import './CurrentCondition.scss'
import { ConditionData } from './ConditionData'

class CurrentCondition extends React.Component {
   state = {
      condition: {}
   }

   componentDidMount() {
      this.setState({
         condition: this.props.condition
      })
   }

   render() {
      let condition = this.props.condition
      return (
         <div className="current-condition">
            {
               ConditionData.map((singleCondition, index) => {
                  return (
                     <div className={singleCondition.className} key={singleCondition.id}>
                        <div className="title">{singleCondition.title}</div>
                        <div className="value-container">
                           <div className="value">{condition[`${singleCondition.value}`]} <span>{singleCondition.concate}</span></div>
                           {singleCondition.icon}
                        </div>
                     </div>
                  )
               })
            }
         </div>
      )
   }
}

export default CurrentCondition