import React from "react";
import styled from "styled-components";
import {Link, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Articles} from "./pages/Articles/Articles";

const BigGreenHeading = styled.h1`
	color: green;
	font-size: 96px;
`;

const App = () => {
  return (
    <>
      <BigGreenHeading>Server side rendering</BigGreenHeading>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
      </ul>
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/articles" component={<Articles />} />
      </Routes>
    </>
  );
};

export default App;
