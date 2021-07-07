//$$$$$$$$$ بخش راوتر:‌در این قسمت ما همه راوترها و ایف هایی که به اونا وابسته بود رو دلیت کردیم و از ریکت راوتر دام استفاده کردیم$$$$$

import { NavLink } from "react-router-dom"
const Header = ()=>{

const activeStyle={color: "orange"}
    return (
        <nav className="container-fluid">
            <NavLink activeStyle={activeStyle} exact to="/"> Home Page</NavLink> | <NavLink activeStyle={activeStyle} to="/about"> About Us</NavLink> |  <NavLink activeStyle={activeStyle} to="/courses">Courses</NavLink>
        </nav>
    )
}
export default Header
