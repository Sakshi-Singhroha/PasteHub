
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



import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-[70%] mx-auto flex justify-center">
      <div className="flex gap-8 px-8 py-4 bg-[#232329] border border-[#35353b] rounded-2xl shadow-lg">
        <NavLink
          to="/"
          className="text-blue-400 font-semibold text-lg hover:underline"
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className="text-blue-400 font-semibold text-lg hover:underline"
        >
          paste
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
