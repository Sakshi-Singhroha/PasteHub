
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useSearchParams } from 'react-router-dom';
// import { addToPastes, updateToPastes } from '../redux/pasteSlice';

// const viewpaste = () => {
//     const {id} = useParams();
//     const allPastes = useSelector((state) => state.paste.pastes);
//     const paste = allPastes.find((p) =>p._id === id);
//   return (
//     <div>
//         <div className='flex flex-row gap-6 place-content-between '>
//         <input 
//         className="p-3 rounded-2xl mt-2 w-[66%]"
//         type='text'
//         placeholder='Enter your text'
//         value ={paste.title}
//         disabled
//         onChange={(e) => setTitle(e.target.value)}
//         />

        
//         </div>
//         <div>
//             <textarea className='mt-6 rounded-2xl p-3'
//                 value = {paste.content}
//                 disabled
//                 placeholder='Enter the content Here'
//                 rows={20}
//                 cols={60}
//                 onChange={(e) => setValue(e.target.value)}
//             />
//         </div>
//     </div>
//   )
// }

// export default viewpaste 




import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

const ViewPaste = () => {
    const { id } = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.find((p) => p._id === id);

    if (!paste) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#18181b]">
                <div className="text-gray-300 text-xl">Paste not found.</div>
            </div>
        );
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(paste.content);
        toast.success("Copied to clipboard!");
    };

    return (
        // <div className="min-h-screen bg-[#18181b] flex flex-col items-center pt-8">
            <div className="w-full  max-w-3xl rounded-2xl bg-[#232329] shadow-lg border border-green-400">
                {/* Window header with circles and copy button */}
                <div className=" flex items-center justify-between gap-5 px-4 py-2 border-b border-green-200 rounded-t-2xl bg-[#232329]">
                    <div className="flex space-x-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                    </div>
                    <div className="w-full flex justify-center py-4">
                    <span className="text-white text-xl font-semibold">{paste.title}</span>
                    </div>
                    <button
                        className="p-2 hover:bg-[#35353b] rounded-lg transition"
                        onClick={handleCopy}
                        title="Copy Code"
                    >
                        <Copy size={18} className="text-gray-300" />
                    </button>
                </div>
                {/* Title centered */}
                
                {/* Code Content */}
                <pre className="bg-[#232329] text-gray-200 font-mono text-sm px-6 py-4 rounded-b-2xl overflow-x-auto whitespace-pre-wrap min-h-[300px]">
                    {paste.content}
                </pre>
            </div>
        // </div>
    );
};

export default ViewPaste;




