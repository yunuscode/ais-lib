import { useLottie } from "lottie-react";
// @ts-ignore
import leadboard from '../../files/leadboard.json';
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function LottieIcon({ isActive, height = 30, width = 30 }: AnimatedIconProps) {

    const { View, stop, play, goToAndStop } = useLottie({
        loop: false,
        autoPlay: false,
        animationData: leadboard
    }, {
        width: width, height: height,
    })

    stop();

    useEffect(() => {
        if (isActive) {
            play();
        } else {
            goToAndStop(1)
        }
    }, [isActive]);


    return (
        <div>
            { View }
        </div>
    );
}

interface AnimatedIconProps {
    isActive: boolean;
    width?: number;
    height?: number;
}