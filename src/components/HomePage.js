import { Link } from "react-router-dom";
const HomePage = (props)=>{
    
    return (
      <div  >
      <h1>THIS IS HOME PAGE</h1>
      <Link className="btn btn-primary" to ="/about">About Page Link </Link>
      <br/>
      <a className="btn btn-primary" href="/about">About Page a</a>
        </div>
       );
}

export default HomePage