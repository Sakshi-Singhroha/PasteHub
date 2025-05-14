// import React ,{ useState }from 'react'
// import { useDispatch, useSelector} from 'react-redux'
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';


// import { removeFromPastes, updateToPastes } from '../redux/pasteSlice';

// const pastes = () => {
// // to fetch oveerall data in state
//     const pastes = useSelector((state)=> state.paste.pastes);
//     const [searchTerm ,setsearchTerm] = useState('');
//     const dispatch = useDispatch()
//     const filtereData = pastes.filter((paste) =>paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
//     function handleDelete(pasteId) {
//         dispatch(removeFromPastes(pasteId));

//     }
    
//   return (
//     <div>
//         <input className='mt-5 p-1 pl-3 rounded-2xl min-w-[600px]'
//         type='search'
//         placeholder='Search here'
//         value={searchTerm}
//         onChange={(e)=> setsearchTerm(e.target.value)}
//         />
//         <div className='flex flex-col gap-5'>
//             {
//                 filtereData.length > 0 &&
//                 filtereData.map(
//                     (paste) => {
//                          return (
//                             <div className='border mt-5' key={paste._id}>
//                                <div>
//                                  {paste.title}
//                                </div>
//                                <div>
//                                 {paste.content}
//                                </div>
//                                <div className='flex flex-row gap-4 place-content-evenly'>
//                                 <button  >
                                    
//                                     <Link to ={`/?pasteId=${paste._id}`}>
                                       
//                                          Edit
//                                     </Link>
//                                 </button>
//                                 <button >
//                                     <Link to ={`/pastes/${paste?._id}`}>
//                                         View
                                        

//                                     </Link>
                                    
//                                 </button>
//                                 <button onClick={() => {navigator.clipboard.writeText(paste?.content)
//                                     toast.success("copied to clipboard")
//                                 }}>
//                                     copy
//                                 </button>
//                                 <button onClick={() =>handleDelete(paste?._id)}>
//                                     Delete
//                                 </button>
//                                 <button>
//                                     Share
//                                 </button>
//                                 {/* <button onClick={() => {
//                                     const shareUrl = `${window.location.origin}/pastes/${paste._id}`;
//                                     navigator.clipboard.writeText(shareUrl);
//                                     toast.success("Link copied to clipboard!");
//                                 }}>
//                                     Share
//                                 </button> */}

                               
//                                </div>
//                                 <div>
//                                   {paste.createdAt}   
                                
//                                 </div>
//                             </div>

//                         )

//                     }
                       
//                 )
//             }

//         </div>

//     </div>
//   )
// }

// export default pastes



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { removeFromPastes } from '../redux/pasteSlice';
import { CalendarDays, Edit2, Eye, Trash2, Share2, Copy } from 'lucide-react';

const Pastes = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filteredData = pastes.filter((paste) =>
        paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }

    const truncateText = (text, length = 100) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <div className='p-5'>
            <input
                className='mt-5 p-2 pl-3 rounded-2xl w-full bg-gray-800 text-white'
                type='search'
                placeholder='Search here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className='flex flex-col gap-5 mt-6'>
                {filteredData.map((paste) => (
                    <div
                        key={paste._id}
                        className='border border-gray-700 p-5 rounded-xl bg-black text-white relative'
                    >
                        <div className='flex justify-between items-start'>
                            <div>
                                <div className='text-2xl font-bold'>{paste.title}</div>

                                {/* Always show truncated content, no toggle */}
                                <div className='text-md mt-2 whitespace-pre-line'>
                                    {truncateText(paste.content, 100)}
                                </div>
                            </div>

                            <div className='flex flex-col items-end gap-2'>
                                <div className='flex gap-2'>
                                    <Link to={`/?pasteId=${paste._id}`}>
                                        <button title="Edit" className='p-2 hover:bg-gray-800 rounded-lg'>
                                            <Edit2 size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        title="Delete"
                                        className='p-2 hover:bg-gray-800 rounded-lg'
                                        onClick={() => handleDelete(paste._id)}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                    <button
                                        title="Share"
                                        className='p-2 hover:bg-gray-800 rounded-lg'
                                        onClick={() => {
                                            const shareUrl = `${window.location.origin}/pastes/${paste._id}`;
                                            navigator.clipboard.writeText(shareUrl);
                                            toast.success("Link copied to clipboard!");
                                        }}
                                    >
                                        <Share2 size={18} />
                                    </button>
                                    <Link to={`/pastes/${paste._id}`}>
                                        <button title="View" className='p-2 hover:bg-gray-800 rounded-lg'>
                                            <Eye size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        title="Copy Content"
                                        className='p-2 hover:bg-gray-800 rounded-lg'
                                        onClick={() => {
                                            navigator.clipboard.writeText(paste.content);
                                            toast.success("Copied to clipboard");
                                        }}
                                    >
                                        <Copy size={18} />
                                    </button>
                                </div>

                                <div className='flex items-center gap-3 text-gray-400 text-sm'>
                                    <CalendarDays size={14} />
                                    {new Date(paste.createdAt).toLocaleDateString(undefined, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* <div className='absolute bottom-4 right-5'>
                            <span className="px-3 py-1 rounded-lg border border-gray-600 text-sm bg-black text-green-400 font-mono shadow-md">
                                <span className='bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text'>CODE</span>
                            </span>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pastes;
