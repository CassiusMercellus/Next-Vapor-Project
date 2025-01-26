import { FaCheck } from "react-icons/fa";

export default function Languages() {
    return (
        <>
            <div className="bg-gray-950 mt-4 rounded-lg p-4 w-full">
                <h2 className="text-sm text-gray-400 mb-2">Languages</h2>

                <div className="flex">
                    <div className="w-1/4"></div>
                    <div className="w-1/4"><p className="text-sm text-gray-400 mb-2">Interface</p></div>
                    <div className="w-1/4"><p className="text-sm text-gray-400 mb-2">Subtitles</p></div>
                    <div className="w-1/4"><p className="text-sm text-gray-400 mb-2">Full Audio</p></div>
                </div>

                <div className="flex flex-col w-full gap-1">
                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className="w-1/4"><p className="text-white text-xs">English</p></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className="w-1/4"><p className="text-white text-xs">French</p></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className="w-1/4"><p className="text-white text-xs">Italian</p></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className="w-1/4"><p className="text-white text-xs">German</p></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className="w-1/4"><p className="text-white text-xs">Spanish</p></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"><FaCheck className="text-blue-400" /></div>
                        <div className="w-1/4 pl-4"></div>
                    </div>

                    <p className="text-blue-600 text-xs my-1">See all 14 supported languages</p>
                </div>
            </div>

        </>
    )
}