import React from 'react'
import '../../css/Nav.css'
import logo from '../../images/logo.png'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { MdContactPage } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Menu from './Menu'

const Nav = () => {
   const showMenu = e => {
      const p = e.target
      const m = e.target.parentElement.children[3]
      const spans = [...p.children]

      p.classList.toggle('active-menu')
      const active = p.classList.contains('active-menu')

      const top = active ? [50, 50, 50] : [15, 50, 85]
      const rotate = active ? [45, 135, 135] : [0, 0, 0]

      for(let [i, x] of Object.entries(spans)) {
         x.style.transform = `translateY(50%) rotate(${ rotate[i] }deg)`
         x.style.top = `${ top[i] }%`
         x.style.background = active ? 'rgb(200, 60, 60)' : 'white'
      }

      m.style.transform = `translateX(${ active ? 0 : 100 }%)`
   }

   return (
      <nav className='main-nav'>
         <figure>
            <img src={ logo } alt='logo' />
         </figure>
         
         <ul>
            <li> <p>Homepage</p> <BsFillHouseDoorFill /> </li>
            <li className='ul-order'> <p>-Order-</p> <AiOutlineShoppingCart /> </li>
            <li> <p>Contact</p> <MdContactPage /> </li>
         </ul>

         <section>
            <h5 className='sign-h5'>Sign in</h5>
            <h5 className='join-h5'>Join us</h5>

            <div onClick={ showMenu } className='menu'>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <Menu logo={ logo } />
         </section>
      </nav>
   )
}

export default Nav