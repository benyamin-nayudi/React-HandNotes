// // import AboutPage from "./AboutPage";
// // همین اباوت پیج رو میتونیم پایین همین صفحه کال کنیم و توی صفحه اچتملمون ببینیمش
// /**
 
//  function App() {
//    const btnn= 'btn-warning'
//    const arr= [1,2,3]
//    return (
//      <div  >
//      <h1 className={btnn}>the react crash course</h1>
//      <p className="jumbotron" >hello React</p>
//      <ul>
//      {arr.map((num,i)=> <li key={i}>{num}</li>)}
//      </ul>
//       {/* اینجا از دوتا کرلی بریسز استفاده میکنیم چون اولیش واسه اینه که ما داریم جی اس مینویسیم و دومیش واسه ابجکت بودن خود استایله */}
      
//       // <p style={{color:"red"}}> beny</p>
//       /* <AboutPage/> */
//       // </div>
//       // );
//     // }
    
//     // export default App;
    
//    +++++++++++++++++++++++ تا اینجا بخش اول 

// بخش دوم بعد از انتقال کد ها به صفحات خودشونه و الان فقط یه اپ جی اس داریم و دو تا صفحه که توش اینپورت شدن

// import AboutPage from "./AboutPage";
// import HomePage from "./HomePage";
//  function App() {
//    return(
//      <div>
//        <HomePage/>
//        <AboutPage/>
//      </div>
//    )
//     }
    
//     export default App;
    // ++++++++ بحث بعد استفاده از راوته که نیازی نیست کامل بلدش باشیم 
// این متد قدیمیه و نیازی نیست کامل بلدش باشیم


import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import CoursePage from "./CoursePage";
 function App() {
   const rout = window.location.pathname;
  //  console.log(rout);
   const arr= [1,2,3]
  if(rout==="/courses") return <CoursePage/>
   if(rout=== "/about") return <AboutPage pass="154"/>
  //  اینجا اومدیم و یه اتریبیوت در قالب یوزرنیم برای پرنت نوشتیم و در قالب پراپس بعدا توی خود پیج مورد نظر میگیریمش
   else return <HomePage username="I Am Props" pass={arr}/>
    }
    
    export default App;
    
//++++++++++بعد اینکه همه این کدارو منتقل کردیم به هدر این طوری میشه
/*

 function App() {

  }
    export default App;
    
*/