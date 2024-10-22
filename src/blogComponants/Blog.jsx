
// import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";
// import { GoBookmark } from "react-icons/go";

const Blog = ({blog, handleAddToBookMark,handleReadingTime}) => {
    const {id, title,cover,author_img,author,posted_date,reading_time, hashtags} = blog



 
    return (
        <div className="py-4 border-b-2">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex pt-2">
                    <img className="w-12" src={author_img} alt="" />
                    <div className=" flex flex-col justify-center pl-3">
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center ">
                    <p>{reading_time} min read </p><a onClick={()=>handleAddToBookMark(blog)}>< FaRegBookmark/>
                        </a>
                </div>
            </div>
            <h2 className="font-semibold text-3xl pt-3">{title}</h2>
            {
                hashtags.map(item=> <p className="flex pt-3">#{item}</p>)
            }
            <p className="text-blue-800 underline cursor-pointer" href="#" onClick={()=> handleReadingTime(id, reading_time)}>Mark as read</p>

            
            
        </div>
    );
};
// Blog.prototype = {
//     blog: PropTypes.object.isRequired,
//     handleAddToBookMark: PropTypes.func


// }


export default Blog;