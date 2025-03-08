import React from 'react'
import '../styles/header-section.scss'	
import BodySection from './BodySection'
const MainSection = () => {
  return (
    <div className='header-section-wrap'>
        <div className='header-section'>
          Welcome to Piggybank Vesto
        </div>
        <div className='content-wrap container-fluid'>
       <BodySection/>
        </div>
    </div>
  )
}

export default MainSection
