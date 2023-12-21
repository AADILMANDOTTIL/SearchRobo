import React from 'react'

function CartBox({Cart}) {
  return (
    <div className='maindiv' >
    {Cart.map((people) => (
      <div className='img'>
        <h4 key={people.id}>{people.name}</h4>
        <h4>{people.email}</h4>
        <img className='img1' src={`https://robohash.org/${people.id}?set=set${people.id}`} alt="" />
      </div>

    ))}
  </div>
  )
}

export default CartBox