/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState  } from 'react'
import {useParams,useHistory} from "react-router-dom"
import {getProductByIDAPI,getCustomer,placeOrderAPI} from "../../api/";



export default function OrderPage() 
{
    
const parms = useParams();
const id = parms.id;
const [data, setData] =useState([]);
const [UserName,setUserName] = useState('');
const [UserId,setUserId] = useState('');
const [UserEmail,setUserEmail] = useState('');
const [name,setName] = useState('');
const [image,setImage] = useState('');
const [description,setDescription] = useState('');
const [price,setPrice] = useState('');
const [tPrice,setTPrice] = useState('');
const [qty,setQty] = useState('');
const [count,setCount] = useState(1);
const [tcount,setTCount] = useState(1);
const [orders, setOrder] = useState({
    name: "",
    phone: "",
    address: "",
})
const is_userLoggedIn = localStorage.getItem('user');

useEffect (()=>{
     setPrice(count * tPrice);
    getProductByIDAPI(id).then((res) =>{
        let t_price  = res.price * count;
        setData(res);
        setName(res.name);
        setImage(res.image);
        setImage(res.image);
        setDescription(res.description);
        setPrice(t_price);
        setTPrice(res.price);
        setQty(res.qty);
        setOrder({ ...orders, price: res.price });
    });
    getCustomer().then((us) =>{
        setUserId(us.id);
        setUserName(us.name);
        setUserEmail(us.email);
        
    });

    },[]);
let history = useHistory();
function increment(step){
        if((count+step) > 0  && qty <= (count-1)){
        setPrice((count+1) * tPrice);
        setTCount(count+1);
        setCount(count + step);
        }
        
    
    }
function decrement(step){
        if((count+step) > 0 && qty <= (count-1) ){
        setPrice((count-1) * tPrice);
        setTCount(count-1);
        setCount(count + step);
        }
        
    
    }
const handleSubmit =async (e) => {
    e.preventDefault();
   const formData = new FormData();
   formData.append('qty',tcount);
   formData.append('product_id',id);
   formData.append('user_id',UserId);
   formData.append('name',orders.name);
   formData.append('phone',orders.phone);
   formData.append('address',orders.address);
   formData.append('stkId',  "STK"+Date.now());
    
    placeOrderAPI(formData).then((res) =>{
      history.push("/Order");
    })
    //  dispatch(loginAction(user));
    
  };
  return (
    <div className="bg-white">
      <div className="pt-6">
            <div className="container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium">Checkout</h3>
            <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-1/2 order-2">
                    
                    <form 
                    className="mt-8 lg:w-3/4"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    >
                        <div>
                            <h4 className="text-sm text-gray-500 font-medium">Payment method</h4>
                            <div className="mt-6">
                                <span className="flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none">
                                    <label className="flex items-center">
                                        <input type="radio" required checked className="form-radio h-5 w-5 text-blue-600"  
                                        />
                                        <span className="ml-2 text-sm text-gray-700">CASH ON DELIVERY</span>
                                    </label>

                                    <span className="text-gray-600 text-sm">FREE</span>
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-sm text-gray-500 font-medium">Delivery address</h4>
                            <div className="mt-6">
                                <label className="block">
                                    <input 
                                    type="text" 
                                    className="form-input mt-1 block w-full text-gray-700" 
                                    placeholder="YOUR FULL NAME" 
                                    onChange={(e) => setOrder({ ...orders, name: e.target.value })}
                                    />
                                    <input 
                                    type="hidden"
                                    value={tcount}
                                    onChange={(e) => setOrder({ ...orders, qty: e.target.value })}
                                    />
                                    <input 
                                    type="hidden"
                                    value={tPrice}
                                    onChange={(e) => setOrder({ ...orders, price: e.target.value })}
                                    />
                                    <input 
                                    type="hidden"
                                    value={UserId}
                                    onChange={(e) => setOrder({ ...orders, user_id: e.target.value })}
                                    />
                                    <input 
                                    type="hidden"
                                    value={id}
                                    onChange={(e) => setOrder({ ...orders, product_id: e.target.value })}
                                    />
                                </label>
                                <label className="block ">
                                    <textarea  
                                    className="form-input mt-1 block w-full text-gray-700" 
                                    placeholder="Address"
                                    onChange={(e) => setOrder({ ...orders, address: e.target.value })} ></textarea>
                                </label>
                                <label className="block">
                                    <input 
                                    type="number" 
                                    className="form-input mt-1 block w-full text-gray-700" 
                                    placeholder="01XXXXXXXXX" 
                                    onChange={(e) => setOrder({ ...orders, phone: e.target.value })} 
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <button className="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                <span className="mx-2">Back step</span>
                            </button>
                            <button type="submit" className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <span>Buy Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                    <div className="flex justify-center lg:justify-end">
                        <div className="border rounded-md max-w-md w-full px-4 py-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-gray-700 font-medium">Product</h3>
                                
                            </div>
                            <div className="flex justify-between mt-6">
                                <div className="flex">
                                    <img className="h-20 w-20 object-cover rounded" src={"http://localhost:8000/files/"+image} alt="" />
                                    <div className="mx-3">
                                        <h3 className="text-sm text-gray-600">{name}</h3>
                                        <div className="flex items-center mt-2">
                                            <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => increment(+1)}>
                                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </button>
                                            <span className="text-gray-700 mx-2">{count}</span>
                                            <button className="text-gray-500 focus:outline-none focus:text-gray-600"  onClick={() => decrement(-1)}>
                                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-600">৳{price}</span>
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
