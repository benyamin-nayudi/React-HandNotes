// $ این بخش مربوط به فرم هستش و داریم توش فانکشن های هندل کننده کنترلرهارو مینویسیم
import { useState } from 'react'
// #import {Prompt} from "react-router-dom"
import CourseForm from "./CourseForm"


export default function ManageCoursePage(props){

    // برای تغییر ولیو میایم و از یوز استیت استفاده میکنیم و ابجکتی که کورس هردفعه پاس میده و از اون کلا داریم میخونیم اطلاعات رو به یوز استیت میدیم
    const [course , setCourse] =useState({
        id: null ,
        slug:"" ,
        authorId:null,
        category:"",
        title:""
    })

    // برای اعداد از نال استفاده کردیم و برای استرینگ ها از استرینگ خالی. بعد هرکدومو بخوایم عوض کنیم از فانکشن ست کورس عوض میکنیم و ابجکت رو یه بار پاس میدیم به کورس فورم
    
    // فانکشنی برای تغییر ست کورس مینویسیم و توش از ابجکت کورس یه کپی تهیه میکنیم و فقط روی تایتل عمل تغییر انجام میدیم . بعد این فانکشن رو به عنوان پراپس  پاسش میدیم به کورس فرم
    // * function titleChangeHandler(e){
    // *   const updateCourse ={...course , title: e.target.value} 
    // *   setCourse(updateCourse)
    // * }
    // این فانکشن مال بخش اول

    // &بخش دومی که فانکشن رو بهینه کردیم و واسه همه اینپوت هامون استفاده میکنیمم اینه

    function changeHandler(e){
        // let x = e.target.name; 
       const updateCourse ={...course , [e.target.name] : e.target.value} 
       setCourse(updateCourse)
    }

    return(
        <>
           <h2>Manage Course</h2> 
           {props.match.params.slug}
           {/* {console.log( props)} */}

           {/* اینجا از پرامپت استفاده میکنیم  */}
           {/* {<Prompt when={true} message="are you sure you want to leave? " />} */}
           {/* با نوشتن این هالا هربار بخوایم از این پیج بریم بیرون یه پرامپت برامون میاره. البته میتونیم شرطهای دیگه ای واسش بذاریم که اینجا فعلا ترو دادیم فقط */}


        {/* // / <CourseForm course={course} onTitle={titleChangeHandler} /> */}
        {/* مشکلی که اینجا پیش میاد اینه که ما اگه چندتا فیلد داشته باشیم باید واسه هرکدوم یه هندلر بنویسیم واسه همین این مشکلو باید رفع کنیم/ 
         برای اینکه فانکشن بعدی رو بنویسیم همونطور که میدونیم فقط یه سری بخش های فانکشن مثلا بخش کتگوری با تایتل متفاوته که در پایین فانکشن رو اوردیم
         
          function titleChangeHandler(e){
        // / const updateCourse ={...course , category: e.target.value}  / فانکشن همون فانکشنه فقط اومدیم کتگوری رو درس کردیم
       setCourse(updateCourse)
            }
             مشاهده میکنیم که برای اینپوت تکستی که نیمش تایتله اومدیم و تایتل رو تو فانکشنش اوکی کردیم ، برای اینپوتی که نیمش کتگوریه ما اومدیم و کتگوریه کورس رو تغیر دادیم و الا اخر واسه همین میتونیم به این صورت به جای نوشتن کتگوری و تایتل از این عبارت استفاده کنیم

              function changeHandler(e){
                const updateCourse ={...course , [e.target.name]: e.target.value} 
                setCourse(updateCourse)
                }
         */}

        <CourseForm course={course} onChange={changeHandler} />

        </>
    )
}