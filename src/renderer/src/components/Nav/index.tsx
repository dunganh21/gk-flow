import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/" className="text-xl font-bold">
        Home
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
