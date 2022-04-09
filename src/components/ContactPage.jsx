import { React, useState } from "react";
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { RiCustomerService2Fill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        city: "",
        zip: "",
        phone: ""
    });


    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
   
    const sendEmail = (e) =>{
            emailjs.send("technicianondoor_mail", "query_mail", user, 'UHgVYyZ054pIrjLcf');
            window.alert("Request submitted");
        };
    

    return (
        <div className="w-100 font-QuickSand font-bold">
            <div className="w-100 bg-green_gradient">
                <div className="md:w-8/12 md:mx-auto h-[15vh] flex items-center justify-center md:justify-start">
                    <h1 className="text-3xl text-green-50">Contact</h1>
                </div>
            </div>
            <div className='md:w-9/12 md:mx-auto py-5 flex flex-col md:flex-row md:space-x-10 space-x-0 '>

                <form className="w-full px-10">
                <h1 className='text-3xl md:text-4xl text-center md:text-left font-Raleway py-10'>Drop a Query</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input onChange={handleInputs} name='firstname' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input onChange={handleInputs} name="lastname" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-password">
                                email
                            </label>
                            <input onChange={handleInputs} name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="joe@hotmail.com" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input onChange={handleInputs} name="city" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input onChange={handleInputs} name="zip" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-zip">
                                Phone
                            </label>
                            <input onChange={handleInputs} name="phone" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="9021078788" />
                        </div>
                        <div className='mx-3'>

                            <button className='bg-button_gradient mx-auto p-1 px-3 my-10 flex shadow-lg text-white rounded hover:opacity-90' onClick={sendEmail}>Submit <RiCustomerService2Fill style={{ alignSelf: 'center', margin: '0 6' }} /></button>

                        </div>
                    </div>
                </form>

                <div className=" w-full px-1 py-5 md:py-5 space-y-10 md:flex md:flex-col justify-center text-lg ">
                    <h1 className='text-3xl md:text-4xl text-center md:text-left'>Reach us</h1>

                    <div className='flex items-center'>
                        <HiOutlineOfficeBuilding className='text-xl mx-5 text-green-700' />
                        <h1 className="md:flex items-center ">
                            Address : H-21 karolbagh, Delhi
                        </h1>
                    </div>

                    <div className='flex items-center'>
                        <IoMdCall className='text-xl mx-5 text-green-700' />
                        <h1 className="md:flex items-center ">
                            Call : <span className="cursor-pointer" onClick={() => window.location = 'tel:+919343210457'}>+919343210457 / +919343210457</span>
                        </h1>
                    </div>

                    <div className='flex items-center'>
                        <IoMdMail className='text-xl mx-5 text-green-700' />
                        <h1 className="md:flex items-center ">
                            Email : <span className="cursor-pointer" onClick={() => window.location = 'mailto:bhopaltechnician@gmail.com'}>bhopaltechnician@gmail.com</span>
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    );
}