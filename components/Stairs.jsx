import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top:"100%",
    },
    exit: {
        top: ["100%", "0%",]
    },
};

// Calculate the reverse index for staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
    return <>
    {/*render 6 motion divs, each representing a step of the stairs.
    Each div will have the same animation defined by the stairsAnimation object. 
    The delay for ech div is calculated sinomicaly based on it's reversed indesx, 
    creating a staggered effect with decreasing delay for each subsequesnt step.

    */}
    {[...Array(6)].map((_, index)=> {
        return (
            <motion.div 
                key={index} 
                variants={stairAnimation} 
                initial="initial"
                animate="animate" 
                exit="exit" 
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
            />
        );
    })}
    </>
};

export default Stairs