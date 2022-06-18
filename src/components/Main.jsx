import { React, useState, useContext } from "react";
import '../App.css';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { CityContext } from "../App";
import img_url from '../images/bg.avif';
import btnloader from '../images/btnloader.png';

export default function Main() {

    const { state } = useContext(CityContext);
    const [btnloading, setBtnLoading] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

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
        setBtnLoading(true);
        if ((user.name === "") || (user.email === "") || (user.phone === "") || (user.message === "")) {
            setErrorName(false);
            setErrorEmail(false);
            setErrorPhone(false);
            setErrorMessage(false);
            window.alert("Please Enter Required Service Details");
            setBtnLoading(false);
        }
        else {
            const mailsent = emailjs.send("technicianondoor_mail", "template_86xtlik", user, 'UHgVYyZ054pIrjLcf');
            if (mailsent) {
                setErrorName(false);
                setErrorEmail(false);
                setErrorPhone(false);
                setErrorMessage(false);
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                window.alert("Request submitted");
                setBtnLoading(false);
            }
            else {
                setErrorName(false);
                setErrorEmail(false);
                setErrorPhone(false);
                setErrorMessage(false);
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                window.alert("Please Use Call Service");
                setBtnLoading(false);
            }
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
                        <motion.div initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
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

                        <motion.div initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
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

                        <motion.div initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
                            <h5 class="text-3xl md:text-4xl tracking-widest leading-tight">NEED HELP WITH HOME SERVICES ?</h5>
                            <p className="text-xl md:text-xl tracking-widest leading-tight">We connect you with the best Home Service professional in your city.</p>
                        </motion.div>
                    </div>
                </div>

                <div className="bg-slate-200 bg-opacity-90    absolute top-[30%] md:top-[5%] translate-x-10 md:translate-x-0 right-[15%]    w-[90%] md:w-[28%]    p-10 px-6 py-5 md:px-8 md:py-12 lg:py-5 xl:px-12    space-y-4">
                    <h1 className='text-3xl text-left md:text-3xl text-slate-800 font-Roboto py-6 md:py-4'>Request a Service</h1>
                    <div className="flex flex-col h-12 text-lg">
                        <input type="text" name="name" value={user.name} onBlur={(e) => { if (e.target.value === "") { setErrorName(<p className='text-red-600 text-xs '>please enter name</p>) } }} onChange={handleInputs} className="border-slate-600 border-b bg-transparent px-2 placeholder:text-md placeholder:text-slate-500 text-md focus:outline-slate-500" placeholder='Full Name : ' autoComplete='off' />
                        {errorName}
                    </div>
                    <div className="flex flex-col h-12 text-lg">
                        <input type="email" name="email" value={user.email} onBlur={(e) => { if (e.target.value === "") { setErrorEmail(<p className='text-red-600 text-xs '>please enter email</p>) } }} onChange={handleInputs} className="border-slate-600 border-b bg-transparent px-2 placeholder:text-md placeholder:text-slate-500 text-md focus:outline-slate-500" placeholder='Email : ' autoComplete='off' />
                        {errorEmail}
                    </div>
                    <div className="flex flex-col h-12 text-lg">
                        <input type="text" value={state} readOnly name="city" onChange={handleInputs} className="border-slate-600 border-b px-2 placeholder:text-md placeholder:text-slate-500 text-md bg-slate-400 text-slate-700" placeholder='City : ' autoComplete='off' />
                    </div>
                    <div className="flex flex-col h-12 text-lg">
                        <input type="phone" name="phone" value={user.phone} onBlur={(e) => { if (e.target.value === "") { setErrorPhone(<p className='text-red-600 text-xs '>please enter contact number</p>) } }} onChange={handleInputs} className="border-slate-600 border-b bg-transparent px-2 placeholder:text-md placeholder:text-slate-500 text-md focus:outline-slate-500" placeholder='Contact : ' autoComplete='off' />
                        {errorPhone}
                    </div>
                    <div className="flex flex-col h-12 text-lg">
                        <input type="textarea" name="message" value={user.message} onBlur={(e) => { if (e.target.value === "") { setErrorMessage(<p className='text-red-600 text-xs '>please enter service details</p>) } }} onChange={handleInputs} className="border-slate-600 border-b bg-transparent px-2 placeholder:text-md placeholder:text-slate-500 text-md focus:outline-slate-500" placeholder='Message : ' autoComplete='off' />
                        {errorMessage}
                    </div>
                    <div>
                        <button className="w-auto flex items-center shadow-sm shadow-slate-800 bg-slate-700 hover:bg-gray-900 rounded-3xl font-QuickSand text-slate-200 p-2 px-6"
                            onClick={SendData}>
                            <img src={btnloader} alt="btn loader" className={(btnloading ? "visible" : "hidden") + " w-7 h-7 animate-spin mr-2"} loading="lazy" />
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}