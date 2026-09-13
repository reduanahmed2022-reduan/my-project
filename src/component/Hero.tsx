import hero from '../assets/banner-stack.png';
const Hero = () => {
  return (
    <section className="bg-white py-22 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
          <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal{' '}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block">
              Development Stack
            </span>
            </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a href="#tech" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white text-sm font-medium px-6 py-3 rounded">
              Explore Technologies
            </a>
            <button className="border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded">
              Learn More
             </button>
           </div>
        </div>

       
        <div className="flex justify-center md:justify-end">
          <div className="max-w-xl md:w-80 md:h-80 flex flex-col items-center justify-center text-center">
          <div className="flex-1 flex justify-start items-center -ml-20 lg:-ml-22">
         <img 
         src={hero} 
        alt="DevStack Banner" 
         className="w-full max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-2xl"
          />
         </div>
          </div>
        </div>
       
        </div>
    </section>
  );
};

export default Hero;