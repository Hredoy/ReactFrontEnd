import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import {getAuditAPI,getProductByIDAPI} from "../../api/index";
import moment from "moment";
const Audit = () => {
    const parms = useParams();
    const pro_id = parms.producutid;
    const orderId = parms.orderId;
    const [audit,setAudit] = useState([]);
    const [newValue,setnewValue] = useState([]);
    const [name,setName] = useState('');
    useEffect (()=>{
        getProductByIDAPI(pro_id).then((res) =>{
            // console.log(res);
         setName(res.name);
        });
        getAuditAPI(orderId).then((res) =>{
            setAudit(res);
        });

    },[])
    
   

    
  
    return (
         <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">


            <div className="flex flex-wrap">
                  
                <div className="w-full md:w-1/1 xl:w-1/1 p-6">
                    
                    <div className="bg-gradient-to-b  border-b-4 border-red-500 rounded-lg shadow-xl p-5"> 
                          <table className="min-w-full divide-y text-center divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th 
                                    scope="col" 
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                       Product Name
                                    </th>
                                    <th 
                                    scope="col" 
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                    <th
                                    scope="col" 
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Old Values
                                    </th>
                                    <th
                                    scope="col" 
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        New Value
                                    </th>
                                    <th
                                    scope="col" 
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        IP
                                    </th>
                                    <th
                                    scope="col" 
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        UPDATED AT
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                
                                {audit.map((audi, index)=>(

                                <tr>
                                    <td>{name}</td>
                                    <td>{audi.event}</td>
                                    <td>
                                        Customer Name: {audi.old_values.name}
                                        <br/>
                                        Phone: {audi.old_values.phone}
                                        <br/>
                                        Address: {audi.old_values.address}
                                    </td>
                                    <td>
                                        Customer Name: {audi.new_values.name}
                                        <br/>
                                        Phone: {audi.new_values.phone}
                                        <br/>
                                        Address: {audi.new_values.address}
                                    </td>
                                    <td>{audi.ip_address}</td>
                                    <td>{moment(audi.updated_at).utc().format('YYYY-MM-DD hh:mm:ss A')}</td>
                                </tr>

                                    ))}

                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Audit;