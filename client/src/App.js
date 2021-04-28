import React,{useEffect} from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {useDispatch } from 'react-redux'
import Routes from './Routes'
import {ifLoged} from './redux/slices/authSlice'


const App =()=> {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ifLoged())
  },[dispatch])
  return (
    <Router>
      <Routes/>
    </Router>
  );
}




export default App;
