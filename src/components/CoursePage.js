import { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";



const CoursePage = ({course}) => {

    const [courses, setCourses] = useState([])
    
    
    useEffect(() => {
        getCourses().then(function (_courses) {
            setCourses(_courses)
        })
    }, [])
    
    
    return (
        <>
        
        <h1>THIS IS COURSE PAGE</h1>
        <Link className="btn btn-danger" to="/course">go to courses</Link>
        <CourseList courses={courses} />

        
        <h1>THIS IS COURSE PAGE</h1>
        </>
            )
}
                    
    export default CoursePage;
