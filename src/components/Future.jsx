import GradientDivider from "./GradientDivider"

function Future() {

    const LastText =[
        {title:"Improving end distrusts instantly ",desc:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded. "},
        {title:"Become the tended active",desc:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."},
        {title:"Message or am nothing",desc:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."},
        {title:"Really boy law county",desc:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."},
    ]
    


  return (
    <section className="common-padding bg-gradient  " id="openAi" >
        
<div className="lg:grid lg:grid-cols-2  flex flex-col max-w-screen-xl mx-auto ">

{/* left col */}
<div className="flex flex-col space-y-5  md:mx-10 mt-10 " >

<h1 className="font-Manrope col-span-3 gradient_text font-semibold !text-xl md:!text-4xl lg:!text-5xl  " >The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>

<p className="flex-1 col-span-2  
font-normal text-base 
text-orange-light  " >Request Early Access to Get Started</p>
</div>

{/* right col */}
<div className="flex  max-md:space-y-14 space-y-5 flex-col  my-12  ">


{
    LastText.map((item,i) => (
      <div key={i} className=" flex flex-col md:flex-row justify-between " >
   <div className="flex flex-col" >
     <GradientDivider  />
<h1 className="text-white mb-5 min-w-40 pr-10  font-bold font-Manrope mt-3 text-lg " >{item.title}</h1>

   </div>
   
<p className="font-Manrope text-start max-w-72  w-full   font-normal text-sm text-light " >{item.desc}</p>
</div>  
    ))
}


</div>



</div>


    </section>
  )
}

export default Future