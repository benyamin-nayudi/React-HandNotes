import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursePage from "./CoursePage";
import HomePage from "./HomePage";
import ManageCoursePage from "./ManageCoursePage";
import PageNotFound from "./PageNotFound";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App =()=>{

   return(
     <>
      <Header/>
      <ToastContainer autoClose={3000} hideProgressBar={false} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Redirect from="/jasem" to="/courses" />
        <Route path="/course/:slug" component={ManageCoursePage}/>
        <Route path="/course" component={ManageCoursePage} />
        <Route  component={PageNotFound} />
      </Switch>
    </>
   )
 }
    export default App;
    

  


