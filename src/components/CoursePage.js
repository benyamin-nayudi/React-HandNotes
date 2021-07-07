

// $$$$ این بخش مربوط به قبل از پارامز هستش
  
// import { useState, useEffect } from "react";
// import { getCourses } from "../api/courseApi";
// import { Link } from "react-router-dom";
// const CoursePage = () => {

//     const [courses, setCourses] = useState([])
    
    
//     useEffect(() => {
//         getCourses().then(function (_courses) {
//             setCourses(_courses)
//         })
//     }, [])
    
    
//     return (
//         <>
//         <h1>THIS IS COURSE PAGE</h1>
//         {/* / در بخش فرم ها ما این تیبل رو میفرستیم به کورس لیست . اپدیت شده این در پایین نوشته شده بعد انتقال تیبل */}
//         // <table className="table">
//         //         <thead>
//         //         <tr>
//         //         <th>Author Id</th>
//         //                 <th>slug</th>
//         //                 <th>Category</th>
//         //                 <th>Slug</th>
//         //                 </tr>
//         //                 </thead>
//         //         <tbody>
//         //             {courses.map(course => {
        //                 return (
        //                     <tr key={course.id}>
        //                         <td>{course.authorId}</td>
        //                         {/* /course/html */}
        //                         {/* // {/* اینجا ما کار خاصی نکردیم فقط اومدیم و کورس اسلاگ هارو گذاشتیم تو جدول و یه ستون ازشون درس کردیم. بعد اومدیم گفتیم که هر کدوم از اینا لینک بشه به اونی که نوشتیم داخل. لینکشم به این صورته که اول کورس میاد و بعدش همون کورس اسلاگ بعدش میاد. یعنی لینک هر اسلاگ میشه کورس اسلش خود اسلاگی که روش کلیک کردیم. حالا بعد اینکار روی هر قسمت از این ستون که کلیک کنیم یو ار ال بالای براوزر عوض میشه. اتفاق زمانی میوفته که ما بریم و توی اپپ جی اس یه چیزایی اضافه کنیم که اسم بخشش اسلاگ هست  */}
        //                         <td> <Link to={`/course/${course.slug}`} > {course.slug} </Link>  </td>  
                                
        //                         <td>{course.category}</td>
        //                         <td>{course.slug}</td>
        //                     </tr>
        //                     )
        //                 })}
        //                 </tbody>
        //                 </table>
        //                 <h1>THIS IS COURSE PAGE</h1>
        //                 </>
        //                 )
        //             }
                    
        //             export default CoursePage;

 



// $$$$ این بخش مربوط به فرم و پارامز هستش

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
        <Link className="btn btn-danger" to="/courses">go to courses</Link>

 {/* اینجا اومدیم به کورس لیست ابجکته کورس رو دادیم و کلا اطلاعات جدول که همون ای پی ایه رو به پیج کورس لیست به عنوان پراپس منتقل کردیم واسش  */}
        <CourseList courses={courses} />

        
        <h1>THIS IS COURSE PAGE</h1>
        </> 
                        )
                    }
                    
    export default CoursePage;
