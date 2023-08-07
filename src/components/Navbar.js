import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../images/mainLogo.png'
const Navbar = () => {
    const navItems = <>
        <li className='text-xl'><a href='/'>Home</a></li>
        <li className='text-xl'><a href='/details'>Project Detail</a></li>
        <li className='text-xl'><a href='/gallery'>Gallery</a></li>
        <li className='text-xl'><a href='/achivement'>Achivement</a></li>
        <li className='text-xl'><a href='/team'>The Team</a></li>
        <li className='text-xl'><a href='/contact'>Contact</a></li>
    </>
    return (
        <section className="bg-[#edffd0d0] h-16 fixed w-full z-40">
            <div className="navbar p-0 ">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <RxHamburgerMenu />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow  rounded-box w-max">
                            {navItems}
                        </ul>
                    </div>
                    {/* className="btn btn-ghost normal-case text-xl">Team Attandent */}
                    <a href='/' ><img src={logo} className='w-24 absolute top-5 left-20' alt="" /></a>
                </div>
                <div className=" hidden mx-auto lg:flex md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </section >
    );
};

export default Navbar;