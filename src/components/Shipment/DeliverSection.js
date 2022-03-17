import React from 'react'
import '../../css/DeliverSection.css'
import { FcOvertime } from 'react-icons/fc'

const DeliverSection = () => {
   const rangeSlider = e => {
      const label = e.target.parentElement.children[0]
      const users = e.target.parentElement.parentElement.children[1].children[0]

      // (((value - minValue) / (valueMax - valueMin)) * ((totalInputWidth - thumbHalfWidth) - thumbHalfWidth)) + thumbHalfWidth;

      const x = ( (e.target.value - 2007) / (2022 - 2007) ) * e.target.clientWidth - 20
      label.style.left = x + 'px'

      const cust = {
         '2007': 80123,
         '2008': 89652,
         '2009': 92313,
         '2010': 93233,
         '2011': 94324,
         '2012': 97634,
         '2013': 95233,
         '2014': 91232,
         '2015': 94364,
         '2016': 92023,
         '2017': 92132,
         '2018': 96533,
         '2019': 98853,
         '2020': 152343,
         '2021': 141353,
         '2022': 18536,
      }

      users.textContent = cust[e.target.value]
      label.textContent = e.target.value
   }

   return (
      <section className='deliver-section'>
         <article>
            <h1><FcOvertime />We are online and active <span>since 2007</span><FcOvertime /></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            <section>
               <div>
                  <label>2022</label>
                  <input type='range' min='2007' max='2022' defaultValue='2022' onInput={ rangeSlider } />
               </div>

               <h3>Customers: <span>2103</span></h3>
            </section>
         </article>

         <figure>
            <img src='https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' alt='deliver' />
         </figure>
      </section>
   )
}

export default DeliverSection