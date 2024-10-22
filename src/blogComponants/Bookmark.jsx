

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 p-2 rounded-xl m-4">
            <h3>{title}</h3>


            
        </div>
    );
};

export default Bookmark;