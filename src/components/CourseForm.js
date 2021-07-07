// function CourseForm({course , onTitle}) {
    // دیگه بعد نوشتن فانکشن جدیده نمیخاد از ان تایتل استفاده کنیم
/*
function CourseForm({course , onChange}) {
    // به کورس فرم کورس رو میدیم که این کورس از منیج کورس پیج پاس داده شده بهش و حاوی یه ابجکته
    
    return (
        <form>
        <div className="form-group">
        <label htmlFor="title">Title</label>
                <div className="field">
                <input
                        id="title"
                        type="text"
                        name="title"
                        className="form-control"
                        // اینجا به ولیو یه چیز هاردکد بدیم اصلا نمیتونیم چیزی بهش بدیم یا اضافه کنیم یا دلیت کنیم واسه همین مجبوریم فانکشن بدیم تا تغییرش بده چون همیشه با ولیوش مچه.
                        // value=""
                        
                        // / میایم و تایتلی که بصورت دیفالت خودش استرینگ خالیه رو بهش پاس میدیم وداخل منیج کورس با استفاده از یوز استیت اونو عوض میکنیم و تا دفعه مقدار جدیدی بگیره
                        value={course.title}
                        
                        // / فانکشن ان تایتل رو از پیج منیج کورس پیج میگیریم و میذاریم اینجو 
                        onChange={onChange}
                        
                        />
                        </div>
                        </div>

                        <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <div className="field">
                        <select
                        id="author"
                        name="authorId"
                        // # value=""
                        value={course.authorId}
                        onChange={onChange}
                        className="form-control"
                        >
                        <option value="" />
                        <option value="1">Jamshid</option>
                        <option value="2">Jafar</option>
                        </select>
                        </div>
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <div className="field">
                        <input
                        type="text"
                        id="category"
                        name="category"
                        className="form-control"
                        // # value=""
                        
                        value={course.category}
                        onChange={onChange}
                        
                        />
                        </div>
                        </div>
                        
                        <input type="submit" value="Save" className="btn btn-primary" />
                        </form>
                        );
                    }
                    
                    export default CourseForm;

                    */




// $ این قسمت واسه بخش اضافه کردن فانکشن ان چینجه و بعد از این ما میخوایم یه کامپوننت بسازیم که بیاد و اینپوت هامونو بیاره تا مجبور نباشیم هی داپلیکیت کنیم

import TextInput from "./TextInput";
// اول کامپوننتی که ساختیم رو ایمپورت میکنیم بعد اددش میکنیم جای دیو های تکست اینپوتمون


function CourseForm({course , onChange}) {
    return (
        <form>
        <TextInput value={course.title} name="title" label="Title" onChange={onChange}/>

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                <select
                id="author"
                name="authorId"
                // # value=""
                value={course.authorId || ""}
                //  /این قسمت واسه اینه که ما ولیوی سلکت رو نمیتونیم نال بذاریم حالا میایم یه علامت اور میذاریم و بهش استرینگ خالی میدیم. حالا هروقت این نال بود میاد دومی رو میخونه و اگه نال نبود قسمت اولش میاد همون اولی رو میخونه


                onChange={onChange}
                className="form-control"
                >
                <option value="" />
                <option value="1">Jamshid</option>
                <option value="2">Jafar</option>
                </select>
                </div>
            </div>
                        
                       <TextInput value={course.category} name="category" label="Category" onChange={onChange}/>


                        <input type="submit" value="Save" className="btn btn-primary" />
                        </form>
                        );
                    }
                    export default CourseForm;
