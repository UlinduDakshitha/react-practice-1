import { colors } from '@mui/material'
import React from 'react'
import './home.css'
import card from '../../components/Card/card'

function Home() {
  return (
    <div>
        <h1 className='header'>Check Nic Details</h1>
        <card/>
    </div>
  )
}

export default Home