
import { IoMdMail } from 'react-icons/io';

export default function Top(){
    return (
        <div className={" text-white bg-green_gradient font-QuickSand font-bold transiton-all ease-in"}>
                <div className="md:w-9/12 md:mx-auto md:flex flex-col md:flex-row md:justify-between text-sm space-y-1 md:space-y-0 md:text-md  text-center px-2 md:px-5 py-2">
                    <h1 className="cursor-pointer flex items-center justify-center" onClick={() => window.location = 'mailto:bhopaltechnician@gmail.com'}>

                        <IoMdMail className='mx-3 text-yellow-300' /> bhopaltechnician@gmail.com
                    </h1>
                    <h1>
                        Need Help ? Call Now : <span className="cursor-pointer" onClick={() => window.location = 'tel:+919343210457'}>9343210457 / 9343210457 / 9343210457</span>
                    </h1>
                </div>
            </div>
    )
}