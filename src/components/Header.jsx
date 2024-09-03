import Brands from "./Brands";





      {/* text card */}

{/* input and button */}
{/* face img */}
{/* subcribers */}
    {/* icons */}

    {/* brands */}














function Header() {


const IMAGES =[
    "./assets/person1 (2).png",
    "./assets/person1 (3).png",
    "./assets/person1 (4).png",
    "./assets/person1 (5).png",
    "./assets/person1 (6).png",
    "./assets/person1 (7).png",
]


  return (

<main id="home" className="common-padding bg-gradient" >
  
    <section className=" items-center flex w-full flex-row ">
     {/* text card */} 
     <div className="  w-1/2 max-md:my-7 flex flex-col space-y-7  flex-1">

      <div className="mx-auto xl:w-[90%]  " >
      <h1 className="gradient_text  max-md:my-10 lg:leading-snug ">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>

        <p className="font-Manrope  max-md:my-10 font-normal text-[20px] text-light mt-3 " >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

{/* input and button */}
<div className="h-16 pl-2 max-md:mx-0 max-md:my-10 mt-10 w-10/12 md:w-full !pr-0 !mr-0 flex flex-row  bg-[#052D56] rounded-md ">
<input type="text" className="h-full px-3 py-2 focus:border-none  focus:outline-none flex-1 [margin:0 !important;] font-Manrope text-light bg-[#052D56] " placeholder="Your Email Address" />
<button className="btn !m-0 !h-full text-white font-Manrope
 !rounded-tl-none !rounded-bl-none max-md:text-sm md:!px-7 ">Get Started</button>
</div>



{/* subcribers */} 
<div className="flex w-full flex-row items-center space-x-3 mt-10 " >

    {/* icons */}
<div className="flex flex-row min-w-40 -space-x-4  " >
    {IMAGES.map((img,i) => (
<img className="w-9 h-9"  src={img} key={i} />
    ) )}
    <div className="w-9 h-9 relative justify-center items-center flex ">
    <img  className="w-full h-full" src="./assets/person1 (1).png" alt="" />
<span className="absolute font-bold text-xs font-Manrope  " >1.5K</span>
    </div>

</div> 

<p className=" font-Manrope text-xs font-medium text-white " >
1,600 people requested access a visit in last 24 hours
</p>

      </div>

      </div>
</div>
{/* face img */}
      <div className=" hidden  md:flex w-1/2">
        <img
          src="./assets/Header.png"
          alt="ai face img"
          className="  w-full scale-90  "
        />
      </div>
    </section>


    {/* brands */}
    <Brands />
</main>




  );
}

export default Header;
