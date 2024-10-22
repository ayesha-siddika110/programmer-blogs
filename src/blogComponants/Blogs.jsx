import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";



const Blogs = ({handleAddToBookMark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('./blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))

    },[])

    return (
        <div className="w-[80%] m-auto mt-7 flex">
            <div className="lg:w-2/3">
            {
                blogs.map(blog=> <Blog key={blog.id}
                     blog={blog}
                     handleAddToBookMark={handleAddToBookMark}
                     handleReadingTime={handleReadingTime}
                     ></Blog>)
            }
            

            </div>
            
            
            
        </div>
    );
};
// Blogs.prototype = {
//     handleAddToBookMark : PropTypes.func,
// }

export default Blogs;