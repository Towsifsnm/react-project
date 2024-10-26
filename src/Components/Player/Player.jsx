  
import './Player.css'

export default function Player({player} ){
  console.log(player)
 const {name,image,country,flag,profileImage,role, battingType, bowlingType, biddingPrice} =player;
    return (
        <div className='card rounded-xl gap-3 mr-2 mt-2 '>
           
            
        <div className='p-4 '>
        <img className='w-full h-52' src={image} alt="" />
        </div>

        <div className='flex gap-4 '>
            <img className='w-6 rounded-3xl ml-3' src={profileImage} alt="" />
            <p>{name}</p>
        </div>
       <div className='flex justify-between mr-4'>
       <div className='flex  items-center gap-3 '>
            <img className='w-6 rounded-2xl ml-3 mt-2' src={flag} alt="" />
            <p>{country}</p>
        </div>
             <div>
                <button className='border-2 rounded-xl p-1 bg-gray-100'>{role}</button>
             </div>
       </div>
       <div className='m-3'>
        <hr />
       </div>
           <div>
             <p className='font-bold ml-3'>Rating</p>
           </div>
          <div className='flex justify-between ml-3 mr-3 font-bold'>
           <p>{battingType}</p>
           <p>{bowlingType}</p>
          </div>

          <div className=' flex justify-between mr-3 ml-3'>
            <p className='font-bold'>Price:${biddingPrice}</p>
            <button className='border-2 rounded-xl p-1 bg-gray-100'>Choose Player</button>
          </div>
        </div>
    ); 
};

 