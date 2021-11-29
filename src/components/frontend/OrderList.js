/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState  } from 'react'
import {useHistory,Link} from "react-router-dom"
import { RadioGroup } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/outline'
import Pagination from "react-js-pagination";
import {getCustomer,getOrders,SortOrderAPI} from "../../api/";




export default function OrderPage() 
{
    
const [orders,setOrders] = useState([]);
const [UserName,setUserName] = useState('');
const [UserId,setUserId] = useState('');
const [UserEmail,setUserEmail] = useState('');

const is_userLoggedIn = localStorage.getItem('user');

useEffect (()=>{
    
    getCustomer().then((us) =>{
        setUserId(us.id);
        setUserName(us.name);
        setUserEmail(us.email);
        const formdata = new FormData;
        formdata.append("user_id",us.id);
        getOrders(formdata).then((us) =>{
            setOrders(us);
            
        });
        
    });
    
    },[]);
    const find = (event) => {
    event.preventDefault();
    if (event.target.value === "Approved") {
        const formdata = new FormData;
        formdata.append("user_id",UserId);
      SortOrderAPI(formdata,"is_active_status",1).then((res)=>{
        console.log(res);
        setOrders(res);
      })
    } 
    else if (event.target.value === "Rejected") {
        const formdata = new FormData;
        formdata.append("user_id",UserId);
      SortOrderAPI(formdata,"is_active_status",2).then((res)=>{
        setOrders(res);
      })
    }
    else if (event.target.value === "Processing") {
        const formdata = new FormData;
        formdata.append("user_id",UserId);
      SortOrderAPI(formdata,"status",1).then((res)=>{
        setOrders(res);
      })
    }
    else if (event.target.value === "Shipped") {
        const formdata = new FormData;
        formdata.append("user_id",UserId);
      SortOrderAPI(formdata,"status",2).then((res)=>{
        setOrders(res);
      })
    }
    else if (event.target.value === "Delivered") {
        const formdata = new FormData;
        formdata.append("user_id",UserId);
      SortOrderAPI(formdata,"status",3).then((res)=>{
        setOrders(res);
      })
    }
  };
let history = useHistory();

  return (
    <div className="bg-white">
      <div className="pt-6">
            <div className="container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium">My Orders</h3>
            <div className="flex flex-col lg:flex-row mt-8">
                
                <div className="w-full mb-8 ">
                    <div className="">
                        <div className="border rounded-md w-full px-4 py-3">
                            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                <select
                                onChange={find}
                                >
                                    <option value="">SORT</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </div>
                            <div className="overflow-x-scroll">
                                <table className="border table-auto w-full text-center">
                                    <thead>
                                    <tr className="bg-gray-50">
                                        <th className="w-1/9">#</th>
                                        <th className="w-2/9">Order ID</th>
                                        <th className="w-3/9">Product Name</th>
                                        <th>Product Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Admin Approval Status</th>
                                        <th>Progress Status</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order, index)=>(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{order.stkId}</td>
                                            <td>{order.name}</td>
                                            <td>
                                                 <img style={{ width:100 }} src={"http://localhost:8000/files/"+order.image} />
                                            </td>
                                            <td>৳{order.price*order.orderQuantity}</td>
                                            <td>{order.orderQuantity}</td>
                                            <td>
                                                 {
                                                    (() => {
                                                        if(order.is_active_status === 0){
                                                            return (
                                                                <div>
                                                                <span
                                                                className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                                                                >
                                                                Pending
                                                                </span>
                                                                
                                                                </div>
                                                            )
                                                        }else if(order.is_active_status === 1){
                                                            return (
                                                                <div>
                                                                <span
                                                                className="px-4 py-1 text-sm text-white bg-green-600 rounded-full"
                                                                >
                                                                Approved
                                                                </span>
                                                                
                                                                </div>
                                                            )
                                                        }else if(order.is_active_status === 2)
                                                        {
                                                            return (
                                                                <div>
                                                                <span
                                                                className="px-4 py-1 text-sm text-white bg-red-600 rounded-full"
                                                                >
                                                                Rejected
                                                                </span>
                                                                
                                                                </div>
                                                            )
                                                        }
                                                            
                                                    })()  
                                                }
                                            </td>
                                            <td>
                                                 {
                                                    (() => {
                                                        if(order.status === 1){
                                                            return (
                                                                <div>
                                                               <span
                                                                className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                                                                >
                                                                Processing
                                                                </span>
                                                                </div>
                                                            )
                                                        }
                                                        else if(order.status === 2){
                                                            return (
                                                                <div>
                                                               <span
                                                                className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                                                                >
                                                                Shipped
                                                                </span>
                                                                </div>
                                                            )
                                                        }
                                                        else if(order.status === 3){
                                                            return (
                                                                <div>
                                                               <span
                                                                className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                                                                >
                                                                Delivered
                                                                </span>
                                                                </div>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <div>
                                                               <span
                                                                className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                                                                >
                                                                -
                                                                </span>
                                                                </div>
                                                            )
                                                        }
                                                            
                                                    })()  
                                                }
                                            </td>
                                            <td>
                                                 {
                                                    (() => {
                                                        if(order.is_active_status === 0){
                                                            return (
                                                                <div>
                                                                <Link
                                                                to={"editOrder/"+order.orderId} 
                                                                className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                                                                >
                                                                Edit
                                                                </Link>
                                                                <br/>
                                                                </div>
                                                            )
                                                        }
                                                            
                                                    })()  
                                                }
                                                <Link 
                                                to={"/viewchanges/"+order.id+"/"+order.orderId }
                                                className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                                                >
                                                Track
                                                </Link>
                                            </td>
                                        </tr>
                                          ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
