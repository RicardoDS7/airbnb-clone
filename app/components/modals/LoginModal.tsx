"use client";

import Modal from "./Modals";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {

    const loginModal = useLoginModal()

    const content = (
        <>
        <h2 className="mb-6 text-2xl">Welcome to DjangoBNB, please login</h2>

        <form className="space-y-4">
            <input type="email" placeholder="Your email address" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <input type="password" placeholder="Your password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

            <div className="p-5 bg-airbnb text-white rounded-xl opacity-60">
                Error Message
            </div>

            <CustomButton 
                label="Submit"
                onClick={() => console.log("Submit login")}
            />
        </form>
        </>

    )
    return (
        <Modal 
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Log in"
        content={content}
        />
    )
}

export default LoginModal;