import { FaTrash } from "react-icons/fa";
import Cartdlc from "./components/cart/cartdlc";
import Cartgames from "./components/cart/cartgames";

export default function Cart() {
    return (
        <>
            <div className=" bg-gradient-to-b from-slate-950 to-cyan-950 py-8">
                <div className="px-48">
                    <h1 className="text-4xl font-bold my-5">User's Shopping Cart</h1>
                </div>
                <div className="flex flex-row gap-5 px-48">
                    <div className="w-3/4 flex flex-col gap-5">

                        <Cartgames />
                        <Cartgames />
                        <Cartgames />
                        



                        <div className="bg-gray-950 grid grid-cols-2 grid-rows-2 p-5 gap-10">
                            <div className="flex flex-row gap-10 w-full items-center">
                                <p className="text-lg font-bold">Estimated Total</p>
                            </div>
                            <div className="flex flex-row gap-10 w-full justify-end items-center">
                                <p className="text-lg font-bold">$150.99</p>
                                <div className="bg-gray-900 p-2 rounded-sm">
                                    <FaTrash className="text-red-500" />
                                </div>
                                
                            </div>
                            
                            <div className="flex w-full">
                                <div className="pt-10">
                                    <p className="bg-gray-900 p-2 px-8 rounded-sm">Continue Shopping</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5 w-full justify-end pt-10">
                                <h1 className="bg-sky-600 p-2 rounded-sm">Purchase as a Gift</h1>
                                <h1 className="bg-sky-600 p-2 rounded-sm">Purchase for Myself</h1>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/4">
                        <h1 className="text-xl font-bold my-5">DLCs you might be interested in</h1>
                        <div className="flex flex-col gap-5">

                            <Cartdlc />
                            <Cartdlc />

                        </div>
                    </div>
                </div>
                
            </div>
        
        </>
    )
}