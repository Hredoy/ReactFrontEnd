import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
// import axios from "axios";
import {loadProductsAPI,DeleteProductsAPI,SearchProductsAPI} from "../api/index";
//  const token = localStorage.getItem('token');
const Product = () => {
    // let history = useHistory();
    const [product,setProduct] = useState([]);

    useEffect(()=>{
       loadProducts();
    },[]);
    const searchWidth = "100%";
    const loadProducts = async () =>{   
       loadProductsAPI().then((res) =>{
           
            setProduct(res);
        });
    }

    const [searchText, setSearchText] = useState('')

    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key=== 'Enter') {
            if(searchText === undefined || searchText === "")
            {
                loadProducts();
            }else{
                SearchProductsAPI(searchText).then((res) =>{
                    setProduct(res);
                });
            }
        }
    }
    async function deleteProduct(id)
    {
        DeleteProductsAPI(id).then((res) =>{
           loadProducts();
        });
    }
    return (
         <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h3 className="font-bold pl-2">Products</h3>
                </div>
            </div>

            <div className="flex flex-wrap">
                  <div className="w-full md:w-1/1 xl:w-1/1 p-6">
                      <div className="grid grid-cols-12 md:grid-rows-1 ">
                          <div className="col-span-10"></div>
                          <div className="col-span-2">
                              <Link to="product/add" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Add Products
                                </Link>
                            </div>
                      </div>
                    </div>
                <div className="w-full md:w-1/1 xl:w-1/1 p-6">
                    
                    <div className="bg-gradient-to-b  border-b-4 border-red-500 rounded-lg shadow-xl p-5"> 
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <div>
                                <input style={{width:searchWidth}} onChange={handleInput}
          onKeyPress={handleEnterKeyPressed} type="text" name="name" placeholder="Search..."
                                    class="py-2 border-b-2 border-gray-600 outline-none focus:border-green-400" />
                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                       Product Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quentity
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                
                                {product.map((product, index)=>(
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img 
                                            style={{ width:100 }} 
                                            alt={product.name}
                                            src={"http://localhost:8000/files/"+product.image} />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {product.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                            
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{product.price}</div>
                                        <div className="text-sm text-gray-500"></div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {product.qty}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link to={"/admin/product/edit/"+product.id}  className="text-indigo-600 hover:text-indigo-900">EDIT</Link>
                                        <br />
                                        <button type="button"  onClick={()=>deleteProduct(product.id)} className="text-red-600 hover:text-red-900">DELETE</button>
                                       
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
    );
};

export default Product;