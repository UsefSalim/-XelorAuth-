import React,{useEffect} from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {useDispatch,useSelector } from 'react-redux'
import Routes from './Routes/Routes'
import {ifLoged} from './redux/slices/authSlice'
const App =()=> {
  const {isAuthenticated} = useSelector(state => state.authentification)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ifLoged())
  }, [isAuthenticated])
  return (
    <Router>
      <Routes />
    </Router>
  );
}




export default App;
