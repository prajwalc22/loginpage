import React from 'react'
import LoginForms from './LoginForms'
import potti from '../img/potti.png'

export const Loginpage = () => {
  return (
    <div className='flex center container'>
       <img src= {potti} width={500} height={600} alt="" />
        <div className='right center'><LoginForms/></div>
    </div>
  )
}
    