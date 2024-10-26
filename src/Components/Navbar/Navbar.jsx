import logo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto p-4'>
            <div >
        <img src={logo} alt="" />
            </div>

            <div className='flex  items-center gap-3  '>
                 <p className='p'>Home</p>
                 <p className='p'>Fixture</p>
                 <p className='p'>Teams</p>
                 <p className='p'>Schedules</p>
                 <button className='border-2 rounded-xl p-2'>Coin</button>
            </div>
        </div>
    );
};

export default Navbar;