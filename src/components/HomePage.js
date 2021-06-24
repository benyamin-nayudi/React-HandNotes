//اینجا فانکشن بیس کامپوننت ها اجرا میشه و بهترین ففانکشن ارور فانکشنه

// const HomePage = ()=>{
//     const btnn= 'btn-warning'
//     const arr= [1,2,3]
//     return (
//       <div  >
//       <h1 className={btnn}>the react crash course</h1>
//       <p className="jumbotron" >hello React</p>
//       <ul>
//       {arr.map((num,i)=> <li key={i}>{num}</li>)}
//       </ul>
//        {/* اینجا از دوتا کرلی بریسز استفاده میکنیم چون اولیش واسه اینه که ما داریم جی اس مینویسیم و دومیش واسه ابجکت بودن خود استایله */}
       
//         <p style={{color:"red"}}> beny</p>
//         {/* اینجا میایم یه لینک به صفحه دیگه میسازیم و اچ رفش رو همونی میذاریم که توی اپپ جی اس میذاریم */}
//         <a className="btn-primary" href="/about">About Us</a>
//         </div>
//        );
// }

// export default HomePage


//+++++++++++ اینجا بخش دومه که استفاده از پراپس توش اعمال شده


const HomePage = (props)=>{
    const btnn= 'btn-warning'
    const arr= [1,2,3]
    return (
      <div  >
      <h1 className={btnn}>the react crash course</h1>

        {/*در اینجا ما یک داده به صورت اتریبیوت از پرنت گرفتیم و در قالب پراپس اوردیم برای چایلد */}
        <h2 className="bg-primary"> {props.username}</h2>
        {/* همچنین میتونیم داده هایی مثل ارری هم منتقل کنیم */}
        <p>your last password charatcter is {props.pass[2]}</p>



      <p className="jumbotron" >hello React</p>
      <ul>
      {arr.map((num,i)=> <li key={i}>{num}</li>)}
      </ul>
       {/* اینجا از دوتا کرلی بریسز استفاده میکنیم چون اولیش واسه اینه که ما داریم جی اس مینویسیم و دومیش واسه ابجکت بودن خود استایله */}
       
        <p style={{color:"red"}}> beny</p>
        {/* اینجا میایم یه لینک به صفحه دیگه میسازیم و اچ رفش رو همونی میذاریم که توی اپپ جی اس میذاریم */}
        <a className="btn-primary" href="/about">About Us</a>
        </div>
       );
}

export default HomePage