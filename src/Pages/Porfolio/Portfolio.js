import React, { useState } from 'react'
import './portfolio.css'
import { Grid,Tab, Tabs } from '@material-ui/core'
import resumeData from '../../utills/resumeData'
const Portfolio = () => {
  const [tabvalue,setTabvalue]=useState("All")
  return (
    <>
      <Grid container className="section pb_45 pt_45">
        {/* Title */}
      <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Portfolio</h6>
        </Grid>

        {/* Tab */}
        <Grid item xs={12}>
          <Tabs value={tabvalue} indicatorColor="white" className='custom_tab' onChange={(even,newValue)=>setTabvalue(newValue)}>
            <Tab label="All" value="All" className={tabvalue === 'All' ? ('customTab_item active'):('customTabs_item')}/>
            {[...new Set(resumeData.projects.map((item)=>item.tag))].map((tag)=>(
              <Tab label={tag} value={tag} className={tabvalue === 'All' ? ('customTab_item active'):('customTabs_item')} />
            ))}
          </Tabs>
        </Grid>
      </Grid>
    </>
  )
}

export default Portfolio