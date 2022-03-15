import React from 'react'
import '../../css/Menu.css'

import { AiOutlineUserAdd, AiOutlineUserSwitch, AiOutlineContacts, AiOutlineQuestionCircle, AiOutlineShoppingCart }
from 'react-icons/ai'

const Menu = ({ logo }) => {
   return (
      <aside className='nav-menu'>
         <ol>
            <li> <AiOutlineUserAdd /> Register</li>
            <li> <AiOutlineUserSwitch /> Sign in</li>

            <li className='line'></li>

            <li className='order'> <AiOutlineShoppingCart /> Make a order</li>

            <li className='line'></li>

            <li>Terms &amp; services</li>
            <li>Privacy policy</li>

            <li className='line'></li>

            <li> <AiOutlineQuestionCircle /> About</li>
            <li> <AiOutlineContacts /> Contact</li>
            
            <li className='credits'>
               <img src={ logo } alt='logo' />
            </li>
         </ol>
      </aside>
   )
}

export default Menu