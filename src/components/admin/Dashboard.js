import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import {CountOrderStatusAPI,CountUser,CountProduct} from "../../api";
const Dashboard = () => {
    const [newOrder, setNewOrder] = useState("");
    const [processingStatus, setProcessingStatus] = useState("");
    const [ShippingStatus, setShippingStatus] = useState("");
    const [Deliveries, setDeliveries] = useState("");
    const [CustomerCount, setCustomerCount] = useState("");
    const [ProductCount, setProductCount] = useState("");
 useEffect(()=>{
       CountOrderStatusAPI("is_active_status",0).then((res) =>{
            setNewOrder(res.data);
        });
       CountOrderStatusAPI("status",1).then((res) =>{
            setProcessingStatus(res.data);
        });
       CountOrderStatusAPI("status",2).then((res) =>{
            setShippingStatus(res.data);
        });
       CountOrderStatusAPI("status",3).then((res) =>{
            setDeliveries(res.data);
        });
       CountUser().then((res) =>{
            setCustomerCount(res.data);
        });
       CountProduct().then((res) =>{
            setProductCount(res.data);
        });
    },[]);
    return (
        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h3 className="font-bold pl-2">Dashboard</h3>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                   
                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">New Order</h5>
                                <h3 className="font-bold text-3xl">{newOrder}<span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                   
                    <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">Total Users</h5>
                                <h3 className="font-bold text-3xl">{CustomerCount} <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                   
                    <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">Products</h5>
                                <h3 className="font-bold text-3xl">{ProductCount} <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                   
                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">On Processing</h5>
                                <h3 className="font-bold text-3xl">{processingStatus}<span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                   
                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">On Shipping</h5>
                                <h3 className="font-bold text-3xl">{ShippingStatus}<span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                   
                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">Delivered</h5>
                                <h3 className="font-bold text-3xl">{Deliveries}<span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Dashboard;