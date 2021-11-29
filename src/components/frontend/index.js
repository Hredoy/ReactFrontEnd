/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState  } from 'react'
import {Link} from "react-router-dom"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Pagination from "react-js-pagination";
import {loadProductsAPI,SearchProductsAPI,SortProductsAPI} from "../../api/";



export default function HomePage() {
  const [products,setProduct] = useState([]);
  const [sort,setSorting] = useState('');
    useEffect(()=>{
       loadProducts();
    
    },[]);
     const find = (event) => {
    event.preventDefault();
    if (event.target.value === "higher") {
      SortProductsAPI("DESC").then((res)=>{
        console.log(res);
        setProduct(res);
      })
    } else if (event.target.value === "lower") {
      SortProductsAPI("ASC").then((res)=>{
        setProduct(res);
      })
    }
  };
    async function sortProduct(data){   
       SortProductsAPI(data).then((res) =>{
            setProduct(res);
        });
    }
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
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full bg-gray-100">
        <body className="h-full">
        ```
      */}
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Home</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="relative"> 
              <input 
              type="text" 
              style={{ width: 100+'%' }}
              onChange={handleInput}
              onKeyPress={handleEnterKeyPressed}
              className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" 
              placeholder="Search anything..." />
              <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
      
          </div>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <select
            onChange={find}
            >
                <option value="">SORT</option>
                <option value="higher">HIGH TO LOW PRICE</option>
                <option value="lower">LOW TO HIGH PRICE</option>
            </select>
          </div>
            <div className="px-4 py-6 sm:px-0">
                <div className="bg-white">
                  <div className="max-w-2xl mx-auto px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"></h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {products.map((product) => (
                        <Link to={"product/"+product.id}>

                        <div key={product.id} className="group relative">
                          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                              src={"http://localhost:8000/files/"+product.image}
                              alt={product.title}
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                            { 
                            (()=>{
                                if(product.qty === "0"){

                                  return (
                                    <span style={{     position: "absolute",top: 10+"%",right: 0 }} className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">OUT OF STOCK</span>
                                  )
                                }
                              })()
                            }
                          </div>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3 className="text-sm text-gray-700">
                                <a href={product.href}>
                                  <span aria-hidden="true" className="absolute inset-0" />
                                  {product.name}
                                </a>
                              </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">৳{product.price}</p>
                          </div>
                        </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
