import React from 'react';
import './Blog.css';
import { FaBookmark } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;

    return (
        <div className='mt-5 space-y-5 shadow-xl p-2'>
            <img className='rounded-md' src={cover} alt={title} />
            <div className="flex md:space-x-56 items-center">
                <div className='md:flex space-x-3'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold primary-color">{author}</h3>
                        <p className='light-color '>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <p className='light-color'>{reading_time} min read</p>
                        </div>
                        <div>
                            <button
                                className='light-color'
                                onClick={() => handleAddToBookmark(blog)}>
                                <FaBookmark />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl primary-color font-semibold">{title}</h2>
            <p className='items-start'>
                {
                    hashtags.map((hash, index) => <span
                        key={index}
                        className='font-medium text-2xl light-color'>
                        <a href="">
                            #{hash} &nbsp;
                        </a>
                    </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className="btn btn-link text-2xl font-semibold">Mark as read</button>
        </div>
    );
};

export default Blog;