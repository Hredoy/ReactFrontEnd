import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import {Provider} from 'react-redux'
import LogIn from "./components/admin/LogIn";
import UserLogin from "./components/frontend/LogIn";
import UserRegister from "./components/frontend/UserRegister";
import SignUp from "./components/admin/SignUp";
import Navbar from './layout/admin/Navbar';
import FrontNav from './layout/frontend/Navbar';
import Sidebar from './layout/admin/Sidebar';
import Dashboard from './components/admin/Dashboard';
import Product from './components/Product';
import AuditPage from './components/AuditPage';
import Audit from './components/frontend/audit';
import AddProduct from './components/addProduct';
import ProductEdit from './components/ProductEdit';
import AdminOrder from './components/admin/Order';
import OrderPage from './components/frontend/Order';
import OrderList from './components/frontend/OrderList';
import EditOrder from './components/frontend/editOrder';
import HomePage from './components/frontend/index.js';
import SingleProduct from './components/frontend/SingleProduct';
import store from './redux'
import NotFound from './NotFound';
  let admin = localStorage.getItem('admin');
const App = () => (
  
  
  <Provider store={store}>
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {/* <Route path="/admin" name="Admin" render={(props)=> <MasterLayout {...props}/>}/> */}
              {
                  (() => {
                    console.log(admin);
                      if(admin==="1") {
                        
                              return (
                                
                              <>
       <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
            <Navbar />
             <div className="flex flex-col md:flex-row">
               <Sidebar/>
                                <Route exact path="/admin/dashboard">
                                  <Dashboard></Dashboard>
                                </Route><Route exact path="/admin/order">
                                    <AdminOrder></AdminOrder>
                                  </Route><Route exact path="/admin/products">
                                    <Product></Product>
                                  </Route><Route exact path="/admin/product/edit/:id">
                                    <ProductEdit></ProductEdit>
                                  </Route><Route exact path="/admin/viewchanges/:producutid/:orderId">
                                    <AuditPage></AuditPage>
                                  </Route><Route exact path="/admin/product/add"><AddProduct></AddProduct></Route></div></div></>
                              )
                          } 
                      })()    
              }
              </Switch>
              <Switch>
                {
                  (()=>{
                    if(!admin === "1" || admin === null){
                      return (
                      <div className="min-h-full">
                        <FrontNav/>
                        <Route exact path="/">
                          <HomePage></HomePage>
                        </Route>
                        <Route exact path="/product/:id">
                          <SingleProduct></SingleProduct>
                        </Route>
                        <Route exact path="/order/">
                          <OrderList></OrderList>
                        </Route>
                        <Route exact path="/editOrder/:id">
                          <EditOrder></EditOrder>
                        </Route>
                        <Route exact path="/placeorder/:id">
                          <OrderPage></OrderPage>
                        </Route>
                        <Route exact path="/viewchanges/:producutid/:orderId">
                          <Audit></Audit>
                        </Route>
                        {/* <Route component={NotFound} /> */}
                      </div>

                      )
                    }
                  })()
                }
              </Switch>
              <Switch>
                <Route exact path="/login">
                  <UserLogin></UserLogin>
                </Route>
                <Route exact path="/signup">
                  <UserRegister></UserRegister>
                </Route>
              </Switch>
              <Switch>
              <Route exact path = "/administrator/login">
                  <LogIn></LogIn>
                  
              </Route>
              <Route exact path = "/administrator/signup">
                  <SignUp></SignUp>
              </Route>
            </Switch>
    </Suspense>
  </Router>
  </Provider>
);

export default App;
