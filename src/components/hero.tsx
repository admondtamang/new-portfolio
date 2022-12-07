// import Highlight from "./highlight";

export  function Highlight({children,...rest}:any) {
  return (
    <>
    <span className='highlight' {...rest}>
      {children}
    </span>
    {/* <span className='highlight-component'/> */}
    </>
  )
}
export default function Hero() {



  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-8">
      <p className="rounded-3xl border-4 border-gray-600 bg-white px-4 py-1 font-bold  ">Web Developer</p>
      <Highlight className="primary-highlight"><h1 className="title-font sm:text-4xl text-9xl font-extrabold text-gray-700  font-sans">Admond Tamang</h1></Highlight>
      <h1 className="title-font sm:text-4xl text-9xl font-extrabold text-gray-700  font-sans">A Developer based in Nepal</h1>
      <p className="mb-8 leading-relaxed">I love building and re-thiking what we do.<br/>
      I'm a competent, youthful developer who prioritizes more on <Highlight>human-centered design</Highlight>. <br/><br/>  
      Moreover, a desire to learn <Highlight>new technologies and application architecture</Highlight> and to <Highlight> collaborate in a team</Highlight>.<br/><br/>
      I love <Highlight>learning and building</Highlight> web with new architecture and technologies.
     </p>
      <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/admond-tamang-78a39a134/">

              <button className="text-dark   bg-indigo-300 border-2 border-black py-2 px-6 hover:bg-lime-600 hover:text-lime-50 rounded text-md shadow-offset-black">Linked In</button>
   </a>

                        <a href="https://github.com/admondtamang">

               <button className="text-dark   bg-lime-300 border-2 border-black py-2 px-6 hover:bg-indigo-600 hover:text-lime-50 rounded text-md shadow-offset-black">Linked In</button>
           </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
      <img className="object-cover object-center rounded nue" alt="hero" src="./profile.jpg" width={400} height={200}/>
    </div>
  </div>
</section>
  )
}
