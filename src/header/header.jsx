
import profile from '../assets/images/profile.png'


const Header = () => {
    return (
        <div className='bg-slate-200 m-0'>
            <div className='w-[80%] flex justify-between m-auto items-center py-4'>

                <h2 className='text-2xl font-semibold'>Programmer Blogs</h2>
                <img className='w-[50px]' src={profile} alt="" />
            </div>
            
            
        </div>
    );
};

export default Header;