import React from 'react'
import '../../css/StepsCont.css'
import StepCounter from './StepCounter'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { useEffect, useRef } from 'react'
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
import s4 from '../../images/s4.png'
import desctext from './description.json'

const StepsCont = () => {
   const cont = useRef()
   const step = useRef()
   const desc = useRef()

   let w = null

   let counter = 1
   let moved = true

   const move = (e, dir) => {
      if(!moved) return
      moved = false
      
      const div = e.target.parentElement.children[1].children[0]
      dir === 'left' ? --counter : ++counter

      stepFill()
      descFade()
      
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

   const descFade = () => {
      const a = desc.current
      const h2 = a.children[0]
      const p = a.children[1]

      a.style.transition = '.4s'
      a.style.opacity = '0'

      setTimeout(() => {
         let num = counter - 1
         if(num >= 4) num = 0
         else if(num < 0) num = 3

         h2.textContent = desctext[num].title
         p.textContent = desctext[num].desc
         
         a.style.opacity = '1'   
      }, 400);
   }

   return (
      <article className='steps-cont'>
         <h1>How to use? It's <span>fast</span> and <span>easy</span> </h1>

         <StepCounter reference={ step } />

         <section className='wrap'>
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

            <article ref={ desc }>
               <h2>Lorem ipsm dolor amet</h2>
               <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
         </section>
      </article>
   )
}

export default StepsCont