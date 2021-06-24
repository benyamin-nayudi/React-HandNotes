const Header = ()=>{
    return (
        <nav className="container-fluid">
            <a  href="/"> Home Page</a> | <a  href="/about"> About Us</a> |  <a  href="/courses">Courses</a>
        </nav>
    )
}
export default Header

// به کار دیگه هم که میتونیم بکنیم اینه که اون بخش از کد که توی اپپ دات جس هستش و کارش با لینک (راوت) رو میشه اورد اینجا
// ولی چون در قابل ایف و ایناست تو یه فانکشن مینویسیمش و توی ریترنه فانکشنی که رندر میگیره بعدا ریترنش میکنیم به این صورت

/**

import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import CoursePage from "../CoursePage";

const Header = ()=>{
    const arr= [1,2,3]

 function  heder() {
   const rout = window.location.pathname;
  if(rout==="/courses") return <CoursePage/>
   if(rout=== "/about") return <AboutPage />
   else return <HomePage username="I Am Props" pass={arr}/>
    }

    return (
        <nav className="container-fluid">
            <a  href="/"> Home Page</a> | <a  href="/about"> About Us</a> |  <a  href="/courses">Courses</a>
            {heder()}   
        </nav>
// اینجا میایم اون هدر رو کال میکنیم و اون چیزایی که توشه میاد تو بخش ریترن خود فانکشن اصلی هدر
//فقط دوپلیکت میشه که باید هرچی تو فایل اپ جی اس هست جز خود فانکشن اپ رو پاک کرد 

    )
}
export default Header
 */

 