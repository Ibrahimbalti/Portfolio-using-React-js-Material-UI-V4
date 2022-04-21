import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@mui/material';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import './Timeline.css'


export const CustomizeTimelineSeparator=()=>{
<TimelineSeparator>
          <TimelineDot className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
}
export default function CustomizeTimeline({title,icon,children}) {
  return (
    <Timeline className='Timeline'>
      <TimelineItem className='timeline_firsttitle'>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot_header' >{icon} <BusinessCenterIcon /></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography variant='h6' className='timeline_header'>{'title'}</Typography></TimelineContent>
      </TimelineItem>

        {children}
      
      <TimelineItem>
      <TimelineSeparator className='separator_padding'>
          <TimelineDot variant='outline' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
