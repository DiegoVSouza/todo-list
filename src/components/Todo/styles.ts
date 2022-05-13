import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';


export const Container = styled.main`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;

  width: 100%;
  height: 100%;

  h1{
    color: white;
    margin-top: 2rem;
  }
  
  
  form{
    width: 50%;
    display: flex;
    padding: 2rem 4rem 2rem;
    flex-direction: column;
    position: relative;
      

      input:focus, .input-wrapper input:active{
        border-color:${darken(0.05, 'purple')};
        border-width: 5px;
        padding-left: 1rem;
      }

    label{
      color: white;
      margin-top: 0.5rem;
      margin-bottom: 0.25rem;
    }
    
    input{
      position: relative;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border-style: solid;
      border-width: 0.5px;
      transition: all 200ms;
      &:last-child{
        margin-top: 1rem;
        border-radius: 10px;
        border-style: none;
        background: ${darken(0.08, 'white')};
        box-shadow: 2px 2px 10px 2px ${darken(0.08, '#2c2c2c')};

        transition: all 200ms;
        &:hover{
          background: white;
          box-shadow: -2px -2px 10px 5px ${darken(0.02, 'purple')};
        }
      }
    }
    
    
  }
  button{
    width: 5%;
    height: 5%;
    margin-bottom: 2rem;
    border-radius: 5px;
    border-style: none;
    font-size: 1rem;
    
  }

  
`;

export const Todos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  ul{
    width: 50%;
    padding-bottom: 2rem; 

    h2{
      text-align: center;
      color: white;
    }
    li{
      display: flex;
      
      flex-direction: column;
      align-content: flex-start;
      list-style: none;
      width: 100%;
      background: white;
      border-radius: 15px;
      margin-top: 1rem;
      padding: 1rem;
      
      strong{
        
      }
      label{
        margin-top: 0.5rem; 
        
      }
    }
  }
`


export const Empty = styled.section`

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    strong{
      font-size: 1rem;
      padding: 1rem;
    }
    img{
      width: 5rem;
    }
  }
`