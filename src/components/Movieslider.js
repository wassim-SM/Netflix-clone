import React from 'react';
import Card from './Card';
import styled from 'styled-components';


function Movieslider({ data, title }) {
  return (

    <Moviewrapper> 
        <h1> {title} </h1>
        <div className='wrapper' >
        <div className='slider'>
    
      {
        data.map((movie, index) => {
          return <Card movieDta={movie} index={index} key={movie.id} />
        })
      }
    </div>
        </div>
    
    </Moviewrapper>
  );
}
const Moviewrapper=styled.div`
gap: 0.7rem;
position: relative;
padding: 2rem 0;
h1{
    color: white ;
    margin-left: 50px;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium ','Arial Narrow',Arial, Helvetica, sans-serif,sans-serif;
}
.wrapper{
.slider{
    display: flex;
    width: max-content;
    gap: 0.6rem;
    transform: translateX(0px);
    transition: 1s ease-in-out ;
    margin-left: 5px;
}
}
`

export default Movieslider;
