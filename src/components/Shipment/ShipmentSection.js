import React from 'react'
import '../../css/ShipmentSection.css'
import eur from '../../images/europe.png'
import { useRef, useEffect } from 'react'
import { BsTruck } from 'react-icons/bs'

const ShipmentSection = () => {
   const today = useRef()
   const total = useRef()
   const img = useRef()

   useEffect(() => {
      const date = new Date()
      const td = today.current
      const tt = total.current

      const start = (Math.floor(Math.random() * 24) + 21) * date.getHours()
      td.textContent = start

      setInterval(() => {
         const t = Math.floor(Math.random() * 100) + 1
         if(t > 10) return

         mapDot()

         td.textContent = parseInt(td.textContent) + 1
         tt.textContent = parseInt(tt.textContent) + 1

      }, 1500);
   }, [])

   const mapDot = () => {
      const span = document.createElement('span')

      const l = Math.floor(Math.random() * 100) + 1
      const t = Math.floor(Math.random() * 100) + 1
      span.style.left = `${ l }%`
      span.style.top = `${ t }%`

      img.current.appendChild(span)

      setTimeout(() => {
         span.remove()
      }, 10000);
   }

   return (
      <section className='ship-section'>
         <figure ref={ img }>
            <img src={ eur } alt='europe' />
         </figure>

         <section>
            <h1>
               <BsTruck /> Now we serve across whole <span>Europe</span> <BsTruck /> 
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
               <h2>
                  Today's orders:
                  <span ref={ today }></span>
               </h2>
               <h3>
                  Total delivers:
                  <span ref={ total }>1515273</span>
               </h3>
            </div>
         </section>    
      </section>
   )
}

export default ShipmentSection