import React from 'react'
import Userinput from './Userinput'

function Newexpenseuserinput(props) {
        const saveUserinputdatahandler=(enteredexpensedata)=>{
            const expensedata={
                id:Math.random().toString(),
                ...enteredexpensedata,
            }
            props.goingtonewuserinput(expensedata)
        }
  return (
    <div className='px-[1.5rem] py-[1.5rem] my-5 sm:my-10 md:my-10 lg:my-10 h-[20rem] w-[23rem] rounded-2xl bg-[#8B5DFF]'>
      <Userinput onsaveUserinputdata={saveUserinputdatahandler}/>
    </div>
  )
}

export default Newexpenseuserinput
