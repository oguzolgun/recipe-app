
import React from 'react'
import { Button, FoodInput, FormContainer } from './HeaderStyles'

const Form = () => {
  return (
    <FormContainer>
      <FoodInput type="text" placeholder='Search'/>
      <Button type="submit">Search</Button>
    </FormContainer>


  )
}

export default Form