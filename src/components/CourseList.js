import { Link } from "react-router-dom"
export default function CourseList({courses}){
    return(
        <>
            
        <table className="table">
                <thead>
                    <tr>
                        <th>Author Id</th>
                        <th>slug</th>
                        <th>Category</th>
                        <th>Slug</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => {
                        return (
                            <tr key={course.id}>
                                <td>{course.authorId}</td>
                                <td>  <Link to={`/course/${course.slug}`} >  {course.title}</Link></td>  
                                <td>{course.category}</td>
                                <td>{course.slug}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                        </table>
                        
                        
        </>
    )
}