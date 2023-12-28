import { Colors } from 'chart.js'
import React from 'react'

const Hosbirthanddeath = () => {
  return (
   
       <div className="birthanddeath">
        <h2>HOSPITAL BIRTH & DEATH ANALYTICS</h2>
        <div className="bda">
        <div className="birth">
          Birth <p style={{color :"#007BFF"}}>45.07%</p> <p style={{color :"#007BFF"}}>201,434</p>
        </div>
        <div className="death">
          Death <p style={{color :"#DC3545"}}>29.05%</p> <p style={{color :"#DC3545"}}>134,693</p>
        </div>
        <div className="accidents">
          Accidents <p style={{color :"#FFC107"}}>18.43%</p> <p style={{color :"#FFC107"}}>81,525</p>
        </div>
        </div>
        
        <div className="progressbar">
          <div className="blue">
            Birth
          </div>
          <div className="red">
            death
          </div>
          <div className="yellow">
            Accidents
          </div>
        </div>
      </div>
    
  )
}

export default Hosbirthanddeath
