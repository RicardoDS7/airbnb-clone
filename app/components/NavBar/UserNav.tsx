import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const UserNav = () => {

    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button className="flex items-center">
                <IoMenu />

                <FaRegUser  />
            </button>

        </div>
    )
}

export default UserNav;