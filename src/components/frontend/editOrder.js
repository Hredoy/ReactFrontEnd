/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState  } from 'react'
import {useParams,useHistory} from "react-router-dom"
import {editOrders,EditOrderAPI} from "../../api/";




export default function EditOrder() 
{
const parms = useParams();

const [orders,setOrders] = useState([]);
const [changeOrder, setChangeOrder] = useState({
    name: orders.orderName,
    phone: orders.phone,
    address: orders.address,
})
const is_userLoggedIn = localStorage.getItem('user');
const id = parms.id;
const history = useHistory();
useEffect (()=>{
    
        editOrders(id).then((us) =>{
            
            if(us.status === 200){
                setOrders(us.data);
                history.push("/order");
            }else{
                history.push("/order");
            }
        });
    
    },[]);
    const handleSubmit =async (e) => {
    e.preventDefault();
   const formData = new FormData();
   formData.append('id',id);
   formData.append('name',changeOrder.name);
   formData.append('phone',changeOrder.phone);
   formData.append('address',changeOrder.address);
    console.log(...formData);

    EditOrderAPI(formData).then((res) =>{
    console.log(res);
    //   history.push("/Order");
    })
    //  dispatch(loginAction(user));
    
  };
  return (
    <div className="bg-white">
      <div className="pt-6">
            <div className="container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium">Edit Orders</h3>
            <div className="flex flex-col lg:flex-row mt-8">
                
                <div className="w-full mb-8 ">
                    <div className="">
                        <div className="border rounded-md w-full px-4 py-3">
                            <h3>{orders.name}</h3>
                             <img style={{ width:100 }} src={"http://localhost:8000/files/"+orders.image} />
                            <form
                            autoComplete="off"
                            onSubmit={handleSubmit}
                            >
                                <label>YOUR NAME</label>
                                <input 
                                    type="text" 
                                    defaultValue={orders.orderName} 
                                    onChange={(e) => setChangeOrder({ ...changeOrder, name: e.target.value })}
                                    className="
                                        px-2
                                        py-1
                                        placeholder-gray-400
                                        text-gray-600
                                        relative
                                        bg-white bg-white
                                        rounded
                                        text-sm
                                        border 
                                        outline-none
                                        focus:outline-none focus:ring
                                        w-full
                                        "
                                />
                                <label>ADDRESS</label>
                                <textarea 
                                defaultValue={orders.address}
                                onChange={(e) => setChangeOrder({ ...changeOrder, address: e.target.value })}
                                className="
                                        form-textarea 
                                        mt-1 
                                        block 
                                        w-full
                                        resize-none
                                        "
                                row="3"
                                 />
                                <label>Phone</label>
                                <input 
                                type="number" 
                                defaultValue={orders.phone}
                                onChange={(e) => setChangeOrder({ ...changeOrder, phone: e.target.value })} 
                                className="
                                        px-2
                                        py-1
                                        placeholder-gray-400
                                        text-gray-600
                                        relative
                                        bg-white bg-white
                                        rounded
                                        text-sm
                                        border
                                        outline-none
                                        focus:outline-none focus:ring
                                        w-full
                                        mb-2
                                        "
                                />
                                <button type="submit" className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <span>UPDATE</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
