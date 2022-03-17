import React from 'react'
import '../../css/Sponsors.css'
import l1 from '../../images/l1.png'
import l2 from '../../images/l2.png'
import l3 from '../../images/l3.png'
import l4 from '../../images/l4.png'

const Sponsors = () => {
   return (
      <section className='sponsor-cont'>
         <h1>Contributors</h1>
         <div>
            <img src={ l1 } alt='logo' />
            <img src={ l2 } alt='logo' />
            <img src={ l3 } alt='logo' />
            <img src={ l4 } alt='logo' />
         </div>
      </section>
   )
}

export default Sponsors