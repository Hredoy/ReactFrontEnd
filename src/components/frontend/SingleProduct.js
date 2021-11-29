/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState  } from 'react'
import {Link,useParams} from "react-router-dom"
import { RadioGroup } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/outline'
import Pagination from "react-js-pagination";
import {getProductByIDAPI} from "../../api/";



export default function SingleProduct() 
{
const parms = useParams();
const id = parms.id;
const [data, setData] =useState([]);
const [name,setName] = useState('');
const [image,setImage] = useState('');
const [description,setDescription] = useState('');
const [price,setPrice] = useState('');
const [qty,setQty] = useState('');
const is_userLoggedIn = localStorage.getItem('user');
useEffect (()=>{
    getProductByIDAPI(id).then((res) =>{
        setData(res);
        setName(res.name);
        setImage(res.image);
        setDescription(res.description);
        setPrice(res.price);
        setQty(res.qty);
    });

    },[])
  return (
    <div className="bg-white">
      <div className="pt-6">

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4  rounded-lg overflow-hidden lg:block">
            <img
              src={"http://localhost:8000/files/"+image}
              alt={name}
              className="w-full h-full object-center m-auto object-cover"
            />
          </div>
          
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">৳{price}</p>

            

            <form className="mt-10">
             { 
                            (()=>{
                                if(qty === "0"){

                                  return (
                                    <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">OUT OF STOCK</span>
                                  )
                                }else{
                                  return (
                                    <div>
                                    {
                                      (() => {
                                          if (is_userLoggedIn === "1") {
                                            return (<Link to={"../placeorder/"+id}
                                              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                              BUY NOW
                                            </Link>
                                            )
                                          } else {

                                            return (
                                              <Link to="../login"
                                                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              >
                                                BUY NOW
                                              </Link>
                                            );
                                          }
                                        })()
                                    }
                                    </div>
                                  )
                                }
                              })()
                            }
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="text-1xl font-extrabold tracking-tight text-gray-900 sm:text-1xl">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
