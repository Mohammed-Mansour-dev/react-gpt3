import { useEffect, useState } from "react";

function Navbar() {


const [scroll , setScroll ] = useState(0)


useEffect(() => { 
  window.addEventListener("scroll",()=>setScroll(window.scrollY))

  return window.removeEventListener("scroll",()=>setScroll(window.scrollY))
 },[])

const nav_list = [
    {id:0, name:"Home",link:"/#home"},
    {id:1, name:"What is GPT?",link:"/#whatIsGpt"},
    {id:2, name:"Open AI",link:"/#openAi"},
    {id:3, name:"Case Studies",link:"/#caseStudies"},
    {id:4, name:"Library",link:"/#library"},
];
const [activeNav , setActiveNav ] = useState(0)

  return (
    <section className={`common-padding ${scroll > 150 ? "fixed z-50 !bg-transparent backdrop-blur-3xl top-0 left-0 right-0" :" bg-gradient" }  `}>
      <div  className="flex justify-between items-center " >
        <a href="/">
        <h1 className="text-white text-xl mb-2 lg:text-2xl font-Manrope font-bold " >GPT-3</h1>
</a>
        <nav className="text-white space-x-3 lg:space-x-4 xl:space-x-5 hidden md:flex
        font-Manrope text-sm lg:text-base items-center " >
          {
            nav_list.map((nav,i) => (
                <a onClick={()=> setActiveNav(i)}
                 className={`${activeNav === i && "font-bold px-2 py-1 rounded-full border border-gray-500  "} hover:text-gray-300 `} key={i} href={nav.link}>{nav.name} </a>
            ))
          }
        </nav>

        <div className="flex text-white ">
          <button className="mx-1 hover:text-gray-300 font-Manrope " >Sign in</button>
          <button className="btn" >Sign up</button>
        </div>
      </div>


    </section>
  );
}

export default Navbar;
