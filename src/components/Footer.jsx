import React from "react";
import img from '../images/TechnicianTr.png';
import { Link } from 'react-router-dom';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {

    return (
        <div className="w-100 h-auto bg-gray-800 pt-16 text-white font-SourceSans px-5">
            <div className="md:w-9/12 md:mx-auto ">
                <div className="mx-3 sm:mx-5 md:flex md:flex-row md:justify-between space-y-3 md:space-y-0">
                    <div className="flex flex-col w-fit h-auto sm:w-80 leading-loose">
                        <img src={img} alt="Technician ondoor" className="bg-white w-44 p-0 m-0 lg1:ml-5" />
                        <p className="mt-4">
                            Technician ondoor was established in 2017, The owner is a master in the plumbing industry (All Home Electronics) having more than 10 years of experience in residential, commercial and industrial services. Our vision of the company grew from personal concerns about customer service depleting over the years, which he witnessed first-hand in companies he worked for.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-10 lg:px-5 pt-10">
                        <h1 className="text-2xl font-bold font-Mont translate-0 md:-translate-x-5">Quick link</h1>
                        <ul className="space-y-6 pl-5 list-disc" >
                            <li><Link className="cursor-pointer hover:text-green-500 text-lg" to="/">Home</Link></li>
                            <li><Link className="cursor-pointer hover:text-green-500 text-lg" to="/about">About</Link></li>
                            <li><Link className="cursor-pointer hover:text-green-500 text-lg" to="/service">Services</Link></li>
                            <li><Link className="cursor-pointer hover:text-green-500 text-lg" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-6 md:flex md:flex-col  text-lg ">
                        <h1 className='text-3xl font-bold font-Mont py-8'>Reach us</h1>

                        <div className='flex items-center'>
                            <HiOutlineOfficeBuilding className='text-xl mr-5 text-green-700' />
                            <h1 className="md:flex items-center ">
                                Address : H-21 karolbagh, Delhi
                            </h1>
                        </div>

                        <div className='flex items-center'>
                            <IoMdCall className='text-xl mr-5 text-green-700' />
                            <h1 className="md:flex items-center ">
                                Call : <span className="cursor-pointer" onClick={() => window.location = 'tel:+919343210457'}>+919343210457 / +919343210457</span>
                            </h1>
                        </div>

                        <div className='flex items-center'>
                            <IoMdMail className='text-xl mr-5 text-green-700' />
                            <h1 className="md:flex items-center ">
                                Email : <span className="cursor-pointer" onClick={() => window.location = 'mailto:bhopaltechnician@gmail.com'}>bhopaltechnician@gmail.com</span>
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className="md:w-9/12 md:mx-auto px-2 mt-10 text-slate-300 text-center text-sm md:leading-10 leading-6">
                Copyright © Technician ondoor 2022. All right reserved. Designed & Developed by <Link to="//niteshagnihotri.netlify.app/" className="no-underline text-slate-300">Nitesh Agnihotri</Link>
            </div>
        </div>

    )
}

export default Footer;