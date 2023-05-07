import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Signinstyle from "./index.module.css";
import LockClockRoundedIcon from '@mui/icons-material/LockClockRounded';
import { purple } from '@mui/material/colors';
import { users } from '../../service/users';
const Signin = ({setCurrentUser, setSignIn}) => {
    
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);

    function handleSignIn(){
        const user = users.find(x=>x.email==email && x.password==password)
        if(user){
            setCurrentUser(user)
        }
        else{
            setOpen(true)
        }
    }
    
  const handleSignUp = () => {
    setSignIn(false)
  }

  return (
    <>
    
    <div className={Signinstyle.signInWrapper} style={{border:'1px solid black'}}>
    <Grid container spacing={2} style={{display:'flex', justifyContent:'center', }}>
    <Grid style={{textAlign:'center'}}  fullWidth item xs={7}>
    <LockClockRoundedIcon sx={{ fontSize: 30, color: purple[500] }} />
    <h3>Sign in</h3>
    </Grid>
    <Grid item xs={7}>
    <TextField   fullWidth id="outlined-basic" label="Email Address" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </Grid>
    <Grid  item xs={7}>
    <TextField   fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </Grid>
    <Grid item xs={7}>
    <FormControlLabel   fullWidth control={<Checkbox defaultChecked />} label="Remember me" />
    </Grid>
    <Grid item xs={7}>
    <Button onClick={handleSignIn}  fullWidth variant="contained">SIGN IN</Button>
    </Grid>
    <Grid item xs={7} style={{display:'flex', justifyContent:'space-between'}}>
    <a href='#'>Forgot Password</a>
    {/* <a href='#' onClick={handleSignUp} >Sign Up</a> */}
    </Grid>


    </Grid>
    </div>
    </>

  )
}

export default Signin