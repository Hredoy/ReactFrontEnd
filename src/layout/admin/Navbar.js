import React from 'react';
import {Link} from "react-router-dom";
function Navbar() {
    
    return (
        <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
            <div className="flex flex-wrap items-center">
                <div className="flex flex-shrink md:w-1/2 justify-center md:justify-start text-white">
                    <Link to="#">
                        <span className="text-xl pl-2" style={{ fontSize: "2rem" }}><i className="em em-grinning"></i></span>
                    </Link>
                </div>


                <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="flex-1 md:flex-none md:mr-3">
                            
                        </li>
                        <li className="flex-1 md:flex-none md:mr-3">
                            
                        </li>
                        <li className="flex-1 md:flex-none md:mr-3">
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;