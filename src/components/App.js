// // /یه اپ درست میکنیم و امپورتش میکنیم توی ایندکس جی اس
// // $ این بخش مربوط به روتر دام هستش و توی این بخش ما اومدیم و با استفاده از روتر و سویچ اپمونو ساختیم
// import Header from "./common/Header"
// import { Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import CoursePage from "./CoursePage";
// import PageNotFound from "./PageNotFound";
// import AboutPage from "./AboutPage";
// import { Switch } from "react-router-dom";
// // {/* این سویچ میاد میگه که در یک لحظه فقط بین یکی از این صفحاتی که تومن سویچ کن */}
// import { Redirect } from "react-router-dom";
// import ManageCoursePage from "./ManageCoursePage";
// const App =()=>{

//    return(
//      <>
//       <Header/>
//       <Switch>
//         {/* میایم اینطوری از راوت استفاده میکنیم و توی بخش پث لینک پیج و توی کامپوننت اون کامپوننتی که میخایم بیاد رو مینویسیم */}
//         <Route path="/" component={HomePage} exact />
//         {/* کلمه اگزکت میگه که اگه دقیقا همین اسلشه توی پث بود بیا و این هوم پیج رو نشون بده. در نبودش چون دوتا پیج دیگه هم تو ادرسشون اسلش دارن اونارم میاره */}
        
//         <Route path="/about" component={AboutPage} />
//         <Route path="/courses" component={CoursePage} />
//         <Redirect from="/jasem" to="/courses" />
//         <Route path="/courses" component={ManageCoursePage} />
//         <Route  component={PageNotFound} />
//         {/* اینحا میایم به عنوان اخرین پیج یه صفحه ۴۰۴ درس میکنیم تا کسی هرچرتی نوشت نره تو این و اون */}
//       {/* توجه کنیم که اینا پث نداره واسه همین از سویج استفاده میکنیم */}
//       </Switch>
//     </>
//    )
//  }
//     export default App;
    

  

// $$$$$$$$$$این بخش مربوط به بخش بعد از روتر دام یعنی پارامز و  ریدایرکت و صفحه ۴۰۴ می باشد.
    
// /یه اپ درست میکنیم و امپورتش میکنیم توی ایندکس جی اس
import Header from "./common/Header"
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursePage from "./CoursePage";
import PageNotFound from "./PageNotFound";
import AboutPage from "./AboutPage";
import { Switch } from "react-router-dom";
// {/* این سویچ میاد میگه که در یک لحظه فقط بین یکی از این صفحاتی که تومن سویچ کن */}
import { Redirect } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";
const App =()=>{

   return(
     <>
      <Header/>
      <Switch>
        {/* میایم اینطوری از راوت استفاده میکنیم و توی بخش پث لینک پیج و توی کامپوننت اون کامپوننتی که میخایم بیاد رو مینویسیم */}
        <Route path="/" component={HomePage} exact />
        {/* کلمه اگزکت میگه که اگه دقیقا همین اسلشه توی پث بود بیا و این هوم پیج رو نشون بده. در نبودش چون دوتا پیج دیگه هم تو ادرسشون اسلش دارن اونارم میاره */}
        
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Redirect from="/jasem" to="/courses" />

        {/* بخش اسلاگ */}
        {/* اینجا اومدیم یه راوت ساختیم و گفتیم اگه توی ادرس بار مرورگر دیدی نوشته بود کورس بیا و کامپوننت منیج کورس پیج رو بیار. در این صورت ما روی هر کدوم از عناصر جدول بخش اسلاگ کلیک کنیم . چون توی ادرس بار یه کورس هم هستش مارو مچ میکنه با این کورسی که اینجا هست و پیج منیج کورس پیجو میاره واسمون */}
        {/* <Route path="/course" component={ManageCoursePage}/> */}

          {/* حالا میایم یه کالن میذاریم و کلمه اسلاگ رو مینویسیم. در اینجا ما اسلاگ رو به عنوان پارامز مشخص کردیم. حالا اگه بریم و توی منیج کورس پیج ما عبارت 
          props.match.params.slug 
          رو بنویسیم میاد و برامون از ابجکت متچ قسمت پارامز ، اسلاگ رو میخونه . اسلاگ ما اونجا همون اسلاگیه که ما اینجا پاسش دادیم به پث. در واقع میاد و اون چیزی رو میاره میذاره تو ابجکت پارامز که ما اینجا داریم بعد کالن کورس مینویسیم. واسه همین خاطر برای دسترسی بهش باید از طریق 
          obj.keyName
          بریم و چون اینجا مثلا نوشتیم اسلاگ اونجا کی ما میشه اسلاگ و عبارتی که جلوشه هم میشه ولیویی که هربار به اسلاگ داده میشه از طریقی که قبلا یاد گرفتیم بهش دسترسی پیدا میکنیم. در واقع چیزی که ما مینوسیم اینجا جلوی کالن نگهدارنده همون پارامز ماست. هالا پارمز ما چیه؟‌همون چیزیه که بعد کورس میاد. پس چیزی که ما اینجا مینویسیم داخل ابجکت پارامز میشه کی و ولیوش میشه همون چیزی که بعد کورس میاد توی ادرس براوزر که اونم چی تعیین میکنه؟ همون لینکی که اونجا داخل کورس پیج برای ستون اسلاگ نوشتیم */}
          
          <Route path="/course/:slug" component={ManageCoursePage}/>
        <Route path="/courses" component={ManageCoursePage} />
        <Route  component={PageNotFound} />
        {/* اینحا میایم به عنوان اخرین پیج یه صفحه ۴۰۴ درس میکنیم تا کسی هرچرتی نوشت نره تو این و اون */}
      {/* توجه کنیم که اینا پث نداره واسه همین از سویج استفاده میکنیم */}
      </Switch>
    </>
   )
 }
    export default App;
    

  


