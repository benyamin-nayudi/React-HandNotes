/*
// $ بخش اول:‌درست کردن دکمه سیو

import { useState ,useEffect} from 'react'
import CourseForm from "./CourseForm"
// * اینجا میایم و کل کورس ای پی ای رو به عنوان یه ابجکت ایمپورت میکنیم. در این صورت برای دسترسی به هر کدوم از فانکشن هایی که اونجا اکسپورت شدن از طریق دات نوتیشن عمل میکنیم.
import * as courseApi from "../api/courseApi"
import { toast } from 'react-toastify'

export default function ManageCoursePage(props){

    const [course , setCourse] =useState({
        id: null ,
        slug:"" ,
        authorId:null,
        category:"",
        title:""
    })

   
    function changeHandler(e){
       const updateCourse ={...course ,[e.target.name] : e.target.value} 
       setCourse(updateCourse)
    }


 // فانشکن سابمیت هندلر رو درست میکنیم و از کورس ای پی ای فانکشن سیو کورس رو توش کال میکنیم. این فانکشن ای پی ای کورس رو میگیره و اون رو سیو میکنه
function submitHandler(event){
    event.preventDefault();
    // پریونت دیفالت میاد و از رفرش شدن صفحع جلوگیری میکنه . اگه این عبارت نباشه قبل اینکه صفحه بخواد سیو کنه این میاد و رفرش میشه و اطلاعاتی به سمت کورس فرم نمیره

    courseApi.saveCourse(course)
//این خط میاد و فانکشن سیو کورس رو کال میکنه. این فانکشن مقادیری که توی اینپوت ها وارد کردیم رو وارد تیبل میکنه

    setCourse({
        id: null ,
        slug:"" ,
        authorId:null,
        category:"",
        title:""
    }    )
    //دوباره مقادیر کورس رو نال و امپتی استرینگ میذاریم تا بعد سیو کردن کورس بیاد و اینپوت هامونو خالی کنه


    // عبارت بالا رو میتونیم ننویسیم و به جاش مستقیم کاری کنیم که بعد سیو کردن بره به صفحه تیبلمون
    props.history.push("/courses")

// توستیفای رو برای نشون دادن یه پیام مموقع سابمیت کردن ادد کردیم.
    toast.success("your course saved successfully")
}


// میخوایم یه ارور درست کنیم واسه وقتی که کاربر بدون اینکه چیزیی توی اینپوت بنویسه، سیو کنه . در این صورت ما عمل کلاینت ساید ولیدیشن انجام میدیم. چون در نظر کلاینت این یه عمل درسته ولی وقتی میره سمت سرور ، سرور میفهمه که هیچی ندادیم بهش و کلا چیزی ذخیره نمیکنه پس میخوایم اصلا از همون بخش کلاینت یه ولیدیشنی انجام بشه و اگه اوکی بودن اطلاعات، اطلاعات برسه سمت سرور.
// const [error , setErrors] = useState({})

// function formIsValid(){
//     const _errors = {}
//     if(course.title === "") _errors.title ="title is required"
//     if(course.authorId === "") _errors.authorId ="author is required"
//     if(course.category=== "") _errors.category ="category is required"
// }



//اینجا اومدیم و یه یوز افکت استفاده کردیم و فانکشن گت کورس با اسلاگ رو کال کردیم از کورس ای پی ای. هالا میایم و اسلاگی که قبلا بحثش شد چطوری میگیریم رو بهش پاس میدیم . ست کورسمونو برابر چیزی ک از اون میاد میذاریم. در نتیجه روی هر اسلاگی که کلیک کنیم توی تیبل فرم خودش پر میشه. در واقع این فانکشن میاد و اون اسلاگی که ما روش کلیک میکنیم. تمام اطلاعاتشو برامون برمیگردونه برای مثلا من اگه روی بوتسترپ کلیک کنم این فانکشن میاد و از اسلاگی که من روش کلیک کردم اینارو میاره

//{id: 3, title: "IMD class 1 bootstrap course", slug: "bootstrap", authorId: 2, category: "JavaScript"}
// authorId: 2
// category: "JavaScript"
// id: 3
// slug: "bootstrap"
// title: "IMD class 1 bootstrap course"
// حالا ست کورس رو برابر این قرار میدیم و توی فرم خود بخود دیگه هرکدوم از اینپوت ها ولیوهای خودشو برمیداره و پر میشه اتومات دیگه

useEffect(()=>{
    const slug = props.match.params.slug

    slug && courseApi.getCourseBySlug(slug).then(_course =>setCourse(_course))
},[props.match.params.slug])




    return(
        <>
           <h2>Manage Course</h2>
//  فانکشن سابمیت هندلر رو به کورس فرم پاس میدیم 
//             <CourseForm course={course} onChange={changeHandler} onSubmit={submitHandler} />
//         </>
//     )
// }
*/






// $ این بخش بعد از ایجاد استور در کورس استور است 

// در این بخش ما اومدیم و هرچی داریم رو مستقیم از کورس ای پی ای گرفتیم در حالی که با وجود فلاکس نباید اینطوری باشه واسه همین عوض میکنیم و هرچی داریم رو این بار از استور میگیریم

import { useState ,useEffect} from 'react'
import CourseForm from "./CourseForm"
// # import * as courseApi from "../api/courseApi"
import courseStore from "../stores/courseStore"

import { toast } from 'react-toastify'

export default function ManageCoursePage(props){

    const [course , setCourse] =useState({
        id: null ,
        slug:"" ,
        authorId:null,
        category:"",
        title:""
    })

   
    function changeHandler(e){
       const updateCourse ={...course ,[e.target.name] : e.target.value} 
       setCourse(updateCourse)
    }



    const [error , setErrors] = useState({})

function formIsValid(){
    const _errors = {}
    if(course.title === "") _errors.title ="title is required"
    if(course.authorId === "") _errors.authorId ="author is required"
    if(course.category=== "") _errors.category ="category is required"
}


function submitHandler(event){
    event.preventDefault();
    if(!formIsValid) return ;
    courseStore.saveCourse(course)
    props.history.push("/courses")
    toast.success("your course saved successfully")
}

useEffect(()=>{
    const slug = props.match.params.slug

    // # slug && courseApi.getCourseBySlug(slug).then(_course =>setCourse(_course))

    // اینجا میایم و به کورس استور میگیم که کورس مارو بیار با اون پرایویت استوری که ما واسش تعریف کردیم
   slug && setCourse(courseStore.getCoursesBySlug(slug))

},[props.match.params.slug])




    return(
        <>
           <h2>Manage Course</h2>
            <CourseForm course={course} onChange={changeHandler} onSubmit={submitHandler} />
        </>
    )
}

