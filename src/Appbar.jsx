import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Appbar(){
    const navigate = useNavigate()
    const [userEmail,setUserEmail] = useState(null);

    useEffect(()=>{
        function callback2(data){
            if(data.username){
                setUserEmail(data.username)
            }
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/me",{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+ localStorage.getItem("token")
            }
        }).then(callback1)
    },[]);

    if(userEmail){
        return <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:4
                }}>
            <div>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{display:"flex"}}>
                <div>
                    {userEmail}
                </div>
                <div style={{marginRight:10}}>
            <Button variant={"contained"} 
            onClick={()=>{
                localStorage.setItem("token",null);
                window.location="/";
            }}
            >Log Out</Button>
                </div>
            </div>
        </div>
    }
    else{
        return <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:4
        }}>
            <div>
            <Typography variant={"h6"}>
                Coursera
            </Typography>
            </div>
            <div style={{display:"flex"}}>
                <div style={{marginRight:10}}>
            <Button variant={"contained"} 
            onClick={()=>{
                navigate("/signup")
            }}
            >Sign up</Button>
                </div>
                <div>
            <Button variant={"contained"} 
            onClick={()=>{
                navigate("/signin  ")
            }}
            >Sign in</Button>
                </div>
            </div>
        </div>
    }

}

export default Appbar;