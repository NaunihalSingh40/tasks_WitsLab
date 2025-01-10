import React, { useEffect } from 'react'
import { Wrapper } from 'styles/components/Home/Home'
import { useSelector } from 'react-redux'


export const Home = () => {

  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    document.title = "Home Page";
  }, []);
  
  return (
    <>
    <Wrapper isDarkMode ={theme}>
        <h1>Home Page</h1>
    </Wrapper>
    </>
  )
}
