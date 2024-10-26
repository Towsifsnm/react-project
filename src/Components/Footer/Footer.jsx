import './Footer.css'

const Footer = () => {
    return (
        

        <div>
            <footer className="justify-items-center p-10 footer1 border-2 rounded-2">
  
   
  <form>
    <h6 className="text-3xl font-bold ">Subscribe to our Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Get the latest updates and news right in your inbox! </span>
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <div>
        <button className=" btn  ">Subscribe</button>
        </div>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;