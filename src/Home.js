import React from 'react'
// import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Truested from './components/Truested';
const Home = () => {
  const data={
    name:"Sheela Store",
  }
  return (
     <>
      <HeroSection myData={data}/>
      <Services/>
      <Truested/>
      </>
    
  )
}
// const Wrapper = styled.section`
//   background-color: ${({theme})=> theme.colors};
//   height: 100vh;
// `;

export default Home
