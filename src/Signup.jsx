import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signup() {
    return (
        <div>
            <center>
                <div style={{
                    paddingTop: 150,
                    marginBottom: 10
                }}>
                    <Typography variant={"h6"}>
                        Welcome back!
                        Let's get you signed up
                    </Typography>
                </div>
            </center>
            <center>
                <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                    <br />
                    <TextField fullWidth={true} label="Email" variant="outlined" id="username" /> <br /><br />
                    <TextField fullWidth={true}  label="Password" variant="outlined" id="password" type="password" />
                    <br /><br />
                    <Button
                        size="large"
                        variant="contained"
                        onClick={() => {
                            let username = document.getElementById("username").value;
                            let password = document.getElementById("password").value;
                            fetch("http://localhost:3000/admin/signup", {
                                method: "POST",
                                body: JSON.stringify({
                                    username,
                                    password
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            })
                        }}
                    >Sign Up</Button>
                </Card>
            </center>
        </div>
    );
}

export default Signup;
