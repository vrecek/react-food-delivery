import React from 'react'
import '../../css/PopularResult.css'
import img from '../../images/srch_res.png'

const PopularResult = ({ text }) => {
   return (
      <div className='pop-res'>
         <figure>
            <div>
               <img src={ img } />
            </div>      
         </figure>

         <h3>
            { text }
         </h3>
      </div>
   )
}

export default PopularResult