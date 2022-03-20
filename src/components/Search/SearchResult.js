import React from 'react'
import '../../css/SearchResult.css'

const SearchResult = ({ text }) => {
   return (
      <article className='srch-res'>
         { text }
      </article>
   )
}

export default SearchResult