import React from 'react'
import '../../css/Cards.css'
import One_card from './One_card'
import more from '../../images/card_more.png'

const Cards = () => {
   return (
      <section className='cards-section'>
         <h1>Choose from a variety of products</h1>

         <section className='cards-cont'>
               <One_card 
                  background_src='https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  title='Fast-Foods'
                  id='0'
                />
               <One_card 
                  background_src='https://images.unsplash.com/photo-1505174121555-098691c4d14a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                  title='Drinks'
                  id='1'
               />
               <One_card 
                  background_src='https://images.unsplash.com/photo-1528591922185-a0eb2f8f50b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
                  title='Sweets'
                  id='2'
               />
               <One_card 
                  background_src='https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
                  title='Dinners'
                  id='3'
               />
         </section>  

         <div className='see-more'>
            <h2>See more details at: <span>Our contributor's list</span></h2>
            <img src={ more } alt='see-more' />
         </div>
             
      </section>
   )
}

export default Cards