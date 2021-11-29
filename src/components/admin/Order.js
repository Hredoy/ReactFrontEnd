import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link,useHistory } from 'react-router-dom';
import {getAllOrderAPI,OrderActions,ChangeOrderStatus,SearchOrderByIdAPI} from "../../api";
const AdminOrder = () => {
    const [orders,setOrders] = useState([]);
    let history = useHistory();
    function ApproveOrder(e,id)
    {
         e.preventDefault();
        const formdata = new FormData;
        formdata.append("action_type","approve");
        formdata.append("order_id",id);
        OrderActions(formdata).then((res) =>{
            // console.log(res);
            history.go('/admin/order');
        })
    }
    function DeclineOrder(e,id)
    {
         e.preventDefault();
        const formdata = new FormData;
        formdata.append("action_type","reject");
        formdata.append("order_id",id);
        OrderActions(formdata).then((res) =>{
            // console.log(res);
            history.go('/admin/order');
        })
    }
    function ChangeStatus(e,id,status)
    {
         e.preventDefault();
        const formdata = new FormData;
        formdata.append("action_type",status);
        formdata.append("order_id",id);
        ChangeOrderStatus(formdata).then((res) =>{
            // console.log(res);
            history.go('/admin/order');
        })
    }
    const [searchText, setSearchText] = useState('')
    const searchWidth = "100%";
    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key=== 'Enter') {
            if(searchText === undefined || searchText === "")
            {
                getOrderss();
            }else{
                SearchOrderByIdAPI(searchText).then((res) =>{
                    setOrders(res);
                });
            }
        }
    }
  useEffect (()=>{
        getOrderss();
        
    },[]);
    const getOrderss = async () =>{   
       getAllOrderAPI().then((us) =>{
            setOrders(us);
        });
    }  
    return (
        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h3 className="font-bold pl-2">Orders</h3>
                </div>
            </div>
            <div>
                <input 
                style={{width:searchWidth}} 
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed} 
                type="text" 
                name="name" 
                placeholder="Search..."
                class="py-2 border-b-2 border-gray-600 outline-none focus:border-green-400" />
            </div>
            <div className="overflow-x-scroll">
                <table className="w-full border-collapse border border-green-800 text-center">
                    <thead>
                        <tr className="bg-green-300 text-white">
                            <th className="border border-green-600">#</th>
                            <th className="border border-green-600">STKID</th>

                            <th className="border border-green-600">Customer Name</th>
                            <th className="border border-green-600">Customer Phone</th>
                            <th className="border border-green-600">Customer Address</th>
                            <th className="border border-green-600">Product Name</th>
                            <th className="border border-green-600">Qty</th>
                            <th className="border border-green-600">Price</th>
                            <th className="border border-green-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {orders.map((order, index)=>(
                            <tr>
                                <td className="border border-green-600">{index+1}</td>
                                <td className="border border-green-600">{order.stkId}</td>
                                <td className="border border-green-600">{order.orderName}</td>
                                <td className="border border-green-600">{order.phone}</td>
                                <td className="border border-green-600">{order.address}</td>
                                <td className="border border-green-600">{order.name}</td>
                                <td className="border border-green-600">{order.orderQuantity}</td>
                                <td className="border border-green-600">{order.price * order.orderQuantity}</td>
                                <td className="border border-green-600">{
                                        (()=>{
                                            if(order.is_active_status === 0)
                                            {
                                                return (
                                                    <div>
                                                        <Link 
                                                        className="py-1 text-sm text-white bg-green-600 rounded-full block mb-2"
                                                        onClick={(event)=> ApproveOrder(event, order.orderId)}
                                                        >APPROVE</Link>
                                                        <Link 
                                                        to={"/admin/viewchanges/"+order.id+"/"+order.orderId}
                                                        className="py-1 text-sm text-white bg-blue-600 rounded-full block mb-2"
                                                        
                                                        >Changes Log</Link>
                                                        <Link
                                                        onClick={(event)=> DeclineOrder(event, order.orderId)}
                                                        className="block py-1 text-sm text-white bg-red-600 rounded-full">
                                                            REJECT</Link>
                                                    </div>
                                                );
                                            }else if(order.is_active_status === 1)
                                            {
                                                if(order.status=== 0){
                                                    return (
                                                        <div>
                                                            <Link 
                                                            className="py-1 text-sm text-white bg-green-600 rounded-full block mb-2"
                                                            onClick={(event)=> ChangeStatus(event, order.orderId,"Processing")}
                                                            >Set As Processing</Link>
                                                            
                                                        </div>
                                                    );

                                                }else if(order.status === 1){
                                                    return (
                                                        <div>
                                                            <Link 
                                                            className="py-1 text-sm text-white bg-green-600 rounded-full block mb-2"
                                                            onClick={(event)=> ChangeStatus(event, order.orderId,"Shipped")}
                                                            >Set As Shipped</Link>
                                                            
                                                        </div>
                                                    );

                                                }else if(order.status === 2)
                                                {
                                                    return (
                                                        <div>
                                                            <Link 
                                                            className="py-1 text-sm text-white bg-green-600 rounded-full block mb-2"
                                                            onClick={(event)=> ChangeStatus(event, order.orderId,"delivered")}
                                                            >Set As Delivered</Link>
                                                            
                                                        </div>
                                                    );

                                                }
                                            }
                                        })()  
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrder;