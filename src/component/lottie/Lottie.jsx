import React from 'react';
import Lottie from "lottie-react";
import error from "../../../public/error.json";
import loading from "../../../public/loading.json";
import noProduct from "../../../public/search.json";
import hotel from "../../../public/hotel.json";


export const ErrorLottie = () => {
    return <Lottie animationData={error}></Lottie>;
}
export const PrivateLoading = () => {
    return <Lottie animationData={loading}></Lottie>;
}
export const NoProduct = () => {
    return <Lottie animationData={noProduct}></Lottie>;
}
export const Hotel = () => {
    return <Lottie animationData={hotel}></Lottie>;
}