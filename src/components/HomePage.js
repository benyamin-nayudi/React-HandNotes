//  $ لینک های صفحه رو تبدیل به لینک های روتر دام میکنیم
import { Link } from "react-router-dom";
const HomePage = (props)=>{
    
    return (
      <div  >
      <h1>THIS IS HOME PAGE</h1>
      {/* اینجا لینک رو از ریکت روتر دام فراخانی میکنیم و انکر تگمون رو تبدیل به لینک میکنیم میبینیم که چه سرعتی در اومدن پیج به بوجود اومده */}
      <Link className="btn btn-primary" to ="/about">About Page Link </Link>
      <br/>
      <a className="btn btn-primary" href="/about">About Page a</a>
        </div>
       );
}

export default HomePage