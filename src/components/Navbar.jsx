import { useState } from "react"
import { navLinks } from "../constants"

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
          <button className="md:hidden hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <div className="hamburger-icon">
              <span className="block w-5 h-0.5 bg-neutral-400"></span>
              <span className="block w-3 h-0.5 bg-neutral-400"></span>
              <span className="block w-2 h-0.5 bg-neutral-400"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label} onClick={toggleMobileMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
export default NavBar
