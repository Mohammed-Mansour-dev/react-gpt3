
function Brands() {

const BRANDS_IMAGES =[
    "./assets/google.png",
    "./assets/slack.png",
    "./assets/atlassian.png",
    "./assets/dropbox.png",
    "./assets/shopify.png",
];



  return (
    <section className='
    w-full
    ' >
        
       <div className="w-full flex    mt-7 flex-wrap mb-3 items-center justify-center "  >

{BRANDS_IMAGES.map((img,i) => (
    <a key={i} className="hover:opacity-85" href="#">
    <img className="h-6 w-24 m-3 object-contain lg:scale-110 lg:mx-5 flex" src={img} alt="company img" />
</a>))}

       </div>
    </section>
  )
}

export default Brands