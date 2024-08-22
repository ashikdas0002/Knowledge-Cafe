import React from 'react';
import './Blog.css';
const Blog = ({ blog }) => {
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
                    <div className='flex'>
                        <div>
                            <p className='light-color'>{reading_time} min read</p>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl primary-color font-semibold">{title}</h2>
            <p className='items-start'>
                {
                    hashtags.map((hash, index) => <span className='font-medium text-2xl light-color'>
                        <a href="">
                            #{hash} &nbsp;
                        </a>
                    </span>)
                }
            </p>
            <button className="btn btn-link text-2xl font-semibold">Mark as read</button>
        </div>
    );
};

export default Blog;