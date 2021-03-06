
import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getLogout } from '../redux/slices/authSlice'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function NavBar() {
  const classes = useStyles();
  const {isAuthenticated,role} = useSelector(state => state.authentification)
  const dispatch = useDispatch()
    const handelLogout= (e)=>{
      e.preventDefault()
      dispatch(getLogout())
    }
  return (
    <div className={classes.root}>
      <AppBar position="static"  color="transparent">
        <Toolbar>
         <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ClearIcon  color="error"/>elor
          </IconButton>
         </Link>
          <Typography variant="h6" className={classes.title}/>
          {
            isAuthenticated 
             ? (
               <>
                <Link to={`/dashboard/${role}`}>
                      <Button >dashboard</Button>
                </Link>
                <Button onClick={handelLogout}>Logout</Button>
              </>
             ):
             (
                  <>
                    <Link to="/login">
                      <Button >Login</Button>
                    </Link>
                    <Link to="/register">
                      <Button>Register</Button>
                    </Link>
                  </>
             )
          }
         
           
        </Toolbar>
      </AppBar>
    </div>
  );
}