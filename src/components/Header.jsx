import React, {useState, useEffect} from 'react';
import img1 from '../images/TechnicianTr.png';
import { RiCustomerService2Fill } from 'react-icons/ri';
// import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import {IoMdMail} from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import {GrClose} from 'react-icons/gr';

export default function Header() {
    const [scroll, setScroll] = useState(false);
    const [showNav, setshowNav] = useState(false);
    let history = useNavigate();

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 0);
      });
    }, []); 

    return (
        <div className="w-100 sticky top-0 bg-white drop-shadow-lg shadow-green-400 " >
            <div className={ (scroll ? "hidden" : " visible ") + " text-white bg-green_gradient font-QuickSand font-bold transiton-all ease-in"}>
                <div className="md:w-9/12 md:mx-auto md:flex flex-col md:flex-row md:justify-between text-sm space-y-1 md:space-y-0 md:text-md  text-center px-2 md:px-5 py-2">
                    <h1 className="cursor-pointer flex items-center justify-center" onClick={() => window.location = 'mailto:bhopaltechnician@gmail.com'}>
                   
                    <IoMdMail className='mx-3 text-yellow-300' /> bhopaltechnician@gmail.com
                    </h1>
                    <h1>
                        Need Help ? Call Now : <span className="cursor-pointer" onClick={() => window.location = 'tel:+919343210457'}>9343210457 / 9343210457 / 9343210457</span>
                    </h1>
                </div>
            </div>
            <div className="w-100 px-3">
                <div className="md:w-9/12  md:mx-auto md:flex space-y-4 md:space-y-0 items-center align-middle pb-3 md:pb-0 ">
                <div className="bg-white md:flex items-center justify-between font-QuickSand">
                        <div className="flex items-center justify-between">
                           <img className="w-56 p-0 m-0 lg1:ml-5 cursor-pointer" src={img1} onClick={()=>{history('/'); window.scrollTo(0)}} alt="applianceplus - best home appliances repair service in bhopal" />
                            {
                                showNav ? 
                                <GrClose onClick={() => { setshowNav(!showNav) }} className='md:hidden block w-10 h-auto p-2 mr-3 cursor-pointer transition-all ease-in-out delay-150'  />
                                        :
                                <HiOutlineMenuAlt3 onClick={() => { setshowNav(!showNav) }} className='md:hidden block w-10 h-auto p-2 mr-3 cursor-pointer' />
                            }
                        </div>
                        <ul className={(showNav ? "visible" : "hidden") + "  md:static md:flex flex md:flex-row flex-col    xl:space-x-6 lg:space-x-5 md:space-y-0 md:space-x-5 space-y-5    md:w-auto w-10/12 md:my-auto  md:bg-transparent   py-4 pl-4 sm:pl-10 lg1:mr-3 mb-0  bottom-0 top-16   md:text-lg text-xl font-bold"}>
                            <Link onClick={()=>{setshowNav(false); window.scrollTo(0)}} className="no-underline text-gray-700 md:px-1 font-semibold  hover:text-green-600" to="/" >Home</Link>
                            <Link onClick={()=>{setshowNav(false); window.scrollTo(0)}} className="no-underline text-gray-700 md:px-1 font-semibold hover:text-green-600" to="/about">About</Link>
                            <Link onClick={()=>{setshowNav(false); window.scrollTo(0)}} className="no-underline text-gray-700 md:px-1 font-semibold hover:text-green-600" to="/services">Services</Link>
                            <Link onClick={()=>{setshowNav(false); window.scrollTo(0)}} className="no-underline text-gray-700 md:px-1 font-semibold hover:text-green-600" to="/contact">Contact</Link>
                           
                        </ul>
                    </div>
                    <div className=" w-100 md:w-fit flex md:flex-row md:ml-auto space-x-5 md:space-x-7 font-Raleway align-middle self-center">
                        <select name="city" className="p-1 bg-white rounded-3xl ml-5 cursor-pointer focus:outline-none shadow-md" defaultValue="Bhopal">
                            <option value="Bhopal">Bhopal</option>
                            <option value="Indore">Indore</option>
                            <option value="Jabalpur">Jabalpur</option>
                            <option value="Raipur">Raipur</option>
                            <option value="Gorakhpur">Gorakhpur</option>
                        </select>
                        <button className='bg-button_gradient p-1 px-3 flex shadow-lg text-white rounded hover:opacity-90' onClick={() => window.location = 'tel:+919343210457'}>Avail Service <RiCustomerService2Fill style={{ alignSelf: 'center', margin: '0 6' }} /></button>
                    </div>
                </div>
            </div>
            <hr className='bg-green_gradient md:h-1 '/>
        </div >
    );
}