import React from 'react'
import '../../css/SearchCont.css'
import { BsSearch } from 'react-icons/bs'
import back from '../../images/search2.png'
import PopularResult from './PopularResult'
import SearchResult from './SearchResult'
import words from './SearchRandomWords.json'
import { useState } from 'react'

const SearchCont = () => {
   const [srchWords, setSrchWords] = useState(null)
   const search = e => {
      const v = e.target.value

      if(v.length <= 2){
         if(srchWords) setSrchWords(null)
         
         return
      }

      const arr = words.filter(x => {
         const reg = new RegExp(x, 'i')
         return reg.test(v)
      }).splice(-10)

      setSrchWords(arr)
   }

   return (
      <section className='search-container' style={{ 
         background: `url(${ back })`,
         backgroundSize: 'cover'
      }}>

         <h1>Search what you want</h1>

         <section className='main-cont'>
            <div className='input-cont'>
               <input onChange={ search } type='text' spellCheck='false' placeholder='Search...' />
               <span> <BsSearch /> </span>

               <section className='srch-res-cont'>
                  {
                     srchWords && srchWords.map(x => (
                        <SearchResult key={ x } text={ x } />
                     ))
                  }
               </section>
            </div>

            <section className='popular'>
               <h2>Popular results:</h2>

               <section className='pop-res-cont'>
                  <PopularResult text='Cheeseburger' />
                  <PopularResult text='Chicken wings' />
                  <PopularResult text='Salami pizza' />
               </section>

               <section className='pop-res-cont'>
                  <PopularResult text='Tortilla' />
                  <PopularResult text='Mineral water' />
                  <PopularResult text='Lorem ipsum' />
               </section>
            </section>
         </section>

      </section>
   )
}

export default SearchCont