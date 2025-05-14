// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { addToPastes, updateToPastes } from '../redux/pasteSlice';

// const Home = () => {
//     const [title, setTitle] = useState('');
//     const[value,setValue] = useState("");
//     const[searchparam, setsearchparam] = useSearchParams();
//     const pasteId = searchparam.get("pasteId");
//     const dispatch = useDispatch();
//     const allPastes = useSelector((state) => state.paste.pastes);

//     // useEffect(() => {
//     //     if(pasteId){
//     //         const paste = allPastes.find((p) => p._id === pasteId);
//     //         setTitle(paste.title);
//     //         setValue(paste.content);
//     //     }
//     // }, [pasteId])
//     useEffect(() => {
//     if (pasteId) {
//         const paste = allPastes.find((p) => p._id === pasteId);
//         if (paste) {
//             setTitle(paste.title);
//             setValue(paste.content);
//         } else {
//             console.warn("Paste not found for id:", pasteId);
//         }
//     }
// }, [pasteId, allPastes]);


//     function createPaste(){
//         const paste = {
//             title :title,
//             content:value,
//             _id:pasteId || Date.now().toString(36),
//             createdAt:new Date().toISOString(),

//         }
//         if(pasteId){
//             dispatch(updateToPastes(paste));

//         }else{
//             dispatch(addToPastes(paste));
//         }
//         // after creation or updation we want to clear all
        
//         setTitle('');
//         setValue('');
//         setsearchparam({});



//     }
//   return (
//     <div>
//         <div className='flex flex-row gap-6 place-content-between '>
//         <input 
//         className="p-3 rounded-2xl mt-2 w-[66%]"
//         type='text'
//         placeholder='Enter your text'
//         value ={title}
//         onChange={(e) => setTitle(e.target.value)}
//         />

//         <button onClick={createPaste}
//         className="p-2 rounded-2xl mt-2">
//             {
//                 pasteId ? "UpDate My Paste" : "Create My Paste"
//             }
//         </button>
//         </div>
//         <div>
//             <textarea className='mt-6 rounded-2xl p-3'
//                 value = {value}
//                 placeholder='Enter the content Here'
//                 rows={20}
//                 cols={60}
//                 onChange={(e) => setValue(e.target.value)}
//             />
//         </div>
//     </div>
//   )
// }

// export default Home












// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { addToPastes, updateToPastes } from '../redux/pasteSlice';

// const Home = () => {
//     const [title, setTitle] = useState('');
//     const [value, setValue] = useState("");
//     const [searchparam, setsearchparam] = useSearchParams();
//     const pasteId = searchparam.get("pasteId");
//     const dispatch = useDispatch();
//     const allPastes = useSelector((state) => state.paste.pastes);

//     useEffect(() => {
//         if (pasteId) {
//             const paste = allPastes.find((p) => p._id === pasteId);
//             if (paste) {
//                 setTitle(paste.title);
//                 setValue(paste.content);
//             } else {
//                 setTitle('');
//                 setValue('');
//             }
//         } else {
//             setTitle('');
//             setValue('');
//         }
//     }, [pasteId, allPastes]);

//     function createPaste() {
//         const paste = {
//             title: title,
//             content: value,
//             _id: pasteId || Date.now().toString(36),
//             createdAt: new Date().toISOString(),
//         }
//         if (pasteId) {
//             dispatch(updateToPastes(paste));
//         } else {
//             dispatch(addToPastes(paste));
//         }
//         setTitle('');
//         setValue('');
//         setsearchparam({});
//     }

//     return (
//         // <div className="min-h-screen bg-[#18181b] flex flex-col items-center">
//         <div> 
            

            
//             <div className="w-full max-w-3xl mt-6 bg-[#232329] rounded-2xl shadow-lg border border-[#35353b] p-8">
//                 <input
//                     className="w-full mb-6 px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder-gray-400 focus:outline-none text-lg font-semibold"
//                     type="text"
//                     placeholder="Enter your title *"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <textarea
//                     className="w-full min-h-[250px] mb-6 bg-[#18181b] text-gray-200 font-mono text-base px-4 py-3 rounded-xl border border-[#27272a] focus:outline-none resize-none"
//                     placeholder="Enter the content here"
//                     value={value}
//                     rows={12}
//                     onChange={(e) => setValue(e.target.value)}
//                 />
//                 <div className="flex justify-end">
//                     <button
//                         onClick={createPaste}
//                         className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow transition"
//                     >
//                         {pasteId ? "Update My Paste" : "Create My Paste"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;


















import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState("");
    const [error, setError] = useState('');
    const [searchparam, setsearchparam] = useSearchParams();
    const pasteId = searchparam.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            if (paste) {
                setTitle(paste.title);
                setValue(paste.content);
            } else {
                setTitle('');
                setValue('');
            }
        } else {
            setTitle('');
            setValue('');
        }
    }, [pasteId, allPastes]);

    function createPaste(e) {
        e.preventDefault();
        if (!title.trim()) {
            setError('Title is required!');
            return;
        }
        setError('');
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        if (pasteId) {
            dispatch(updateToPastes(paste));
        } else {
            dispatch(addToPastes(paste));
        }
        setTitle('');
        setValue('');
        setsearchparam({});
    }

    return (
        <div>

            {/* Centered Paste Form */}
            <form
                onSubmit={createPaste}
                className="w-full max-w-3xl mt-6  bg-[#232329] rounded-2xl shadow-lg border border-[#35353b] p-8"
                autoComplete="off"
            >
                <input
                    className="w-full mb-3 px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder-gray-400 focus:outline-none text-lg font-semibold"
                    type="text"
                    placeholder="Enter your title *"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if (e.target.value.trim()) setError('');
                    }}
                />
                {error && (
                    <div className="mb-3 text-red-400 text-sm">{error}</div>
                )}
                <textarea
                    className="w-full min-h-[250px] mb-6 bg-[#18181b] text-gray-200 font-mono text-base px-4 py-3 rounded-xl border border-[#27272a] focus:outline-none resize-none"
                    placeholder="Enter the content here"
                    value={value}
                    rows={12}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className={`px-6 py-3 font-semibold rounded-xl shadow transition
                            ${title.trim()
                                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                            }`}
                        disabled={!title.trim()}
                    >
                        {pasteId ? "Update My Paste" : "Create My Paste"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Home;
