//$ این بخش مال قبل ساختن اکشن تایپز هستش

// import * as courseApi from "../api/courseApi";
// import dispatcher from "../appDispatcher";

// اینجا میایم و اکشن خودمونو درست میکنیم. اکشن ما میخواد کورس سیو کنه پس از فانکشن سیو کورس موجود در کورس ای پی ای استفاده میکنیم بعدش دیسپچر رو صدا میزنیم و ابجکت پی لود رو میدیم به دیسپچ

// export  function saveCourse(course) {
//     courseApi.saveCourse(course).then((saveCourse)=>{
//         dispatcher.dispatch({
//             actionType: "CREATE_COURSE",
//             course: saveCourse
           
//         })
//     })
// }

/*

 * اکشن ما دو قسمت داره 
 * قسمت اول که اکشن کریتور هستش یعنی این 
 * action creator
 
*   export  function saveCourse(course) {
*    courseApi.saveCourse(course).then((saveCourse)=>{
*        dispatcher.dispatch({
*            actionType: "CREATE_COURSE",
*            course: saveCourse
*           
*        })
*    })
*}

 / قسمت دومش که اینه که بهش میگن پی لود

/   dispatch{
/    actionType: "CREATE_COURSE",
/    course: saveCourse    
/     }

&خود پی لود اون دو خط داخلش رو میگن اکشن یعنی این 

&   actionType: "CREATE_COURSE",
&   course: saveCourse
    


        اینجا اکشن اومد پی لود رو دیسپچ کرد به دیسپچر 
 */



// $ این بخش مال بعد ساختن اکشن تایپز هستش

import * as courseApi from "../api/courseApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

// میایم و به جای کریت کورس از ابجکتی که تو اکشن تایپز درست کردیم استفاده میکنیم

export  function saveCourse(course) {
    courseApi.saveCourse(course).then((saveCourse)=>{
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            course: saveCourse
           
        })
    })
}

// تا اینجا اکشن ساخته شد