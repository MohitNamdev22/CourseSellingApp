import Button from '@mui/material/Button';
import {Typography} from '@mui/material';

function Appbar(){
    return <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding:4
    }}>
        <div>
        <Typography>
            Coursera
        </Typography>
        </div>
        <div style={{display:"flex"}}>
            <div style={{marginRight:10}}>
        <Button variant={"contained"} 
        onClick={()=>{
            window.location="/signup"
        }}
        >Sign up</Button>
            </div>
            <div>
        <Button variant={"contained"} 
        onClick={()=>{
            window.location="/login"
        }}
        >Sign in</Button>
            </div>
        </div>
    </div>
}

export default Appbar;