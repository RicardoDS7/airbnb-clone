import { FaSwimmingPool } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdOutlineVilla } from "react-icons/md";
import { MdOutlineCottage } from "react-icons/md";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
                <FaSwimmingPool />
                <span className="text-xs font-semibold">Swimming Pool</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
                <FaUmbrellaBeach />
                <span className="text-xs font-semibold">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
                <MdOutlineVilla />
                <span className="text-xs font-semibold">Villa</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
                <MdOutlineCottage />
                <span className="text-xs font-semibold">Cabins</span>
            </div>
           
        </div>
    )
}

export default Categories;