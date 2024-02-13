import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {Card} from "@mui/material"

function AddCourse(){
    return <div style={{
        display:"flex", justifyContent:"center"
    }}>
        <Card variant={"outlined"} style={{width:400, padding:20}}>
        <TextField
        onChange={()=>{

        }}
        
        fullWidth={true}
        label="Title"
        variant="outlined"/>

        <TextField 
        onChange={()=>{

        }}
        fullWidth={true}
        label="Description"
        variant="outlined"
        />
        <Button
        size={"large"}
        variant="contained"
        onClick={()=>{

        }}>Add Course</Button>
        </Card>
    </div>
     
}

export default AddCourse;