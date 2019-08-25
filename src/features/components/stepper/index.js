
import React, { Component ,Children, useState } from 'react';
import "./style.scss"
import {isEmpty} from "lodash"

const Stepper = (props) =>{
    console.log("props",props)
    const [count,setCount] = useState(0)
    let bubbleMax = props.steppers.length
    const isVertical = props.isVertical;
    let i = 1
    return(
   <div>
       {
           !isEmpty(props.steppers) &&
           <div className={`stepper ${isVertical ? `vertical`:''}`}>
               {
                   props.steppers.map((item,index)=>{
                    return(
                     <div key={index} className={`${isVertical? `step-vertical`:`step`}` +" " + (count >= index ? 'active-step ' : ' ') + (count > index ? 'done-step' : ' ')
                     }
                     onClick={()=> setCount(index)}
                     >
                    <div className="horizon-stepper">
                    <span className="bubble">{props.actual > i ? <i className="fa fa-check"></i> : <span>{index+1}</span>}</span>
                     <span className="title">{item}</span>
                    </div>
                     {(i + 1) === bubbleMax ? '' :
                            <div className="horizon">
                            <span className="bar-left"></span>
                            <span className="bar-vertical"/>
                            <span className={"bar-right" +" "+(count >= index ? 'active-step ' : ' ') + (count > index ? 'done-step' : ' ')}></span>
                            </div>
                    }
                 </div>
                    )
                })
               }
           </div>
       }
   </div>
    )

    }
export default Stepper
