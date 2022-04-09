
import Services from './Services';

export default function ServicePage() {
    return (
        <div className="w-100 font-QuickSand font-bold">
            <div className="w-100 bg-green_gradient">
                <div className="md:w-8/12 md:mx-auto h-[15vh] flex items-center justify-center md:justify-start">
                    <h1 className="text-3xl text-green-50">Services</h1>
                </div>
                <div>
                    <Services/>
                </div>
            </div>


        </div>
    );
}