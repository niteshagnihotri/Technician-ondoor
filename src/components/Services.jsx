import { motion } from "framer-motion";

export default function Services() {

    const img = "data:image/jpeg;base64,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";

    return (
        <div className="py-16 bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="md:w-9/12 md:mx-auto m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="mb-12 space-y-5 text-center">
                <motion.p initial={{opacity: 0, y: 3}} whileInView={{opacity: 1, y:0}} transition={{ delay: 0.5, type: "spring", stiffness: 100}} viewport={{ once: true }}  className="font-QuickSand tracking-widest leading-loose font-bold text-xl md:text-2xl">Services We Offer</motion.p>
 <h1 className="text-4xl text-slate-800 md:text-4xl pb-3 font-QuickSand font-bold px-10 md:px-0">We Repair</h1></div>
               
             
                <div className="space-y-10 mx-5">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100}} viewport={{ once: true }} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F07%2F20%2Fair-conditioner-size-2000.jpg" alt="art cover" loading="lazy" width="1000" height="667" 
                            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">Air Conditioner </h4>
                                        <p className="text-gray-600">We are known for our efficient and reliable AC repair and maintenance services. Our costs are economical, and services are second to none. </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100}} viewport={{ once: true }} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://www.lg.com/in/images/refrigerators/md07529192/gallery/GR-X31FMQHL-Refrigerators-Food-Front-Light-On-D-01.jpg" alt="art cover" loading="lazy" width="1000" height="667" 
                            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">Refrigerator</h4>
                                        <p className="text-gray-600">Our engineers are highly experienced and certified to handle different refrigerators of different brands.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100}} viewport={{ once: true }} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src={img} alt="art cover" loading="lazy" width="1000" height="667" 
                            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">Washing Machine</h4>
                                        <p className="text-gray-600">We can repair any washing machine of any brand and can troubleshoot a wide range of technical issues. </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity:0, scale: 0.6 }} whileInView={{ opacity:1, scale: 1 }} transition={{ delay: 0.3, type: "tween", stiffness: 100}} viewport={{ once: true }} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0vKkkPvRmwh-59rgXsocyG9QZeJ5fEFFxw&usqp=CAU" alt="art cover" loading="lazy" width="1000" height="667" 
                            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">Water Purifier</h4>
                                        <p className="text-gray-600">If you face any problem related to your water purifiers or it is not working at all or it is unable to heat food, then you can call us. </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}