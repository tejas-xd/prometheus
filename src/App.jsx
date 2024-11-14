import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./authPages/SignUpForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./authPages/LoginForm";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  )
}

export default App;