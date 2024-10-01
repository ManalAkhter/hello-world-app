import Image from 'next/image'

export default function Home() {
    return (
        <>
            {/* Below code is with CSS */}
            <div className="homeContainer mx-auto">
                <div className="childContainer">
                    <br/>
                    <br/>
                    
                   <h1> Hey,</h1>
                    
                <h2> My Name is <span className="pinkcolor"> Manal </span></h2>
                    
                <h3>I am Next JS Developer</h3>
                </div>
                
            </div>

            {/* Below COde Is With Tailwind */}
            <div className="flex justify-end items-center mt-4">
                <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
                </div>
                <div className=""></div>
            

        <Image 
        src={'/profile pic.jpg'}
         alt="profile pic" 
         width={300}
        height={300}
         className='rounded-full' 
         />
       </div>

            </>

            );
}
