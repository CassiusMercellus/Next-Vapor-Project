import Image from 'next/image'
import PFP from '../../../images/pfp.png'


export default function Pointshop() {
    return (
        <>
            <div className="flex flex-col bg-gray-950 w-full mt-4 p-4 rounded-md">
                <div className="flex flex-col rounded-sm">
                    <p className="text-sm text-gray-500">Point Shop Items</p>
                    <div className="flex flex-row justify-evenly mt-2">
                        <Image
                            className="rounded-sm w-1/5 p-2" 
                            src={PFP} 
                            alt="Picture of the user"
                             
                        />
                        <Image
                            className="rounded-sm w-1/5 p-2" 
                            src={PFP} 
                            alt="Picture of the user"
                            
                        />
                        <Image
                            className="rounded-sm w-1/5 p-2" 
                            src={PFP} 
                            alt="Picture of the user"
                              
                        />
                        <Image
                            className="rounded-sm w-1/5 p-2" 
                            src={PFP} 
                            alt="Picture of the user"
                            
                        />

                        <div className="bg-gray-700 flex justify-center items-center w-1/5 m-2">
                            <p className="text-sm text-gray-500">+42</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

