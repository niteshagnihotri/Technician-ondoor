import { React, useState, useContext } from "react";
import '../App.css';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { CityContext } from "../App";
import img_url from '../images/bg.avif'; 

export default function Main() {

    const {state} = useContext(CityContext);

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
   
    const SendData = async (e) => {
        const mailsent = emailjs.send("technicianondoor_mail", "template_86xtlik", user, 'UHgVYyZ054pIrjLcf');
        if(mailsent){
            window.alert("Request submitted");
        }
        else{
            window.alert("Please Use Call Service");
        }
         
    }

    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide relative " data-bs-ride="carousel">
                <div className="carousel-inner relative w-full min-h-[90vh] md:h-[90vh] bg-img_url overflow-hidden font-Raleway font-bold">
                    <div className="carousel-item active float-left w-full ">
                        <img
                            src={img_url}
                            className="block w-full brightness-[40%] h-[90vh] image"  
                            alt="Technician on door"
                        />
                        <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100}} viewport={{ once: true }} class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
                            <h5 class="text-3xl md:text-4xl tracking-widest leading-tight">NEED HELP WITH HOME SERVICES ?</h5>
                            <p className="text-xl md:text-xl tracking-widest leading-tight ">We connect you with the best Home Service professional in your city.</p>
                        </motion.div>
                    </div>
                    <div className="carousel-item float-left w-full ">
                        <img
                            src={img_url}
                            className="block w-full brightness-[40%] h-[90vh] image "
                            alt="Technician on door"
                        />

                        <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100}} viewport={{ once: true }} class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
                            <h5 class="text-3xl md:text-4xl tracking-widest leading-tight">NEED HELP WITH HOME SERVICES ?</h5>
                            <p className="text-xl md:text-xl tracking-widest leading-tight">We connect you with the best Home Service professional in your city.</p>
                        </motion.div>
                    </div>
                    <div className="carousel-item float-left w-full ">
                        <img
                            src={img_url}
                            className="block w-full brightness-[40%] h-[90vh] image "
                            alt="Technician on door"
                        />

                        <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100}} viewport={{ once: true }} class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
                            <h5 class="text-3xl md:text-4xl tracking-widest leading-tight">NEED HELP WITH HOME SERVICES ?</h5>
                            <p className="text-xl md:text-xl tracking-widest leading-tight">We connect you with the best Home Service professional in your city.</p>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute top-[30%] md:top-[5%] translate-x-10 md:translate-x-0 right-[15%]  w-[90%] md:w-[28%] p-10 md:px-8 md:py-12 bg-slate-200 px-6 xl:px-12 bg-opacity-90 py-10 lg:py-10 space-y-10 font-QuickSand font-bold">
                    <h1 className='text-3xl text-center md:text-left md:text-3xl'>Request a Service</h1>
                    <div className="flex flex-col space-y-4 text-lg">
                        <input type="text" id="" name="name" onChange={handleInputs} className="border-2 p-1 px-2 focus:outline-none" placeholder='Full Name : ' autoComplete='off'/>
                    </div>
                    <div className="flex flex-col space-y-4 text-lg">
                        <input type="email" id="" name="email" onChange={handleInputs} className="border-2 p-1 px-2 focus:outline-none" placeholder='Email : ' autoComplete='off'/>
                    </div>
                    <div className="flex flex-col space-y-4 text-lg">
                        <input type="text" id="" value={state} readOnly name="city" onChange={handleInputs} className="border-2 p-1 px-2 focus:outline-none" placeholder='City : ' autoComplete='off'/>
                    </div>
                    <div className="flex flex-col space-y-4 text-lg">
                        <input type="phone" id="" name="phone" onChange={handleInputs} className="border-2 p-1 px-2 focus:outline-none" placeholder='Contact : ' autoComplete='off'/>
                    </div>
                    <div className="flex flex-col space-y-4 text-lg">
                        <input type="textarea" id="" name="message" onChange={handleInputs}  className="border-2 p-1 px-2 focus:outline-none" placeholder='Message : ' autoComplete='off'/>
                    </div>
                    <button className="bg-slate-700 px-5 text-lg rounded font-semibold text-white p-2" onClick={SendData}>Submit</button>
                </div>

            </div>
        </div>

    );
}