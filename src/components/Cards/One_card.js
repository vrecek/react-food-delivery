import React from 'react'
import '../../css/One_card.css'
import Button from '../REUSABLE/Button'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import One_card_inner from './One_card_inner'
import { useState } from 'react'

const One_card = ({ background_src, title, id }) => {
   let left = null
   const [sized, setSized] = useState(false)
   let ev = false

   window.addEventListener('resize', () => {
      if(window.innerWidth <= 768 && !sized) {
         setSized(true)

      }else if(window.innerWidth > 768 && sized) {
         setSized(false)
      }
   })

   const viewInner = e => {
      const parent = e.target.parentElement
      const inner = parent.children[3]
      const icon = parent.children[2]
      const cc = [...parent.parentElement.parentElement.children].filter(x => x !== parent.parentElement)

      if(!ev)
      window.addEventListener('resize', () => {
         ev = true
         if(window.innerWidth <= 768 && !sized) {
            for(let x of cc) x.classList.remove('scale')
            parent.classList.remove('clicked')

            parent.style.left = `${ left }px` || 'auto'
            inner.style.width = '0'
            icon.style.transform = 'translateY(-50%) rotate(0)'
            setTimeout(() => {
               parent.style.position = 'relative'
               parent.style.left = 'auto'
               inner.style.display = 'none'
            }, 500);
         }
      })

      if(sized) return

      if(!left) left = parent.offsetLeft 

      for(let x of cc) x.classList.toggle('scale')
      parent.classList.toggle('clicked')

      if(parent.classList.contains('clicked')) {
         parent.style.position = 'absolute'
         parent.style.left = `${ left }px`
         inner.style.display = 'block'
         icon.style.transform = 'translateY(-50%) rotate(180deg)'

         setTimeout(() => {
            parent.style.left = `0`
            inner.style.width = 'calc(97vw - 302px)'
         }, 0);

         return
      }

      
      parent.style.left = `${ left }px`
      inner.style.width = '0'
      icon.style.transform = 'translateY(-50%) rotate(0)'
      setTimeout(() => {
         parent.style.position = 'relative'
         parent.style.left = 'auto'
         inner.style.display = 'none'
      }, 500);
   }

   return (
      <article className='card-outer'>

         <article style={{ background: `url(${ background_src })`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }} className='card-inner'
         >
            <h2>{ title }</h2>
            <Button _text='Select' />

            <span onClick={ viewInner } className='arrow-icon'> <BiRightArrow /> </span>

            <One_card_inner />
         </article>  

      </article>
   )
}

export default One_card