import tel from '../images/telephone.png';
import map from '../images/booking.png';
import wallet from '../images/wallet.png';
import {BsArrowRight} from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function Steps() {
    return (
        <div className="text-center py-14 bg-slate-100 font-QuickSand font-semibold">
            <div className="tracking-wide py-3">
                <motion.h1 initial={{opacity: 0, y: 3}} whileInView={{opacity: 1, y:0}} transition={{ delay: 0.4, type: "spring", stiffness: 100}} viewport={{ once: true }}  className="text-3xl md:text-4xl pb-3 font-Karla">HOW IT WORKS</motion.h1>
                <motion.p initial={{opacity: 0, y: -3}} whileInView={{opacity: 1, y:0}} transition={{ delay: 0.4, type: "spring", stiffness: 100}} viewport={{ once: true }}  className="text-lg md:text-xl">3 simple steps to avail Service</motion.p>
            </div>
            <div className='w-100 py-12'>
                <div className="md:w-9/12 md:mx-auto md:flex md:justify-between space-y-10 md:space-y-0">
                    <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.4, type: "tween", stiffness: 100}} viewport={{ once: true }} className="space-y-5 text-center">
                        <img src={tel} alt="" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-lg'>Book Online or Phone</h1>
                    </motion.div>
                    <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.4, type: "tween", stiffness: 100}} viewport={{ once: true }} className="flex items-center">
                        <BsArrowRight className="text-6xl mx-auto  text-slate-500 font-semibold"/>
                    </motion.div>
                    <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.4, type: "tween", stiffness: 100}} viewport={{ once: true }} className="space-y-5 text-center">
                        <img src={map} alt="" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-lg'>Get Booking Confirmation</h1>
                    </motion.div>
                    <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.4, type: "tween", stiffness: 100}} viewport={{ once: true }} className="flex items-center">
                        <BsArrowRight className="text-6xl mx-auto  text-slate-500 font-semibold"/>
                    </motion.div>
                    <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.4, type: "tween", stiffness: 100}} viewport={{ once: true }} className="space-y-5 text-center">
                        <img src={wallet} alt="" className='w-24 md:w-20 mx-auto' />
                        <h1 className='text-lg'>Pay after Work is Done</h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}