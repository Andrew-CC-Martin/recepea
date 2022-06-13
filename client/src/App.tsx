import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";

import "./App.css";

import { SignUp } from "./features/signup/SignUp";
import { LogIn } from "./features/login/LogIn";
import { Home } from "./features/home/Home";
import { Ingredients } from "./features/pantry/Ingredients";
import { RecepeaFooter } from "./features/footer/RecepeaFooter";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </Content>
      <RecepeaFooter />
    </div>
  );
}

export default App;
