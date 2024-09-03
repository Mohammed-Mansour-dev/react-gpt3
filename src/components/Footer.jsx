



function Footer() {
    const date =new Date();


    const year =date.getFullYear();;
    console.log(year)
    
const FooterLinks =[
    {title:"Links",lists:[{list:"Overons",link:"#"},{list:"Social Media",link:"#"},{list:"Counters",link:"#"},{list:"Contact",link:"#"},]},
    {title:"Company",lists:[{list:"Terms & Conditions",link:"#"},{list:"Privacy Policy",link:"#"},{list:"Contact",link:"#"}]},
    {title:"Get in touch",lists:[{list:<>Crechterwoord K12 <br/> 182 DK Alknjkcb</>,link:"#"},{list:"085-132567",link:"#"},{list:"info@payme.net",link:"#"}]},
    
]



  return (
    <main className=" bg-[#040c18]  w-full" >
  <div className="w-full max-w-screen-xl common-padding mx-auto " >
        
<div className="md:grid md:grid-cols-5 py-10 flex flex-wrap  justify-between max-md:items-center space-y-10 max-md:mx-5 max-xs:justify-start " >
{/* 1 */}
<div className="flex-col space-y-5 " >
    <h1 className="select-none text-white font-bold text-4xl " >GPT-3</h1>
<p className="text-white text-xs  " >Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
</div>

{/* 2 */}
<div />

{/*  3 , 4 , 5 */}

{
FooterLinks.map((item,i) => (
    <div className="flex-col space-y-2 mx-10 " key={i} >
    <h1 className="select-none text-white font-medium text-xl md:text-xl " >{item.title}</h1>
{
    item.lists.map((link,i)=>(
        <div key={i} className="flex flex-col" >
<a href={link.link} className="text-gray-200 text-base font-light max-md:text-base hover:text-gray-500  " >{link.list}</a>

        </div>

    ))
}


</div>
))

}


</div>


    </div>

<h1 className="text-gray-300 font-Manrope text-sm text-center py-5 px-3  " >© {year} GPT-3. All rights reserved  Mohammed Mansour.</h1>
    </main>
  
  )
}

export default Footer