import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = `http://localhost/api/pets`

export default () => {
  const [pets, setPets] = useState({})
  const [pet, setPet] = useState('')
  const [typeName,setTypename] = useState('')
  const [age,setAge] = useState('')
  const [weight,setWeight] = useState(0)
  const [price,setPrice] = useState(0)
  const getPets = async () => {
      const result = await axios.get(URL)
      setPets(result.data.list)
  }
  const getPet = async (id) => {
      const result = await axios.get(`${URL}/${id}`)
      console.log('Pet id: ', result.data)
      setPet(result.data)
  }
  const addPet = async (typeName, age ,weight , price) => {
      const result = await axios.post(URL,{
          typeName,
          age,
          weight,
          price
      })
      console.log(result.data)
      getPets()
  }
  const deletePet = async (id) => {
      const result = await axios.delete(`${URL}/${id}`)
      console.log(result.data)
      getPets()
  }
  const updatePet = async (id) => {
      const result = await axios.put(`${URL}/${id}`,{
        typeName,
        age,
        weight,
        price
      })
      console.log('pet id update: ', result.data)
      getPets()
  }
  const printPets = () => {
      console.log('Pets:', pets)
      if (pets && pets.length)
          return (pets.map((pet, index) =>
              (<li key={index}>
                  {(pet)?pet.type:'-'} : {(pet)?pet.weight:0}
                  <button onClick={() => deletePet(pet.id)}> Delete </button>
                  <button onClick={() => getPet(pet.id)}>Get</button>
                  <button onClick={() => updatePet(pet.id)}>Update</button>
              </li>)
          ))
      else {
          return (<h2>No pets</h2>)
      }
  }
  useEffect(() => {
      getPets()
  },[])
  return (
      <div>
          <h2>PET SHOP</h2>
          <ul>{printPets()}</ul>
        
          income : {pet.price}
          <h2>Total</h2>
          price:<input type="text" onChange={(e)=>setPrice(e.target.value)} /> <br/>
          Weight:<input type="number" onChange={(e)=>setWeight(e.target.value)} /> <br/>
          Age:<input type="text" onChange={(e)=>setAge(e.target.value)} /> <br/>
          Type:<input type="text" onChange={(e)=>setTypename(e.target.value)} /> <br/>
          <button onClick={ () => addBear(typeName, age ,weight, price)}>Add new Pet</button>
      </div>
  )
}
