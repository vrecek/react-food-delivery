import React from 'react'
import '../../css/One_card_inner.css'
import r1 from '../../images/r1.png'
import r2 from '../../images/r2.png'
import r3 from '../../images/r3.png'
import r4 from '../../images/r4.png'
import One_card_inner_td from './One_card_inner_td'

const One_card_inner = () => {
   return (
      <section className='card-inner-menu'>
         <table>
            <thead>
               <tr className='imgs'>
                  <td> <img src={ r1 } alt='rest-logo' /> </td>
                  <td> <img src={ r2 } alt='rest-logo' /> </td>
                  <td> <img src={ r3 } alt='rest-logo' /> </td>
                  <td> <img src={ r4 } alt='rest-logo' /> </td>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <One_card_inner_td />
                  <One_card_inner_td />
                  <One_card_inner_td />
                  <One_card_inner_td />
               </tr>

               <tr>
                  <One_card_inner_td />
                  <One_card_inner_td />
                  <One_card_inner_td />
                  <One_card_inner_td />
               </tr>
            
               <tr>
                  <One_card_inner_td />
                  <One_card_inner_td />
                  <One_card_inner_td />
                  <One_card_inner_td />
               </tr>
            </tbody>
         </table>
      </section>
   )
}

export default One_card_inner