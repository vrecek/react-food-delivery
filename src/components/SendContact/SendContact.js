import React from 'react'
import '../../css/SendContact.css'
import Button from '../REUSABLE/Button'
import { useState } from 'react'

const SendContact = () => {
   const [sendRes, setSendRes] = useState(null)
   const focus = e => {
      e.target.style.borderColor = 'rgb(137, 225, 65)'
   }

   const blur = e => {
      if(!e.target.value) {
         e.target.style.borderColor = 'royalblue'
      }
   }

   const fakeSend = e => {
      e.preventDefault()

      const [name, mail, text] = [...e.target.elements].map(x => x.value)

      let msg = 'Successfully sent'

      if(name.length < 3) {
         msg = 'Username is too short'

      }else if(!/^\S+@\S+\.\S+$/.test(mail)) {
         msg = 'Mail address is incorrect'

      }else if(!text) {
         msg = 'Text message is empty'
      }

      let success = msg === 'Successfully sent' ? true : false

      setSendRes({ success, msg })

      setTimeout(() => {
         setSendRes(null)
      }, 2500)
   }

   return (
      <section className='send-opinion'>

         <form onSubmit={ fakeSend }>
            <h1>Send us your opinion</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
            {
               sendRes && <h3 className={ sendRes.success.toString() }>{ sendRes.msg }</h3>
            }

            <section>
               <div>
                  <label>Username</label>
                  <input onBlur={ blur } onFocus={ focus } spellCheck='false' type='text' />
               </div>

               <div>
                  <label>E-mail</label>
                  <input onBlur={ blur } onFocus={ focus } spellCheck='false' type='text' />
               </div>

               <textarea onBlur={ blur } onFocus={ focus } spellCheck='false'>

               </textarea>
            </section>

            <Button _text='Send message' />
         </form>

      </section>
   )
}

export default SendContact