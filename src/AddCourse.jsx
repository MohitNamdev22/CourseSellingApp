import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import {useState} from "react";

function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image,setImage] = useState();

    return <div style={{display: "flex", justifyContent: "center"}}>
        <Card varint={"outlined"} style={{width: 400, padding: 20}}>
        <TextField
            onChange={(e) => {
                setTitle(e.target.value);
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
        />

        <TextField
            onChange={(e) => {
                setDescription(e.target.value)
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
        />

        <TextField
            onChange={(e) => {
                setImage(e.target.value)
            }}
            fullWidth={true}
            label="Image link"
            variant="outlined"
        />

        <Button
            size={"large"}
            variant="contained"
            onClick={() => {
                function callback2(data) {
                    alert("course has been added")
                    console.log(data.token)
                }
                function callback1(res) {
                    res.json().then(callback2)
                }
                fetch("http://localhost:3000/admin/courses", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true
                    }),
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
                    .then(callback1)
            }}
        > Add course</Button>
        </Card>
    </div>
}

export default AddCourse;