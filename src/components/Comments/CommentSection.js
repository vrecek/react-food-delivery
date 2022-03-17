import React from 'react'
import '../../css/CommentSection.css'
import Comment from './Comment'

const CommentSection = () => {
   let px = 0
   let cx = null

   const mouseDown = e => {
      e.target.addEventListener('mousemove', mouseMove)
   }

   const mouseMove = move => {
      if(!move.buttons) {
         move.target.removeEventListener('mousedmove', mouseMove)
         cx = null

         return
      }

      const t = move.target.className === 'inner-section' ? move.target : move.target.children[0]
      const x = move.clientX

      // f l ||| t r
      const side = x >= cx + 1 ? 'right' : 'left'

      px = side === 'left' ? px - 10 : px + 10
      t.style.transform = `translateX(${ px }px`

      // if(px >= 440) console.log('440')
      // else if(px <= -1660) console.log('1660')
      // -1660 440

      cx = x
   }

   return (
      <section className='comment-section'>
         <h1>Most popular opinions</h1>
         <h2>Leaving a comment will improve our future services</h2>

         <section className='outer-section' onMouseDown={ mouseDown }>
            <section className='inner-section'>
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