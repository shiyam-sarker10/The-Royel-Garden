import React from 'react';
import Lottie from "lottie-react";
import error from "../../../public/error.json";
import loading from "../../../public/loading.json";


export const ErrorLottie = () => {
    return <Lottie animationData={error}></Lottie>;
}
export const PrivateLoading = () => {
    return <Lottie animationData={loading}></Lottie>;
}