
// $ 
import TextInput from "./TextInput";

// & onsubmit from manageCoursePage
function CourseForm({course , onChange , onSubmit}) {

return (

    <form onSubmit={onSubmit}>
    {/* سابمیت رو به فرم میدیم تا اگه روی اینتر هم کلیک شد دکمه سابمیت ما عمل کنه در حالی که اگه به باتن میدادیم این عمل انجام نمیشد */}

        <TextInput value={course.title} name="title" label="Title" onChange={onChange}/>

        <div className="form-group">
            <label htmlFor="author">Author</label>
            <div className="field">
            <select
            id="author"
            name="authorId"
            value={course.authorId || ""}
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
