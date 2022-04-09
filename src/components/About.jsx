
import { RiCustomerService2Fill } from 'react-icons/ri';
import Clients from './Clients';
import Steps from './Steps';
import Why from './Why';

export default function About() {
    return (
        <div className="w-100 font-QuickSand font-bold">
            <div className="w-100 bg-green_gradient">

                <div className="md:w-8/12 md:mx-auto h-[15vh] flex items-center justify-center md:justify-start">
                    <h1 className="text-3xl text-green-50">About</h1>
                </div>
            </div>

                <div className="md:w-8/12 md:mx-auto py-6 px-6">
                    <div>
                        <h1 className="text-lg text-slate-600">
                            <span className="text-2xl text-black">Technician</span><span className="text-3xl" style={{ color: "red" }}>ondoor</span> is an ideal company that can repair and maintain Air Conditioner, Refrigerator, Washing machine, Water purifier and much more. We have years of experience and expertise in the domain. We can handle any type of appliance irrespective of its company & complexity. Technician ondoor was established in 2010, The owner is a master in the plumbing industry (All Home Electronics) having more than 10 years of experience in residential, commercial and industrial services.
                        </h1>
                    </div>
                    <div className="py-5">
                        <h1 className="text-2xl">Reason to Choose Us</h1>
                        <p className="text-lg text-slate-600">Technician ondoor is one of the top electronic appliance service companies with years of experience and expertise. We can handle any type of appliance irrespective of its criticality. Whether it is a purifier or a washing machine, we can handle it all.</p>
                      
                    </div> 
                <button className='bg-button_gradient mx-auto p-1 px-3 flex shadow-lg text-white rounded hover:opacity-90' onClick={() => window.location = 'tel:+919343210457'}>Call Now: +919343210457 <RiCustomerService2Fill style={{ alignSelf: 'center', margin: '0 6' }} /></button>
                  
                </div>
                <Why/>
                <Steps/>
                <Clients/>
            </div>
    );
}