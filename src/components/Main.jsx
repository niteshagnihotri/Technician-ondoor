import { React, useState } from "react";
import emailjs from '@emailjs/browser';
import '../App.css';

export default function Main() {

    const img_url = "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
   
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
        console.log(mailsent);
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
                            alt="Wild Landscape"
                        />
                        <div class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
                            <h5 class="text-3xl md:text-4xl tracking-widest leading-tight">NEED HELP WITH HOME SERVICES ?</h5>
                            <p className="text-xl md:text-xl tracking-widest leading-tight ">We connect you with the best Home Service professional in your city.</p>
                        </div>
                    </div>
                    <div className="carousel-item float-left w-full ">
                        <img
                            src={img_url}
                            className="block w-full brightness-[40%] h-[90vh] image "
                            alt="Camera"
                        />

                        <div class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
                            <h5 class="text-3xl md:text-4xl tracking-widest leading-tight">NEED HELP WITH HOME SERVICES ?</h5>
                            <p className="text-xl md:text-xl tracking-widest leading-tight">We connect you with the best Home Service professional in your city.</p>
                        </div>
                    </div>
                    <div className="carousel-item float-left w-full ">
                        <img
                            src={img_url}
                            className="block w-full brightness-[40%] h-[90vh] image "
                            alt="Exotic Fruits"
                        />

                        <div class="carousel-caption md:block absolute top-0 right-0 bottom-0 left-0 md:right-auto md:left-64 py-8 md:top-[10%] space-y-5 md:w-[40%] w-100 p-10 px-8 md:p-2">
                            <h5 class="text-3xl md:text-4xl tracking-widest leading-tight">NEED HELP WITH HOME SERVICES ?</h5>
                            <p className="text-xl md:text-xl tracking-widest leading-tight">We connect you with the best Home Service professional in your city.</p>
                        </div>
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