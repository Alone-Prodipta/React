import React from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { LuDownload } from "react-icons/lu";
import { motion } from "motion/react";
function Cards() {
   // const ref= useRef(null);
    // Create an array of elements using a for loop
    let items = [];
    for (let i = 1; i <= 1; i++) {
        items.push(
            <motion.div drag key={i} className="relative w-50 h-70 bg-white rounded-2xl p-2 m-3 my-7 text-black text-2xl float-left overflow-hidden">
                <HiDocumentAdd />
                <p className="text-sm mt-5 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatibus?</p>

                <footer className="absolute bottom-15 bg-white w-full h-10 left-0 items-center flex justify-between">
                    <h5 className="text-black text-sm font-bold mx-2 my-4">0.4mb</h5>
                    <LuDownload />
                </footer>
                <footer className="absolute bottom-0 bg-blue-700 w-full h-15 left-0">

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
