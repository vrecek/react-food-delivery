import React from 'react'
import '../../css/StepsCont.css'
import StepCounter from './StepCounter'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { useEffect, useRef } from 'react'
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
import s4 from '../../images/s4.png'

const StepsCont = () => {
   const cont = useRef()
   const step = useRef()

   let w = null

   let counter = 1
   let moved = true

   const move = (e, dir) => {
      if(!moved) return
      moved = false
      
      const div = e.target.parentElement.children[1].children[0]
      dir === 'left' ? --counter : ++counter

      stepFill()
      
      div.style.transition = '.5s'
      div.style.transform = `translateX(${ -100 * counter }%)`
   }

   const endTransition = () => {
      moved = true

      if(counter === 5 || counter === 0) {
         const right = counter === 5

         cont.current.style.transition = 'none'
         cont.current.style.transform = `translateX(${ right ? -100 : -400 }%)`
         counter = right ? 1 : 4
      }
   }

   useEffect(() => {
      cont.current.style.transform = `translateX(-100%)`

      const s = step.current
      s.children[0].style.width = s.children[1].clientWidth + 4 + 'px'
      w = {
         square: s.children[1].clientWidth + 4,
         line: s.children[2].clientWidth
      }
   }, [])

   const stepFill = () => {
      const m = step.current.children[0]

      if(counter === 5) {
         m.style.width = `${ w.square }px`
         return

      }else if(counter === 0) {
         m.style.width = `${ w.square * 4 + w.line * (4 - 1) }px`
         return
      }

      m.style.width = `${ w.square * counter + w.line * (counter - 1) }px`
   }

   return (
      <article className='steps-cont'>
         <h1>How to use? It's <span>fast</span> and <span>easy</span> </h1>

         <StepCounter reference={ step } curr='1' />

         <figure>
            <span onClick={ (e) => move(e, 'left') }> <BsArrowBarLeft /> </span>

            <div className='outer'>
               <div ref={ cont } onTransitionEnd={ endTransition }>
                  <img src={ s4 } />

                  <img src={ s1 } />
                  <img src={ s2 } />
                  <img src={ s3 } />
                  <img src={ s4 } />

                  <img src={ s1 } />
               </div>
            </div>

            <span onClick={ (e) => move(e, 'right') }> <BsArrowBarRight /> </span>
         </figure>
      </article>
   )
}

export default StepsCont