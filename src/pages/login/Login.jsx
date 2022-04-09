
import React from 'react'
import {LoginContainer,FormContainer,StyledImg,Header,StyledForm,StyledInput,StyledButton} from "./LoginStyles";
import meal from "../../assets/meal.svg"
const Login = () => {
    
    const user={
      username:"user"
    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      
      sessionStorage.setItem("user",JSON.stringfy(user))

      window.location.href="/home";
    }

  return (
   <LoginContainer>

     <FormContainer>
        <StyledImg src={meal} />

        <Header> {"<Clarusway/>"} Recipe</Header>

        <StyledForm onSubmit={handleSubmit}>

          <StyledInput type="text" placeholder="username" required/>
          <StyledInput type="password" placeholder="password" required/>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>

          
        
     </FormContainer>

   </LoginContainer>
  )
}

export default Login