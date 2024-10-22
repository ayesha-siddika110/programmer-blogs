import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div>
            <div className="p-4 bg-gray-300 m-4 rounded-xl flex justify-between">
                <p>reading time: {readingTime}</p>

            <p className="">Bookmarks : {bookmarks.length}</p>
            </div>

            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;