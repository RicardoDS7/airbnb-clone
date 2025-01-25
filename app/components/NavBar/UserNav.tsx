"use client";
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";

const UserNav = () => {

    const loginModal = useLoginModal();
    const signupModal = useSignupModal();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button className="flex items-center"
                onClick={() => setIsOpen(!isOpen)}>

                <IoMenu />

                <FaRegUser  />
            </button>

            {isOpen && (
                <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
                    <MenuLink 
                        label="Login"
                        onClick={() => {
                            setIsOpen(false);
                            loginModal.open();
                            console.log("Clicked Login")}}
                        />

                    <MenuLink 
                        label="Sign-up"
                        onClick={() => {
                            setIsOpen(false);
                            signupModal.open();
                            console.log("Clicked Sign-up")}}
                        />
                </div>
            )}

        </div>
    )
}

export default UserNav;