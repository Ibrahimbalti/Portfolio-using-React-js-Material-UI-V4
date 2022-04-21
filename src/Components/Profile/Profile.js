import React from 'react'
import {Button,Typography} from '@mui/material'
import "./Profile.css"
import profileiamge from '../../assets/Images/profile.jpg'
import CustomizeTimeline from '../Timeline/CustomizeTimeline'
export default function Profile() {
  return (
    <div className='profile container_showdow'>
        <div className='profile_name'>
            <Typography className="name">Muhammad Ibrahim</Typography>
            <Typography className="title">Creative Designer</Typography>
        </div>

        <figure className='profile_image'>
            <img src={profileiamge} alt="Profile"/>
        </figure>

        <div className='profile_information'>
            <CustomizeTimeline/>
            <br/>
            <Button>button</Button>
        </div>
    </div>
  )
}
