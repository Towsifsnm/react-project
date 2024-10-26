 import './Banner.css'
import banner from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto justify-items-center p-4  banner'>
            <img src={banner} alt="" />
            <h1 className=' text-white text-4xl font-bold mt-3'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='mt-3 text-white'>Beyond Boundaries Beyond Limits</p>
            <button className='border-4 font-bold p-2 mt-3 rounded-xl btn'>Claim Free Credit</button>
             
        </div>
    );
};

export default Banner;