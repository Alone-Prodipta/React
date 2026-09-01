import React, { useState } from 'react';
import "../App.css";
import Header from './header.jsx';
import Cards from './card.jsx';
function HomePage() {
    const [color, setColor] = useState('#F26522');
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= 5000) {
            setQuantity(value);
        } else if (e.target.value === '') {
            setQuantity(1);
        }
    };

    return (
        <>
            <Header />
            <div className="w-screen h-screen relative bg-zinc-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                            Welcome to your Notebook!
                        </h1>
                        <p className="text-white text-lg md:text-xl mt-8 text-center max-w-2xl">
                            Connect your thoughts, build your knowledge. Link related notes together to create a powerful web of interconnected ideas. Watch your scattered thoughts transform into a cohesive body of knowledge.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-3">
                            <label htmlFor="colorPicker" className="text-white text-sm font-semibold">
                                Choose a color:
                            </label>
                            <input
                                type="color"
                                id="colorPicker"
                                name="colorPicker"
                                value={color}
                                className="w-16 h-16 rounded-lg cursor-pointer border-2 border-white"
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <br/>
                        <label htmlFor="quantity" className="text-white text-xl font-semibold">
                            Quantity:
                        </label>
                        <br />
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="5000"
                            value={quantity}
                            className="bg-transparent 
                            text-white p-5
                            placeholder:text-gray-400 
                            border 
                            border-gray-400 
                            rounded-lg 
                            w-32 
                            text-center 
                            focus:ring-2 
                            focus:ring-blue-500 
                            focus:outline-none"
                            onChange={handleQuantityChange}
                        />
                    </div>
                </div>
            </div>
            <Cards color={color} quantity={quantity} />
        </>
    );
}
export default HomePage;