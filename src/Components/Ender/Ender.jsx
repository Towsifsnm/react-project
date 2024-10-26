 import foot from '../../assets/logo-footer.png'
import './Ender.css'
const Ender = () => {
    return (
        <div className='  bg-black text-white  '>
             <div className='justify-items-center p-4'>
        <img src={foot} alt="" />
            </div>
            <footer className="footer  p-10 grid grid-cols-3 ">
           
  <nav className='ml-4'>
    <h6 className="">About Us</h6>
    <div className='text-gray-500'>
    <p className=''>We are a passionate team</p>
     <p>dedicated to providing the best</p>
     <p>services to our customers.</p>
    </div>
  </nav>
  <nav>
    <h6 className="">Quick Links</h6>
      <ul className='text-gray-500'>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
  </nav>
  
  <form>
    <h6 className="">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="text-gray-500">Subscribe to our newletter for the <br />latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item text-black">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
<div  >
    <hr />
</div>
<div className='justify-items-center'>
    <p className='text-gray-500 pt-2 pb-2'>@2024 Your Company All Rights Reserved</p>
</div>
        </div>
    );
};

export default Ender;