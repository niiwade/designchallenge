import siteMetadata from '../../src/siteMetadata'
import headerNavLinks from '../../src/headerNavLinks'
import Logo from '../../src/logo.png'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import TeamSwitcher from './team-switcher'
import { Search } from './search'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'

const Header = () => {
  return (


<>


{/* <header className="flex items-center justify-between py-10 m-12">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-8">
              <Image 
              height={50}
              src="/logo.png"
              width={50}
              alt='logo'
              />
            </div>
           <TeamSwitcher/>
          </div>
        </Link>
      </div>
      <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">

    {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="lg:mr-12"
            >
              {link.title}
            </Link>
          ))}
        

    </ul>
    <hr className="mt-4 w-full lg:hidden" />
    <div className="my-4 flex items-center space-x-2 space-y-2 lg:my-0 lg:ml-auto lg:space-x-2 lg:space-y-0">
    <Image 
      src='/bell.png'
      width={40}
      height={40}
      alt='notification'
      />
         <Image 
      src='/gift.png'
      width={40}
      height={40}
      alt='notification'
      />
      <Search/>

    </div>
  </nav>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
    
        <MobileNav />
      </div>
    </header> */}


<header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black">
    <span className="mr-2 w-8">
      <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
    </span>
    spline
  </a>
  <input type="checkbox" className="peer hidden" id="navbar-open" />
  <label className="absolute top-5 right-5 cursor-pointer lg:hidden" >
    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Components</a></li>
      <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Pricing</a></li>
      <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Contact</a></li>
      <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">FAQ</a></li>
    </ul>
    <hr className="mt-4 w-full lg:hidden" />
    <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
      <a href="#" title="" className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"> Log in </a>
      <a href="#" title="" className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600">Get free trial</a>
    </div>
  </nav>
</header>




</>






    
  
  )
}

export default Header
