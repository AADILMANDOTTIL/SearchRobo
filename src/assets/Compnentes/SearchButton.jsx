import React from 'react'

function SearchButton({SearchBtn,btn}) {
  return (
    
         <div >
        <h1>ROBOHASH</h1>
        <input type="search" className={btn} placeholder="Search" onChange={SearchBtn} />
      </div>
    
  )
}

export default SearchButton