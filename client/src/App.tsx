import React,{useEffect} from "react";
import axios from "axios";
import { Navbar } from "./components";
import { LoginPage } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api').then((data)=>{
      console.log(data);
    })
  },[])
  return (
    <Router>
    <Navbar/>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
