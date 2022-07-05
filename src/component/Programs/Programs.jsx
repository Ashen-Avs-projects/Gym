import React from 'react'
import './Programs.css'
import{programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
        {/*header*/}
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/*program card*/}
        <di className="program-categories">
            {programsData.map((program)=>(
                <div className="categories">
                    {program.image}
                    <span>program.heading</span>
                    <span>program.details</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
            
        </di>
    </div>
  )
}

export default Programs