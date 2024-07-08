import './App.css';
//import Modal from './components/Modal';
//import ReminderList from './components/ReminderList';
import { BrowserRouter, Route, NavLink, Routes,Navigate , Link} from 'react-router-dom'

import React, {useState} from 'react';

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Article from './pages/Article'
import FormArticle from './pages/FormArticle'
import Edit from './pages/Edit';
import Login from './pages/login';
import Register from './pages/register';
import { signOut } from 'firebase/auth';
import { auth } from './firebase/config';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false); 
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div>
      <BrowserRouter>
    {!loggedIn? (
      <div>
        <Routes>
            <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    ):( 
    <div className="App">
      
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/new">New Article</NavLink>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About /> }/>
          <Route path="/contact" element={<Contact /> }/>
          <Route path="/articles/:urlId" element={<Article/> }/>
          <Route path="/new" element={<FormArticle /> }/>
          <Route path="/*" element={<Navigate to="/"/> }/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )}
  </BrowserRouter>
  </div>
  );
}

export default App;
