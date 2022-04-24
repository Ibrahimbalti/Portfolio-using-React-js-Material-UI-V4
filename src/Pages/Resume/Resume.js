import React from 'react'
import {Grid,Typography} from '@material-ui/core'
import './resume.css'
import resumeData from '../../utills/resumeData'
export default function Resume() {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6  className='section_title_text'>About Me</h6>
        </Grid>

        <Grid item  xs={12}>
          <Typography variant='body2' className='about_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education and exprience */}
      <Grid container>

      </Grid>

      {/* Services */}
      <Grid container>

      </Grid>

      {/* Skill */}
      <Grid container>

      </Grid>

      {/* Contact */}
      <Grid container>

      </Grid>
    </>
  )
}
