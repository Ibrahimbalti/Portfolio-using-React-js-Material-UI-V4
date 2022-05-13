import React from 'react'
import {Typography} from '@mui/material'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { Button } from '@mui/material'
import "./Profile.css"
import profileiamge from '../../assets/Images/profile.jpg'
import {CustomizeTimeline,CustomizeTimelineSeparator} from '../Timeline/CustomizeTimeline'
import resumeData from '../../utills/resumeData'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CustomButton from '../Button/CustomButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import '../Button/Button.css'

import DownloadIcon from '@mui/icons-material/Download';


const CustomizeTimelineItem=({title,text,link})=>{
   return(
    <TimelineItem>
    <CustomizeTimelineSeparator/>
    <TimelineContent className='timeline_content'>
      {link ? (<Typography className='timelineItem_text'>
        <span>{title} :</span><a href={link} target='_blank'>
          {text}
        </a>
      </Typography>):(<Typography  className='timelineItem_text'><span>{title}</span>{text}</Typography>)}
    </TimelineContent>
</TimelineItem>
   )
}
export default function Profile() {
 
  return (
    <div className='profile container_showdow'>
        <div className='profile_name'>
            <Typography className="name">{resumeData.name}</Typography>
            <Typography className="title">{resumeData.title}</Typography>
        </div>

        <figure className='profile_image'>
            <img src={profileiamge} alt="Profile"/>
        </figure>

        <div className='profile_information'>
            <CustomizeTimeline  icon={<PersonOutlineIcon />}>
              <CustomizeTimelineItem title="Name : " text={resumeData.name}/>
              <CustomizeTimelineItem title="Title : " text={resumeData.title}/>
              <CustomizeTimelineItem title="Email:" text={resumeData.email}/>

              {Object.keys(resumeData.social).map((key,i)=>(
                <CustomizeTimelineItem key={i} title={key} text={resumeData.social[key].text} link={resumeData.social[key].link}/>
              ))}
            </CustomizeTimeline>

            <br/>
            <div className='button_container'>
            {/* <CustomButton text="Download Cv" icon={<GetAppIcon/>} onClick={()=>saveFile}>
            
            </CustomButton> */}
            {/* <button>
            <a href="/resume/Ibrahim.pdf" download><strong>Download my Resume!</strong></a>
            </button> */}

            <Button className='custom_btn' >
            <a href="/resume/Ibrahim.pdf" download  className='custom_anchor' >Download my Resume{< DownloadIcon/>}</a>
             </Button>
            </div>
           
        </div>
    </div>
  )
}
