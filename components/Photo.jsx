"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    const [showGif, setShowGif] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowGif(true);
            setTimeout(() => setShowGif(false), 1000); // Show gif for 1 second
        }, 4000); // Total cycle is 4 seconds (3 seconds for photo + 1 second for gif)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-full relative flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="relative flex justify-center items-center"
            >
                {/* Circle */}
                <motion.svg
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16, 25, 92, 72", "4, 250, 22, 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
                {/* Images */}
                <div className="relative w-[260px] h-[260px] xl:w-[460px] xl:h-[460px] overflow-hidden rounded-full">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={showGif ? 'gif' : 'photo'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={showGif ? "/assets/cat-typing.gif" : "/assets/jonathan.jpeg"}
                                priority
                                quality={100}
                                layout="fill"
                                objectFit="cover"
                                alt={showGif ? "Programming GIF" : "Germain's Photo"}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

export default Photo;