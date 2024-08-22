import React from 'react';
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className=' mx-auto '>
            <div className="navbar bg-slate-300 rounded-md shadow-md">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl font-bold">Knowledge Cafe</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <img src={profile} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;