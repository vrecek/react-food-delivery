import React from 'react'
import '../../css/StepCounter.css'

const StepCounter = ({ curr, nums, reference }) => {
   const arr = [...Array(nums).keys()].map(x => x + 1)

   return (
      <section className='step-counter'>
         <section ref={ reference } className='fill'>
            <mark></mark>

            {
               arr.map(x => (
                  <React.Fragment key={ x }>
                     <div>{ x }</div>
                     { x !== arr.length && <span></span> }
                  </React.Fragment>
               ))
            } 
         </section>
      </section>
   )
}

StepCounter.defaultProps = {
   nums: 4
}

export default StepCounter