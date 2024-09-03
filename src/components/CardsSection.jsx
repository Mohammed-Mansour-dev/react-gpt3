
function CardsSection() {
  return (
    <section  className="common-padding bg-[#040c18] !pt-10 " >
        


{/* Gradient card */}


<div className="w-full items-center bg-card max-w-screen-xl mx-auto space-y-5 px-7 py-10 rounded-lg justify-between flex flex-col md:flex-row " >

<div className="flex-1 mx-5 " >
    <p className="font-medium  max-md:text-center text-[12px] text-[#0E0E0E] leading-[30px] font-Manrope " >Request Early Access to Get Started</p>
<h1 className="font-extrabold text-sm max-md:text-center md:text-2xl lg:leading-[45px] font-Manrope " >Register today & start exploring the endless possiblities.</h1>
</div>


<button className="bg-black w-fit  text-white font-Manrope text-sm px-3
py-3 rounded-full h-fit
" >Get Started</button>

</div>


{/* Cards */}

<div className="w-full gap-5 mx-auto max-w-screen-xl py-14 " >
<div className=" mx-auto gap-5 w-full   " >

<h1 className="gradient_text  !text-3xl mt-10 !my-5 " >A lot is happening, <br />
We are blogging about it.</h1>


<div className="w-full md:grid-cols-3 gap-5 md:grid flex-col flex " >
 {/* 1 */}
<div className="flex-1 gap-5 relative bg-[#042C54]  " >
<img src="./assets/card1.png" alt="ai image" />
<div className="px-5 py-2" >
<p className="card-date  " >Sep 26, 2021</p>
<h1 className="card-title " >GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
 <p  className="card-a absolute bottom-2  " href="#">Read Full Article</p>
</div>
</div>


{/* 2 */}
<div className="       space-y-5" >
<div className="flex-1 gap-5 bg-[#042C54] rounded-lg " >
<img src="./assets/card2.png" alt="ai image" />
<div className="px-5 py-2" >
<p className="card-date " >Sep 26, 2021</p>
<h1 className="card-title" >GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
 <p  className="card-a" href="#">Read Full Article</p>
</div></div>


<div className="flex-1   bg-[#042C54]  rounded-lg  gap-5 " >
<img src="./assets/card3.png" alt="ai image" />
<div className="px-5 py-2" >
<p className="card-date " >Sep 26, 2021</p>
<h1 className="card-title" >GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
 <p  className="card-a" href="#">Read Full Article</p>
</div></div>

</div>

{/* 3 */}

<div className=" space-y-5" >
<div className="flex-1 gap-5   bg-[#042C54]  rounded-lg  " >
<img src="./assets/card4.png" alt="ai image" />
<div className="px-5 py-2" >
<p className="card-date " >Sep 26, 2021</p>
<h1 className="card-title" >GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
 <p  className="card-a" href="#">Read Full Article</p>
</div></div>


<div className="flex-1 gap-5   bg-[#042C54]  rounded-lg  " >
<img src="./assets/card5.png" alt="ai image" />
<div className="px-5 py-2" >
<p className="card-date " >Sep 26, 2021</p>
<h1 className="card-title" >GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
 <p  className="card-a" href="#">Read Full Article</p>
</div></div>

</div>

</div>



</div>

</div>






    </section>
  )
}

export default CardsSection