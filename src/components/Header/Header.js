import React from 'react'
import '../../css/Header.css'
import header from '../../images/header.png'
import Button from '../REUSABLE/Button'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFoodBank } from 'react-icons/md'
import { useRef, useEffect } from 'react'

const Header = () => {
   const s = useRef(0)
   const f = useRef(0)
   const d = useRef(0)

   useEffect(() => {
      s.current.style.transform = 'translateX(0)'

      setTimeout(() => {
         s.current.style.filter = 'blur(0)'
         f.current.style.transform = 'translateX(0)'
      }, 600);

   }, [])

   return (
      <header className='entry-header'>
         <span className='entry-icon'> <MdFoodBank /> </span>
         
         <section ref={ s }>
            <h1>Lorem ipsum dolor sit amet <span className='mark'>conqestaur<span ref={ d }>.</span> </span></h1>
            <p className='header-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <Button _text='Get started' _additional={ <AiOutlineShoppingCart /> } />
         </section>

         <figure ref={ f }>
            <img src={ header } alt='header-png' />
         </figure>
      </header>
   )
}

export default Header