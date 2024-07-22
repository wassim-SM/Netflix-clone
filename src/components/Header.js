import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
function Header(props) {
    const navigate=useNavigate()
  return (
   <HeaderContainer>
    <div className='logo' >
    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='No internet connection'/>

    </div>
<button onClick={()=>navigate(props.login ? '/login' :'/signup' )} > { props.login ?'Log In':'Sign In'  } </button>
   </HeaderContainer>
  )
}
const HeaderContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 4rem;
.logo{
    img{
        height: 3rem;
        cursor: pointer;

    }

}

button{
    padding: 0.5rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
}
`
export default Header
