export const url = "http://localhost:8000/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};

const registrationAPI =async (data) => {
  try{
const request = await fetch(`${url}/admin/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(data),
    });
    // console.log(request);
    const response = await request.json();

    return response;
  } catch(err){
    console.log(err);
  }
}
const loginAPI =async (data) => {


  try{
const request = await fetch(`${url}/admin/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(data),
    });
    // console.log(request);
    const response = await request.json();

    return response;
  } catch(err){
    console.log(err);
  }
}
const LogOutAPI =async () => {
  try{
const request = await fetch(`${url}/admin/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(),
    });
    // console.log(request);
    const response = await request.json();

    return response;
  } catch(err){
    console.log(err);
  }
}
const UserLogOutAPI =async () => {
  try{
const request = await fetch(`${url}/user/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(),
    });
    // console.log(request);
    const response = await request.json();

    return response;
  } catch(err){
    console.log(err);
  }
}
const userregistrationAPI =async (data) => {
  try{
const request = await fetch(`${url}/user/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(data),
    });
    // console.log(request);
    const response = await request.json();

    return response;
  } catch(err){
    console.log(err);
  }
}
const userloginAPI =async (data) => {


  try{
const request = await fetch(`${url}/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(data),
    });
    // console.log(request);
    const response = await request.json();

    return response;
  } catch(err){
    console.log(err);
  }
}
const userLogOutAPI =async () => {
  try{
const request = await fetch(`${url}/user/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(),
    });
    // console.log(request);
    const response = await request.json();

    return response;
  } catch(err){
    console.log(err);
  }
}


const addProductAPI =async (files) => {
  const token = localStorage.getItem('token');

  console.log(...files)
  try{
    const request = await fetch(`http://localhost:8000/api/products/store`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
        
      },
      body: files,
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const updateProductByIDAPI =async (files,id) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`http://localhost:8000/api/products/update/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
        
      },
      body: files,
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const getProductByIDAPI =async (id) => {
  // const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/products/show/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
        
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const getAuditAPI =async (id) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/order/audithistory/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}`
        
      },
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const loadProductsAPI =async () => {
  // const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/products`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const DeleteProductsAPI =async (id) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/products/destroy/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}` 
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const getCustomer =async () => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/get_customer`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}` 
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const getAllOrderAPI =async () => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/getAllOrders`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}` 
      },
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const OrderActions =async (datas) => {
  const token = localStorage.getItem('token');
  // console.log(...datas);
  try{
    const request = await fetch(`${url}/order/change_approval_status`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      body:datas,
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const ChangeOrderStatus =async (datas) => {
  const token = localStorage.getItem('token');
  // console.log(...datas);
  try{
    const request = await fetch(`${url}/order/change_process_status`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      body:datas,
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const placeOrderAPI =async (orders) => {
  const token = localStorage.getItem('token');

  // console.log(...files)
  try{
    const request = await fetch(`http://localhost:8000/api/placemyorder`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      body: orders,
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const getOrders =async (id) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`http://localhost:8000/api/getOrders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      body: id,
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const EditOrderAPI =async (data) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`http://localhost:8000/api/updateOrders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      body: data,
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const editOrders =async (id) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`http://localhost:8000/api/editOrders?order_id=${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const getAllOrder =async () => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`http://localhost:8000/api/getAllOrders`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const SortProductsAPI =async (data) => {
  // const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/products/sort/${data}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const SortOrderAPI =async (id,keys,data) => {
  const token = localStorage.getItem('token');
// console.log(id);
  try{
    const request = await fetch(`${url}/order/sort/${keys}/${data}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
      body:id,
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}

const SearchProductsAPI =async (name) => {
  // const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/products/search/${name}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const SearchOrderByIdAPI =async (name) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/order/search/${name}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}` 
      },
    });
    const response = await request.json();
    // console.log(response);
    return response;
  } catch(err){
    console.log(err);
  }
}
const CountOrderStatusAPI =async (keys,data) => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/getNumberOfData/${keys}/${data}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const CountUser =async () => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/countCustomer/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
const CountProduct =async () => {
  const token = localStorage.getItem('token');

  try{
    const request = await fetch(`${url}/CountProduct`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        'Authorization': `Bearer ${token}` 
      },
    });
    const response = await request.json();
    return response;
  } catch(err){
    console.log(err);
  }
}
export {
  getCustomer,CountProduct,CountUser,CountOrderStatusAPI,SortOrderAPI,getAuditAPI,SearchOrderByIdAPI,OrderActions,ChangeOrderStatus,getAllOrderAPI,UserLogOutAPI,getAllOrder,EditOrderAPI,editOrders,getOrders,placeOrderAPI,registrationAPI,loginAPI,LogOutAPI,userregistrationAPI,userloginAPI,userLogOutAPI,addProductAPI,getProductByIDAPI,updateProductByIDAPI,SortProductsAPI,loadProductsAPI,DeleteProductsAPI,SearchProductsAPI
}