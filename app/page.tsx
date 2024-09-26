export default function Home() {
    return (
        <>
        {/* Below code is with CSS */}
        <div className="homeContainer">
            <div className="childContainer">
                Hey,
                <br />
                My Name is <span className="pinkcolor">Manal</span>
                <br />I am Next JS Developer
             </div>
             <div className="childContainer"></div>
             </div>
             
        {/* Below COde Is With Tailwind */}
        <div className="flex justify-between items-center">
            <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
            </div>
            <div className=""></div>
            </div> 
            
            
        
        </>
    
    );
}
