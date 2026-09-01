import React from "react";
import { useRef } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { motion } from "motion/react";
function Cards({ reference, color, quantity = 1 }) {
    let items = [];
    for (let i = 1; i <= quantity; i++) {
        items.push(
            <motion.div drag dragConstraints={reference}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} key={i} className="relative w-50 h-70 bg-white rounded-2xl p-2 m-3 my-7 text-black text-2xl float-left overflow-hidden">
                <HiDocumentAdd />
                <textarea
                    placeholder="Write something..."
                    className="text-sm mt-5 w-full h-35 resize-none bg-transparent outline-none text-black" />


                <footer className="absolute bottom-0  w-full h-15 left-0" style={{ backgroundColor: color|| '#F26522' }}>

                </footer>

            </motion.div >
        );
    }

    return (
        <>
            {items}
        </>
    );
}

export default Cards;
