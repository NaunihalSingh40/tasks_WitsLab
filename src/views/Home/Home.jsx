import React, { useEffect } from "react";
import { Wrapper } from "styles/components/Home/Home";
import { useSelector } from "react-redux";

export const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  const loginCredentials = JSON.parse(window.localStorage.getItem("loginCredentials:"));
  console.log(loginCredentials);
  
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <>
      <Wrapper isDarkMode={theme} >
        <h1>Hello {loginCredentials?.Username}, your password breached: {loginCredentials?.Password}</h1>
      </Wrapper>
    </>
  );
};
