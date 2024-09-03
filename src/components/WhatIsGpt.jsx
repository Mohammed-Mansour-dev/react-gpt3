import GradientDivider from "./GradientDivider";

function WhatIsGpt() {

const LastText =[
    {title:"Chatbots",desc:"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "},
    {title:"Knowledgebase",desc:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"},
    {title:"Education",desc:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"},
]



  return (
    <section id="whatIsGpt"
      className=" common-padding w-full mx-auto 
    bg-gradient-to-l to-[#031933]
    from-[#040F1F]"
    >
      <main className="px-10  py-5 max-w-screen-xl mx-auto flex-col whatGpt-bg flex justify-between ">
        {/* what is gpt first text */}

        <div className=" flex flex-col md:flex-row  md:justify-between pt-7 ">
        <div className="  " >
          {/* left */}
         <GradientDivider  />
          <h1 className="text-white font-bold font-Manrope mt-3 text-2xl " >What is GPT-3</h1>
        </div>

        {/* right */}
        <p className="font-Manrope  md:leading-[30px] md:w-1/2 font-normal text-sm text-light " >
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
        </div>
     
{/* middle text */}
<div className="flex flex-col space-y-5 md:grid md:grid-cols-5 mt-10 " >

<h1 className="font-Manrope col-span-3 gradient_text font-semibold text-4xl " >The possibilities are beyond your imagination</h1>

<p className="flex-1 col-span-2  md:text-end mr-5
font-normal text-base 
text-orange-light  " >Explore The Library</p>
</div>


{/* last text */}

<div className="flex  max-md:space-y-14 flex-col md:grid my-12 md:grid-cols-3 ">


{
    LastText.map((item,i) => (
      <div key={i} className="flex  flex-col  justify-start mx-5 items-start" >
    <GradientDivider  />
    <h1 className="text-white mb-6 font-bold font-Manrope mt-3 text-2xl " >{item.title}</h1>
<p className="font-Manrope text-start max-w-72  w-full  md:leading-[30px] font-normal text-sm text-light " >{item.desc}</p>
</div>  
    ))
}


</div>
      </main>
    </section>
  );
}

export default WhatIsGpt;
