import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
//ما چیزی که اکسپورت میکنیم رو اینپورت میکنیم و لذا به جی اس نیازی نیست بعد از م اباوت پیج
// import About from "./components/AboutPage"

//میخوایم هدر توی همه صفحات باشه و میاریمش تو ایندکس دات جیس
import Header from "./components/common/Header"

render(
  <BrowserRouter>
  <Header/>
    <App />
    {/* اینطوری هم میشه ایمپورت کرد ولی لازم نیست همه چیو شلوغ کنیم و همه رو تو فایل اپ میذاریم */}
    {/* <About /> */}
  </BrowserRouter>,
  // ما کلا یک بار رندر میکنیم و یک بار رووت رو میگیریم
  document.getElementById("root")
)