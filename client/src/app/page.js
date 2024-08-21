import Image from "next/image";
import { FaPersonWalkingDashedLineArrowRight, FaThreads, FaSquareThreads } from "react-icons/fa6";
import { GiClothes, GiBallerinaShoes, GiSewingMachine} from "react-icons/gi";
import { FaDraftingCompass, FaPrint, FaBriefcase, FaDollarSign } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen pt-5">
      <div className="h-100 mx-auto max-w-8xl py-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mt-8 md:mr-8">
          <h1 className="font-bold text-2xl mb-4">
            Exclusive Fashion, Designs and<br/>Personalized Style consulting
          </h1>
          <p className="text-md mb-6">
            Discover innovative fashion that brings elegance, sophistication, <br/>and uniqueness to your wandrobe.<br/> Our team is dedicated to making you look your best.
          </p>
          <div className="space-x-4">
            <button className="text- font-semibold py-2 px-4 border rounded-lg mb-4 hover:text-blue-800 hover:border-purple-700">
              Talk to us
            </button>
            <button className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg mb-8 hover:bg-blue-800 hover:text-white">
              Visit us 
            </button>
            <input type='text' placeholder='Search...' className='border border-gray-300 rounded-full py-1 px-3' />
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="rounded flex flex-col justify-center space-y-4 up-down h-80 w-full">
          <FaPersonWalkingDashedLineArrowRight className="text-4xl text-purple-600"/>
          <GiBallerinaShoes className="text-4xl text-purple-600"/>
          <GiClothes className="text-4xl text-purple-600"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row bg-violet-800 py-6 text-white">
          <div className="items-center justify-center">
            <h2 className="text-center text-4xl font-bold">Over 500 Projects Completed</h2>
            <p className="text-center py-6">We have successfully delivered & showcasing our community to excellence and creativity.</p>
            <div className="flex flex-row items-center justify-center space-x-16 py-8">
              <div className="flex flex-col md:flex space-y-2">
                <h2 className="text-3xl font-bold">05</h2>
                <p className="text-lg">Partners</p>
              </div>
              <div className="flex flex-col md:flex space-y-2">
                <h2 className="text-3xl font-bold">$100k</h2>
                <p className="text-lg">Revenue</p>
              </div>
              <div className="flex flex-col md:flex space-y-2">
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="text-lg">Awards</p>
              </div>
            </div>
          </div>
      </div>
      <div className="py-8 px-20">
        <div className="text-center">
          <h3 className="text-md text-violet-700">Our Features</h3>
          <p className="text-2xl py-2">Amazing <span className="text-violet-700">Features</span></p>
          <p className="py-4">We offer you quality services tailored to ensure you march along well.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
          <div className="space-y-2">
            <div className="flex flex-row space-x-2 items-center">
              <GiSewingMachine className=" rounded-2xl text-4xl text-blue-700" />
              <h2 className="text-xl font-bold">Garment Construction</h2>
            </div>
            <p className="items-center">Our garment construction services are designed to create high-quality, bespoke clothing. <br/>We esnure each piece meets our exacting standards of craftmanship and fit.</p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-row space-x-2 items-center">
              <GiBallerinaShoes className=" rounded-2xl text-4xl text-blue-700"/>
              <h2 className="text-xl font-bold">Shoe Design</h2>
            </div>
            <p>We focus on creating stylish and comfortable footwear.<br/> We try our best to deliver unique designs that blend fashion with functionality.</p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-row space-x-2 items-center">
              <FaDraftingCompass className=" rounded-2xl text-4xl text-blue-700"/>
              <h2 className="text-xl font-bold">Pattern Drafting</h2>
            </div>
            <p>At Bericks we undertand that perfect garment fits and therefore our expert team uses advanced techniques to create accurate patterns tailored to your specifications.</p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-row space-x-2 items-center">
              <FaPrint className=" rounded-2xl text-4xl text-blue-700"/>
              <h2 className="text-xl font-bold">Printing</h2>
            </div>
            <p>Our printing services offer high-quality prints for textiles and apparel. We utilize state-of-the-art technology to produce vibrant, long-lasting prints that bring your designs to life.</p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-row space-x-2 items-center">
              <FaThreads className=" rounded-2xl text-4xl text-blue-700"/>
              <h2 className="text-xl font-bold">Textile Design</h2>
            </div>
            <p>We offer creative textile design services to develop unique fabrics and patterns. Our team of designers works with premium materials to deliver exceptional textile designs.</p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-row space-x-2 items-center">
              <FaSquareThreads className="rounded-2xl text-4xl text-blue-700"/>
              <h2 className="text-xl font-bold">Embroidery</h2>
            </div>
            <p>Our embroidery services add a touch of elegance and personalization to your garments. We use high-quality threads and techniques to create intricate and beautiful embroidery designs.</p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col md:flex-row px-20">
          <div className="md:w-1/2">
            <div className="space-y-2">
              <h3 className="font-bold">Why us?</h3>
              <p className="text-xl font-bold">Designs built by <span className="text-purple-800">professionals</span></p>
            </div>
            <div className="items-center">
              <p className="w-3/4">We aim at bringing elegant solution to the market. We have proofessionals who are doing a great work here with us.</p>
            </div>
            <div className="flex flex-row py-4">
              <div className="md:w-1/2 space-y-2">
                <div className="flex flex-row items-center space-x-3">
                  <FaBriefcase className="text-2xl rounded-full text-green-700 border"/>
                  <h3 className="font-bold">Proffesionalism</h3>
                </div>
                <p className="w">We have the best professional marketing people across the country just to deliver bespoke products.</p>
              </div>
              <div className="md:w-1/2 space-y-2">
                <div className="flex flex-row items-center space-x-3">
                  <FaDollarSign className="text-2xl text-yellow-700 rounded-full items-center border"/>
                  <h3 className="font-bold">Affordable</h3>
                </div>
                <p className="w-3/4">We promise to offer the best rate we can - at par with the industry standard.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
            src='https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwZXJ0aXNlJTIwaW4lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D'
            width={500}
            height={100}
            className="w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
