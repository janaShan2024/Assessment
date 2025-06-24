import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkClass =
    'px-4 py-2 rounded-full font-medium transition-colors duration-200'
  const activeClass = 'bg-gray-600 text-white'
  const inactiveClass = 'text-gray-300 hover:bg-gray-800'

  return (
    <header className=" text-white shadow-md sticky top-0 z-50 bg-black">
      <div className=" mx-auto px-6 py-4 flex justify-start items-center w-full border">
        <h1 className="text-xl font-bold w-1/3">AH Academy</h1>
        <nav className="space-x-2 w-1/4">
          
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Chat
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Go to Home
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
