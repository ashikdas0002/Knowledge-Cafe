import React from 'react';
import './Bookmarks.css'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, read }) => {

    return (
        <div className='w-1/4 mt-5 flex flex-col items-center space-y-3 '>
            {/* spent time */}
            <div className='spent-time '>
                <h4 className='text-2xl
                text-[#6047EC] font-bold first:'>Spent time On read : {read} min </h4>
            </div>
            {/* bookmark blogs */}
            <div className='bookmarks-blogs'>
                <h4 className="text-2xl text-[#111111] font-bold p-3 text-center">
                    Bookmarked Blogs : {bookmarks.length}
                </h4>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx}
                        bookmark={bookmark} />

                    )
                }
            </div>



        </div>
    );
};

export default Bookmarks;