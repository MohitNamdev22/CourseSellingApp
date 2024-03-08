import { Card, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

function Courses(){
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses);
        }
    
        function callback1(res) {
            res.json().then(callback2);
        }
    
        fetch("http://localhost:3000/admin/courses/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(callback1);
    }, []);
   
   return <div>
        Courses
        {courses.map(course =>{ 
        return <Course course={course}/>}
        )}
    </div>
}

function Course(props){
    return <Card style={{
        margin:10,
        width:300,
        minHeight:200
    }}>
        <Typography textAlign={"center"} variant="h6">{props.course.title} </Typography>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
    </Card>
}

export default Courses;