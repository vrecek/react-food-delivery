import React from 'react'
import '../../css/Footer.css'
import logo from '../../images/logo.png'
import { FaGithubAlt } from 'react-icons/fa'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillGoogleSquare } from 'react-icons/ai'

const Footer = () => {
   /*
      lewo logo prawo ule
      nizej
      lewo napis copy itd prawo icony
   */
   return (
      <footer>
         <section>
            <figure>
               <img src={ logo } alt='logo' />
            </figure>

            <nav>
               <ul>
                  <li>Dolorem</li>
                  <li>proident</li>
                  <li>lorem</li>
                  <li>ipsum</li>
                  <li>paritaur</li>  
               </ul>

               <ul>
                  <li>Laborum</li>
                  <li>dolor</li>
                  <li>deleniti</li>
                  <li>mollitia</li>
                  <li>ipsum</li>
               </ul>

               <ul>
                  <li>Deserunt</li>
                  <li>proident</li>
                  <li>laboris</li>
                  <li>cillum</li>
                  <li>mollitia</li>
               </ul>
            </nav>
         </section>

         <section>
            <div>
               <p>&copy; All rights reserved to its owners &copy;</p>
               <p>loremipsum@gmail.com</p>
            </div>

            <div className='icons'>
               <a target='_blank' href='https://github.com/vrecek'> <FaGithubAlt /> </a>
               <span> <AiFillFacebook /> </span>
               <span> <AiFillLinkedin /> </span>
               <span> <AiFillInstagram /> </span>
               <span> <AiFillGoogleSquare /> </span>
            </div>
         </section>
      </footer>
   )
}

export default Footer