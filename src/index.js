import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
/*
#import Header from "./components/common/Header"
*/
// /اینتری پوینت ما جاییه که داریم رندر میگیریم. در اینجا ما همه چیزو توی این بخش زیر رندر میگیریم و برای رندرمون از ریکت دام استفاده میکنیم

render(
  <BrowserRouter>
 {/* 
  #<Header/>
 */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
