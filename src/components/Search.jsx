import React from 'react'


const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src="search.png" alt="Search Icon" />
        <input 
          type='text' 
          className='searchField'
          placeholder='Search through Thousands of Movies'
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        
      </div>
    </div>
  )
}

export default Search