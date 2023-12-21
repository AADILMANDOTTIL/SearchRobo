import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import SearchButton from './assets/Compnentes/SearchButton'
import CartBox from './assets/Compnentes/CartBox'

function App() {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, SetFilterValue] = useState(data)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setData(result))
    console.log(data);
  }, [])

  const onchange = (event) => {
    const result = event.target.value.toLocaleLowerCase()
    setSearchValue(result)
    console.log(result);
  }
  useEffect(() => {
    const newData = data.filter((value) => {
      return value.name.toLocaleLowerCase().includes(searchValue)
    })
    SetFilterValue(newData)
    console.log(newData);

  }, [data, searchValue])


  return (
    <div className='main'>
      <SearchButton SearchBtn={onchange} btn="btn" />
      <CartBox Cart={filterValue} />
    </div>
  )
}

export default App