"use client"
import React from 'react'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('')
    console.log(searchQuery)

  return (
    
    <input 
    type="text" 
    placeholder='Search...'
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
     />
  )
}

export default SearchBar