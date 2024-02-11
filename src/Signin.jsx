import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import {Typography} from '@mui/material'

function Signin(){
    return <div>
        <center>
        <div style={{
            paddingTop:150,
            marginBottom:10
        }}> <Typography variant={"h6"}>
            Welcome back!
            Let's get you signed in
            </Typography>
        </div>
        </center>
        <center>

        <Card variant="outlined" style={{width:400, padding:20}}>
            <br/>
            <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" /> <br/><br/>
              <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />

        <br/><br/>
        <Button size={"large"} variant="contained" style={{}}>Sign In</Button>        </Card>
            </center>
    </div>
}

export default Signin;