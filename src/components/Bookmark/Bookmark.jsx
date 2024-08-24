import React from 'react';
import './Bookmark.css'
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="title-name mx-auto mt-4">
            <h3 className="text-2xl 
            w-[311px] font-semibold p-3
            text-[#111111]">{title}</h3>
        </div>
    );
};

export default Bookmark;