/*
$$$$$$$$$$$ بخش راوتر:‌در این قسمت ما همه راوترها و ایف هایی که به اونا وابسته بود رو دلیت کردیم و از ریکت راوتر دام استفاده کردیم$$$$$
$
# import AboutPage from "../AboutPage"
# import HomePage from "../HomePage"
# import CoursePage from "../CoursePage"
 */
import { NavLink } from "react-router-dom"
const Header = ()=>{
/* 
  #  function header(){
  #  const route = window.location.pathname
  #  const arr = [1,2,3]
  #  if(route==="/courses") return <CoursePage/>
  #  if(route==="/about") return <AboutPage username="IMD"/>
  #  else return <HomePage  />
  #  }
*/
const activeStyle={color: "orange"}
    return (
        <nav className="container-fluid">
            {/* لینک های اینجارو چون تو همه ی پیج ها هست میذاریم توی نولینک واسه همین اول اینپورتش میکنیم */}
            {/* یه دونه کلس هم واسش تعریف میکنیم به عنوان اکتیو کلس */}

            <NavLink activeStyle={activeStyle} exact to="/"> Home Page</NavLink> | <NavLink activeStyle={activeStyle} to="/about"> About Us</NavLink> |  <NavLink activeStyle={activeStyle} to="/courses">Courses</NavLink>
            
            {/* بعد اضافه کردن این میبینیم که دیگه کلا لود نداریم توی لینکامون */}
            {/* اینجا اومدیم و اکتیو استایل رو دادیم به همشون و اگزکت رو هم استفاده کردیم واسه خاطر همون اسلشه. بعد میبنیم که روی هرکدوم از لینک ها میزنیم اکتیو استایل میاد اون استایل رو برای ترو میکنه و واسه بقیه فالس میکنه */}
            {/* {header()} */}
        </nav>
    )
}
export default Header
