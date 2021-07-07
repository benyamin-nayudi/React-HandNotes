//$ بعد از ساخت اکشن میایم و استورمونو درست میکنیم و اونو ایمپورت میکنیم توی

import { EventEmitter } from "events";
// ما نود رو نصب داریم و ایونتس تو نود هست پس نیازی به نصب ایونتس نیست

import Dispatcher from "../appDispatcher";

import actionTypes from "../actions/actionTypes";

/*
$ توضیحات در مورد استور
توی هر استور ما سه تا فانکشن استفاده میکنیم

 / addChangeListener (wraps on)
/ به فانشکن های دیگه اجازه میده که بیان اینجا رجیستر کنن که متوجه بشن کی تغییرات اتفاق میوفته


& removeChangeListener (wrap removeListener)
& فانکشنی که قبلا سابسکرایب شده رو انرجیستر میکنه


* emitChange (wrap emit)
اطلاع میده

private Storage
پرایویت استور یعنی اینکه ما میخوایم یه سری استور غیر از اونایی که دیفالت برای استور تعریف شدن و توسط خود نود ایجاد شدن مثل اد چنج لیستنر و امیت و اینا تعریف کنیم

*/

const CHANGE_EVENT = "CHANGE"
let  _courses =[]


class CouserStore extends EventEmitter{

    addChangeListener(callback){
        this.on(CHANGE_EVENT , callback)
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT , callback)
    }

    emitChange(){
        this.emit(CHANGE_EVENT)
    }

    //private store

    getCourses(){
        return _courses;
    }

    getCoursesBySlug(slug){
        return _courses.find(course=> course.slug === slug)
    }
}

//*  هم میونیم خودشو اکسپورت کنیم هم یه کپی بسازیم که ما اینجا یه کپی اول میسازیم
const store = new CouserStore();


//* اینجا میخایم اکشن هامونو رجیستر کنیم به این صورت
Dispatcher.register((action)=>{
    switch(action.actionTypes){
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course)
            store.emitChange();
            break;
        default:
        // return nothing
    }
})

export default store

//$ بعد از این بخش میریم داخل منیج کورس پیج و تغییرات لازم رو میدیم