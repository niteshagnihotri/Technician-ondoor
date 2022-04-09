

export default function Why(){

    const time = "https://cdn-icons.flaticon.com/png/512/5947/premium/5947983.png?token=exp=1649411927~hmac=74e35641461b1bf5fdc310279c34964c";
    const safety = "https://cdn-icons-png.flaticon.com/512/3649/3649557.png";
    const quality = "https://cdn-icons.flaticon.com/png/512/4722/premium/4722283.png?token=exp=1649409956~hmac=9aeef5c6eaabdb344895ce5422ea6916";
    const help = "https://cdn-icons-png.flaticon.com/512/7050/7050730.png";
    const com = "https://cdn-icons.flaticon.com/png/512/3719/premium/3719481.png?token=exp=1649410483~hmac=156e711301993a042e915aeb10a4dbda";
    const payment = "https://cdn-icons-png.flaticon.com/512/7210/7210863.png";

    return (
        <div className="font-QuickSand font-semibold text-center">
            <div className="tracking-wide py-4 px-3 mt-10">
                <h1 className="text-3xl md:text-4xl pb-3 font-Karla px-10 md:px-0">WHY TECHNICIAN <span className="text-3xl md:text-4xl" style={{color:'red',}}>ondoor</span></h1>
                <p className="text-lg md:text-xl">6 Reasons to choose us</p>
            </div>
            
            <div className='w-100 flex flex-col py-5 space-y-7'>
                <div className="md:w-9/12 md:mx-auto md:flex md:justify-between md:space-x-5 space-y-10 md:space-y-0">
                    <div className="w-[80%] mx-auto md:w-1/3 space-y-4 text-center px-8 py-4 ">
                        <img src={time} alt="Saves Your Time - Technician ondoor" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-xl'>Saves Your Time</h1>
                        <h1 className='text-sm'>Technician <span style={{color:'red',}}>ON DOOR</span> helps you live smarter, giving you time to focus what’s most important.</h1>
                    </div>
                    <div className="w-[80%] mx-auto md:w-1/3 space-y-4 text-center px-8 py-4 ">
                        <img src={safety} alt="Safety Firs - Technician ondoor" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-xl'>Safety First</h1>
                        <h1 className='text-sm'>We have verified all our executive, who undergo identity and documentation checks as well as in-person interviews.</h1>
                    </div>
                    <div className="w-[80%] mx-auto md:w-1/3 space-y-4 text-center px-8 py-4 ">
                        <img src={quality} alt="Only the Best Quality - Technician ondoor" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-xl'>Only the Best Quality</h1>
                        <h1 className='text-sm'>Our skilled professionals go above and beyond on every job. Taskers are rated and reviewed after each task.</h1>
                    </div>
                </div>
                <div className="md:w-9/12 md:mx-auto md:flex md:justify-between md:space-x-5 space-y-10 md:space-y-0">
                    <div className="w-[80%] mx-auto md:w-1/3 space-y-4 text-center px-10 py-4 ">
                        <img src={help} alt="Easy to Get Help - Technician ondoor" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-xl'>Easy to Get Help</h1>
                        <h1 className='text-sm'>Select the task you need done, then choose the Tasker you’d like to work with.</h1>
                    </div>
                    <div className="w-[80%] mx-auto md:w-1/3 space-y-4 text-center px-10 py-4">
                        <img src={com} alt="Seamless Communication - Technician ondoor" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-xl'>Seamless Communication</h1>
                        <h1 className="text-sm">Online communication makes it easy for you to stay in touch with your Tasker..</h1>
                    </div>
                    <div className="w-[80%] mx-auto md:w-1/3 space-y-4 text-center px-10 py-4">
                        <img src={payment} alt="Cash-free Payment - Technician ondoor" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-xl'>Cash-free Payment</h1>
                        <h1 className='text-sm'>Pay securely online only when the task is complete.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}