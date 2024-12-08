import React from 'react'
import Chart from '../chart/chart'
import { Label } from '@headlessui/react'

function Expensechart(props) {
    const chartdatapoints=[
        {label:"jan",value:0},
        {label:"feb",value:0},
        {label:"mar",value:0},
        {label:"apr",value:0},
        {label:"may",value:0},
        {label:"jun",value:0},
        {label:"jul",value:0},
        {label:"aug",value:0},
        {label:"sep",value:0},
        {label:"oct",value:0},
        {label:"nov",value:0},
        {label:"dec",value:0},
    ]
    for(const exp of props.expenses){
        const expensemonth=exp.expensedate.getMonth()
        chartdatapoints[expensemonth].value+=exp.expenseprice 
    }
  return (
    <div>
      <Chart datapoints={chartdatapoints}/>
    </div>
  )
}

export default Expensechart
