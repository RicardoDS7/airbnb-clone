"use client";

import Modal from "./Modals";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {

    const signupModal = useSignupModal()

    const content = (
        <>
        <h2 className="mb-6 text-2xl">Welcome to DjangoBNB, please login</h2>

        <form className="space-y-4">
            <input type="email" placeholder="Your email address" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <input type="password" placeholder="Your password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <input type="password" placeholder="Re-enter password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

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
        isOpen={signupModal.isOpen}
        close={signupModal.close}
        label="Log in"
        content={content}
        />
    )
}

export default SignupModal;