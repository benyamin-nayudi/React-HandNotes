/*
ریکتی که ما توشیم ورژن ۱۷ هستش و از دسامبر ۲۰۲۰ ریلیز شده و هر کدی که قبلش نوشته شده
بالای تمام کد ها باید از 
import React from 'react'
استفاده کنیم. یعنی از ریکت میخایم استفاده کنیم. در ورژن ۱۷ به قبل نوشتن این اجباری بوده ولی
الان داخل فانکشن کامپوننت ها نمینویسیم ولی  داخل کلس بیس کامپوننت ها مینویسیم
کلس بیس کامپوننت ها  قدیمیتر هستن و ممکنه خیلی از کدهارو ببینید که با کلس کامپوننت نوشته شدن ولی ما ازش استفاده نمیکنیم
و بجاش از هوک ها استفاده میکنیم
*/
import React from "react"
class AboutPage extends React.Component{
    render(){
        return(
         <div>
             {/* به جای این دیو بالا میتونیم از گزینه های زیر هم استفاده کنیم
             <></>   or <React.fragment></React.fragment>
             */}
             <h2>hello ClassBase components</h2>
             <p>hello classes</p>
             <a className="btn bg-danger" href="/">Home</a>
         </div>
        )
    }
}

export default AboutPage
// در نهایت ما هم میتونیم این کامپوننتمونو روی دو فایل زیر ران کنیم
// app.js or index.js
//لازمه هم بدونیم که خود اپپ دات جی اس توی ایندکس جس ادد شده


// app.js
// مکانیه که ما پیج های دیگه مونو ران میکنیم و لازم نیست پیج هایی مثل هوم پیج و اباوت آس پیج کدهاشون بیان توش باشن واسه همین واسه هرکدوم ازینا یه فایل جدا
//میسازیم و اینجا میایم اینپورتشون میکنیم

// ++++++++++++++++ ازینجا به بعد با هوک ها کار میکنیم به جای استیت و پراپس


// در وهله اول اباوت پیج رو که به صورت کلس بیس کامپوننت نوشته بود رو به هوک تبدیل میکنیم
// دیگه چیزایی مثل رندر و استیت و اینا نداریم و کلس رو به فانکشن تبدیل میکنیم

// دیکه هم لازم نیست ریکت رو ایمپورت کنیم و به جاش یه سری هوک ها ایمپورت میکنیم

// هوکی هم که ایمپورت میکنیم به این صورته
// import {useState} from "react"


// const AboutPage =() => {
// //نخوه استفاده از یوزاستیت هم به این صورته یه چیزی مثل تکست مینویسیم و یه مقدار اولیه بهش میدیم با استفاده از عبارت یوز استیت
// const [text,setText] = useState(" ")

// //حالا یه فانکشن مینویسیم و مقداری که کاربر وارد میکنه رو به وسیله ایونت و تارگت و ولیوی اینپوت میگیریم بعدش 
// //اونو توی ان چینجه خود اینپوت میذاریم
// function changeHandler(e){
//     setText(e.target.value)
//     console.log(e.target.value);
// }
//     return(
//         // از عبارت ریکت.فرگمنت هم نمیتونیم استفاده کنیم و به جاش یا دیو میذاریم یا خالی میذاریم
//         <> 
//             <h2>hello ClassBase components</h2>
//             <p>hello classes</p>
//             <a className="btn bg-danger" href="/">Home</a>

//             <input type="text" onChange={changeHandler} value={text} />
//         </>
//     )
    
// }

// export default AboutPage
/* 
یه چیزی داریم به اسم لایف سایکل متد که اگه همچین اروری گرفتیم یعنی داریم هوک هارو اشتباه استفاده میکنیم
مرحله اول ماونته که یعنی کدهامون میره روی سرور تا رندر بگیره. اول میره رو کانستراکتور  رندر میگیره از دام و کدش
componentDidMount هست
برای اپدیت کردن باید از 
componentDidUpdate
استفاده بکنیم
و برای اینکه کارمون تموم بشه از اون اخری کامپوننت دید انماونت استفاده میکردیم
ولی همه اینا قدیمیه و مال کلس کامپوننته . ولی چون الانا استفاده میشه ممکنه همچین اروری بگیریم توی لایف سایکل متد و 
مشکل توی اون سه استیج مختلفه
*/