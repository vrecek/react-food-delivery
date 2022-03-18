import React from 'react'
import '../../css/CommentSection.css'
import Comment from './Comment'
import { useRef, useEffect } from 'react'

const CommentSection = () => {
   const startScale = useRef()
   let px = 0
   let cx = null

   useEffect(() => {
      const toMatch = [
         /Android/i,
         /webOS/i,
         /iPhone/i,
         /iPad/i,
         /iPod/i,
         /BlackBerry/i,
         /Windows Phone/i
      ]

      const device = toMatch.some(x => navigator.userAgent.match(x)) ? 'touch' : 'mouse'
      
      scale(startScale.current, device)
   })

   const mouseDown = e => {
      e.target.addEventListener('mousemove', mouseMove)
   }

   const mouseMove = move => {
      if(!move.buttons || move.target.className !== 'inner-section') {
         move.target.removeEventListener('mousemove', mouseMove)
         cx = null

         return
      }

      const t = move.target 
      const x = move.clientX
      const half = t.parentElement.clientWidth / 2 

      const side = x >= cx + 1 ? 'right' : 'left'

      if(side === 'right' && px >= half) {
         px = half - 10
         return

      }else if(side === 'left' && px <= window.innerWidth - t.clientWidth - half) {
         px = window.innerWidth - t.clientWidth - half + 2
         return
      }

      px = side === 'left' ? px - 10 : px + 10

      t.style.transform = `translateX(${ px }px`
      scale(t, 'mouse')

      cx = x
   }

   const touchMove = move => {
      const t = move.target.className === 'inner-section' ? move.target : move.target.children[0]
      const x = move.touches[0].pageX

      const side = x >= cx + 1 ? 'right' : 'left'

      if(side === 'right' && px > 0) {
         px = 1
         return

      }else if(side === 'left' && t.clientWidth - window.innerWidth <= Math.abs(px)) {
         px = -(t.clientWidth - window.innerWidth - 1)
         return
      }

      px = side === 'left' ? px - 5 : px + 5

      t.style.transform = `translateX(${ px }px`
      scale(t, 'touch')

      cx = x
   }

   const scale = (t, type) => {
      const w = t.children[0].clientWidth
      let curr = null

      for(let x of [...t.children]) {
         const bound = x.getBoundingClientRect()
         let checkType = null

         if(type === 'touch') {
            checkType = bound.x >= -w / 2 && !curr

         }else if(type === 'mouse') checkType = bound.x - w >= 0 && !curr

         if(checkType) {
            curr = x

            x.style.transform = 'scale(1)'
            x.style.filter = 'blur(0)'

            continue
         }

         x.style.transform = 'scale(.5)'
         x.style.filter = 'blur(5px)'
      }
   }

   return (
      <section className='comment-section'>
         <h1>Most popular opinions</h1>
         <h2>Leaving a comment will improve our future services</h2>

         <section onTouchMove={ touchMove } className='outer-section' onMouseDown={ mouseDown }>
            <section ref={ startScale } className='inner-section'>
               <Comment stars={ 9 } name='Dario Jacobson' text='Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
               <Comment stars={ 9 } name='Riyad Leal' text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
               <Comment stars={ 8 } name='Affan Laing' text='Qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati.' />
               <Comment stars={ 9 } name='Bilaal Holder' text='Qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero.' />
               <Comment stars={ 10 } name='Dorothy Black' text='Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.' />
               <Comment stars={ 10 } />
            </section>  
         </section>
      </section>
   )
}

export default CommentSection