import React from 'react';
import {NavLink,useHistory} from "react-router-dom";
import {LogOutAPI} from '../../api';

export default function Sidebar() {
  
     let history = useHistory();
    function LogOut(e)
    {
         e.preventDefault();
        LogOutAPI().then((res) =>{
        localStorage.clear();
        
        history.push("/administrator/login");
        history.go("/administrator/login");
        })
    }
    return (
        <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li className="mr-3 flex-1">
                        
                        <NavLink to="/admin/dashboard"  activeClassName="border-blue-600 border-b-2"  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white">
                            <i className="fas fa-tachometer-alt pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Dashboard</span>
                        </NavLink>
                             
                        
                    </li>
                    <li className="mr-3 flex-1">
                        <NavLink to="/admin/products" activeClassName="border-blue-600 border-b-2"  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white">
                            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Products</span>
                        </NavLink>
                    </li>
                    <li className="mr-3 flex-1">
                        <NavLink to="/admin/order" activeClassName="border-blue-600  border-b-2"  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white">
                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Orders</span>
                        </NavLink>
                    </li>
                    
                    <li className="mr-3 flex-1">
                        <NavLink to="/administrator/login"  onClick={LogOut} activeClassName="border-blue-600 border-b-2"  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white">
                            <i className="fa fa-sign-out pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 