import { Typography } from '@material-ui/core'
import React from 'react'
import './footer.css'
import resumeData from '../../utills/resumeData'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
          
              <Typography className='footer_name'>{resumeData.name}</Typography>
        </div>

        <div className="footer_right">
          <Typography className='footer_copyright'>
            Design and Develop by <a href='' target='_blank'>Muhammad Ibrahim</a>
            <br/>
            Clone idea from <a href='https://themeforest.net/item/gorge-creative-portfolio-template/21696169' target='_blank'>Tavoline</a>
          </Typography>
        </div>
    </div>
  )
}
