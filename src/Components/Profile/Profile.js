import React from 'react'
import {Button,Typography} from '@mui/material'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import "./Profile.css"
import profileiamge from '../../assets/Images/profile.jpg'
import CustomizeTimeline,{CustomizeTimelineSeparator} from '../Timeline/CustomizeTimeline'
import resumeData from '../../utills/resumeData'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CustomButton from '../Button/CustomButton';
import GetAppIcon from '@material-ui/icons/GetApp';

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
            <CustomButton text="Download Cv" icon={<GetAppIcon/>}/>
            </div>
           
        </div>
    </div>
  )
}
