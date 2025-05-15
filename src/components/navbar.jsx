
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const navbar = () => {
//   return (
//     <div className= "flex flex-row gap-4">
//         <NavLink to= "/">
            
//             Home
//         </NavLink >
//         <NavLink to = "/pastes">
//             paste
//         </NavLink>
//     </div>
//   )
// }

// export default navbar



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className="w-[70%] mx-auto gap-12 flex flex-row justify-center">
//       <div className="flex gap-9 px-8 py-4 bg-[#232329] border border-[#35353b] rounded-2xl shadow-lg">
//         <NavLink
//           to="/"
//           className="text-blue-400 font-semibold text-lg gap-8 hover:underline"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/pastes"
//           className="text-blue-400 font-semibold text-lg hover:underline"
//         >
//           Paste
//         </NavLink>
//       </div>
//     </nav>
//   )
// }

// export default Navbar













// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './navbar.css'; // Make sure this is imported

// const Navbar = () => {
//   return (
//     <nav className="navbar-outer">
//       <div className="navbar-inner">
//         <NavLink to="/" className="nav-link" end>
//           Home
//         </NavLink>
//         <NavLink to="/pastes" className="nav-link">
//           Paste
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="w-full flex justify-center py-6">
//       {/* The parent div must be 'flex' for 'gap-10' to work */}
//       <div className="flex flex-row items-center gap-10 px-8 py-4 bg-[#232329] border border-[#35353b] rounded-2xl shadow-lg">
//         <NavLink
//           to="/"
//           className="text-blue-400 font-semibold text-lg hover:underline"
//           end
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/pastes"
//           className="text-blue-400 font-semibold text-lg hover:underline"
//         >
//           Paste
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center py-6">
      {/* This div MUST be flex and have gap-10 */}
      <div className="flex gap-10 px-8 py-4 bg-[#232329] border border-green-600 rounded-2xl shadow-lg">
        <NavLink
          to="/"
          className="text-green-400 font-semibold text-lg hover:underline"
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className="text-green-400 font-semibold text-lg hover:underline"
        >
          Paste
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
