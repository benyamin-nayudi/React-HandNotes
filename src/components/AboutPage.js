//$ اینجا اومدیم و لینک های صفحه رو تبدیل به لینک روتر دام کردیم

import { Link } from "react-router-dom"
export default function AboutPage(){
        return(
         <div>
             
             <h2> THIS IS ABOUT PAGE</h2>
             <Link className="btn btn-danger" to="/">Home</Link>
             
         </div>
        )
}

