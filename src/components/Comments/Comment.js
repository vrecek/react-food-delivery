import React from 'react'
import '../../css/Comment.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { useRef, useEffect } from 'react'
import avatar from '../../images/author.png'

const Comment = ({ stars, name, avatar, text }) => {
   const starsCont = useRef()
   useEffect(() => {
      if(stars <= 0 ) stars = 1
      else if(stars > 10) stars = 10

      for(let i = 0; i < stars; i++) {
         starsCont.current.children[i].style.color = 'yellow'
      }
   }, [])

   return (
      <article className='comment'>
         <div className='author'>
            <figure>
               <img src={ avatar } alt='author' />
            </figure>  
            <figcaption>{ name }</figcaption>
         </div>

         <div className='text'>
            <FaQuoteLeft />

            <p> { text } </p>

            <div ref={ starsCont } className='stars'>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
               <span> <AiFillStar /> </span>
            </div>

            <FaQuoteRight />
         </div>
      </article>
   ) 
}

Comment.defaultProps = {
   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
   stars: 5,
   avatar: avatar,
   name: 'John Doe'
}

export default Comment