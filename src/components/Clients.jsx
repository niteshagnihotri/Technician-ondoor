
import lg from '../images/lg.png';
import samsung from '../images/samsung.png';
import whirlpool from '../images/whirlpool.jpg';
import godrej from '../images/godrej.png';
import Videocon from '../images/Videocon.png';
import hitachi from '../images/hitachi.png';
import haier from '../images/haier.png';
import huawei from '../images/huawei.png';
import siemens from '../images/Siemens.png';
import bluestar from '../images/bluestar.png';
import bosch from '../images/bosch.png';
import Onida from '../images/onida.png';
import ps from '../images/ps.jpeg';
import bpl from '../images/bpl.png';
import '../App.css';
import { motion } from 'framer-motion';

export default function Clients() {
    return (
       
    <div className="w-100 flex h-auto items-center pb-10">
        <div className="w-10/12 lg:w-9/12 mx-auto flex flex-col my-12">
                <motion.h2  initial={{opacity: 0, y: 3}} whileInView={{opacity: 1, y:0}} transition={{ delay: 0.3, type: "spring", stiffness: 100}} viewport={{ once: true }} className="text-center text-2xl sm:text-4xl tracking-wider leading-loose md:leading-0 font-QuickSand font-bold">We Service <span className="text-red-800 font-extrabold ">All Makes & Models
                </span></motion.h2>
            <div className='w-48 my-2 py-1 border-b-4 border-b-red-400 sm:mx-auto ' />

                <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.4, type: "tween", stiffness: 100}} viewport={{ once: true }} className="w-auto flex lg:flex-row py-14 md:my-0 overflow-auto no-scrollbar space-x-10 scroll-smooth">
                    <img className="companiesimg" src={lg} alt="lg electronic item repair service" />
                    <img className="companiesimg" src={samsung} alt="samsung electronic item repair service" />
                    <img className="companiesimg" src={whirlpool} alt="whirlpool electronic item repair service" />
                    <img className="companiesimg" src={godrej} alt="godrej electronic item repair service" />
                    <img className="companiesimg" src={Videocon} alt="Videocon electronic item repair service" />
                    <img className="companiesimg" src={hitachi} alt="hitachi electronic item repair service" />
                    <img className="companiesimg" src={haier} alt="haier electronic item repair service" />
                    <img className="companiesimg" src={bosch} alt="bosch electronic item repair service" />
                    <img className="companiesimg" src={Onida} alt="Onida electronic item repair service" />
                    <img className="companiesimg" src={siemens} alt="siemens electronic item repair service" />
                    <img className="companiesimg" src={bluestar} alt="bluestar electronic item repair service" />
                    <img className="companiesimg" src={ps} alt="ps electronic item repair service" />
                    <img className="companiesimg" src={huawei} alt="huawei electronic item repair service" />
                    <img className="companiesimg" src={bpl} alt="bpl electronic item repair service" />
                </motion.div>
            </div>
        </div>

    );
}