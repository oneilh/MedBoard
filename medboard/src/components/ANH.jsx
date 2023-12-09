import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,//x axis
  LinearScale, // y AXIS
  PointElement,
  
}from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement,
  
)

const ANH = () => {
  const data = {
    labels:['a','b','c','d','e','f','g'],
    datasets:[{
      laabels:'sales of the week',
      data:[1,5,3,7,4,6,1],
      backgroundColor:'blue',
      borderColor:'Deep sky blue',
      pointBorderColor:'blue',
      tension:0.9
    }]

   
  }
  const options ={
    plugins:{
      legend:true
    },
    scales:{
      y:
     { 
      min:1,
      max:9
    }
    }
  }
  return (
    <div className='ANH'>
    <div className='appointment'>
      <h6>APPOINTMENT</h6>
      <h3><p>3973</p></h3>
      
    
      <Line data= {data}
      options={options} >
      </Line>
      </div>
    <div className="newpatient">
    <h6>NEW PATIENT</h6>
    <h3><p>593</p></h3>

    </div>
    <div className="hospitalearning">
    <h6>HOSPITAL EARNING</h6>
    <h3><p>3973</p></h3>
    </div>
   
    </div>
  )
}

export default ANH
