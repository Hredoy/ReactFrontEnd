import React, { useEffect, useState } from 'react';
import { useParams,Link,useHistory } from 'react-router-dom';
import {addProductAPI} from "../api/index";
import axios from "axios";
 const token = localStorage.getItem('token');
const AddProduct = () => {
   let history = useHistory();
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [qty,setQty] = useState('');
    
   async function storeProduct(e)
    {
         e.preventDefault();
        const formData = new FormData();
        if(name.name === undefined)
        {
            alert("Please Type Product Name");
        }else if(image.image === '' || image.image === undefined)
        {
            alert("Please Select Product Image")
        }else if(description.description === '' || description.description === undefined)
        {
            alert("Please Type Product Description")
        }else if(price.price === '' || price.price === undefined)
        {
            alert("Please Type Product Price")
        }else if(qty.qty === '' || qty.qty === undefined)
        {
            alert("Please Type Quantity")
        }else{

        
        formData.append('image',image.image);
        formData.append('name',name.name);
        formData.append('description',description.description);
        formData.append('price',price.price);
        formData.append('qty',qty.qty);
        addProductAPI(formData).then((res) =>{
            if(res.status==="200")
            {
                history.push("/admin/products");
            }else{
                alert("Product Can't be Added");
            }
        });
        }
    }

    
  
    return (
         <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h3 className="font-bold pl-2">Products Edit</h3>
                </div>
            </div>

            <div className="flex flex-wrap">
                  
                <div className="w-full md:w-1/1 xl:w-1/1 p-6">
                    
                    <div className="bg-gradient-to-b  border-b-4 border-red-500 rounded-lg shadow-xl p-5"> 
                         <form
                            noValidate
                            autoComplete="off"
                             onSubmit={storeProduct}
                        >
                         <div className="px-12 pb-10">
                            <div className="w-full mb-2">
                                <div className="justify-center">
                                    <label>Title</label><br/>
                                    <input type="text" name="name" id='name' value={name.val}
          onChange={(e) => setName({ ...name, name: e.target.value })} placeholder="Product Title"
                                    className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none items-center"  required />
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="justify-center">
                                <label>Description</label><br/>
                                <textarea name="description" id="description" value={description.val}
          onChange={(e) => setDescription({ ...description, description: e.target.value })} cols="30" required rows="10" className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"></textarea>
                                
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="justify-center">
                                <label>Price</label><br/>
                                <input type="number" id='price' name='price' value={price.val}
          onChange={(e) => setPrice({ ...price, price: e.target.value })} required className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                                
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="justify-center">
                                <label>Quantity</label><br/>
                                <input type="number" id='qty' name='qty' value={qty.val}
          onChange={(e) => setQty({ ...qty, qty: e.target.value })}  required  className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                                
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="justify-center">
                                <label>Product Image</label><br/>
                           
                                <input type="file" 
          onChange={(e) => setImage({ ...image, image: e.target.files[0] })} required name="image"   />
                           
                                
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="justify-center">
                            <button className="
                                text-purple-500
                                bg-transparent
                                border border-solid border-purple-500
                                hover:bg-purple-500 hover:text-white
                                active:bg-purple-600
                                font-bold
                                uppercase
                                text-sm
                                px-6
                                py-3
                                rounded
                                outline-none
                                focus:outline-none
                                mr-1
                                mb-1
                                ease-linear
                                transition-all
                                duration-150
                              "  type="submit">
                                ADD
                            </button>
                                
                            </div>
                        </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;