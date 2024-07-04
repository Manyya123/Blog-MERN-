import React, { useState } from 'react';
import { Button } from 'flowbite-react';

export default function CallToAction() {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionChange = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      {/* Left Side */}
      <div className="flex-1 justify-center flex flex-col">
        {/* Section 1 */}
        {activeSection === 1 && (
          <>
            <h2 className='text-2xl'>
              Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
              Check out these resources with 100+ JavaScript Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
              <a href="#" target='_blank' rel='noopener noreferrer'>
                100 JavaScript Projects
              </a>
            </Button>
          </>
        )}

        {/* Section 2 */}
        {activeSection === 2 && (
          <>
            <h2 className='text-2xl'>
                Mastering Graph Algorithms
            </h2>
            <p className='text-gray-500 my-2'>
                Guide students through implementing algorithms like Dijkstra's algorithm, Prim's algorithm, etc.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
              <a href="#" target='_blank' rel='noopener noreferrer'>
              Start Graph Journey
              </a>
            </Button>
          </>
        )}

        {/* Section 3 */}
        {activeSection === 3 && (
          <>
            <h2 className='text-2xl'>
               Stress Relief and Relaxation through Yoga
            </h2>
            <p className='text-gray-500 my-2'>
            Dive into how yoga practices like meditation and deep relaxation techniques alleviate stress and promote relaxation.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
              <a href="#" target='_blank' rel='noopener noreferrer'>
              Find Peace Through Yoga
              </a>
            </Button>
          </>
        )}

        {/* Dots */}
        <div className="dots mt-4 flex justify-center">
          <span
            className={`dot inline-block w-2 h-2 rounded-full mx-1 cursor-pointer ${activeSection === 1 ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => handleSectionChange(1)}
          ></span>
          <span
            className={`dot inline-block w-2 h-2 rounded-full mx-1 cursor-pointer ${activeSection === 2 ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => handleSectionChange(2)}
          ></span>
          <span
            className={`dot inline-block w-2 h-2 rounded-full mx-1 cursor-pointer ${activeSection === 3 ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => handleSectionChange(3)}
          ></span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
        <div className="h-64 sm:h-auto">
          {activeSection === 1 && (
            <img src="https://cdn.pixabay.com/photo/2018/04/20/21/10/code-3337044_1280.jpg" alt="JavaScript" className="w-full h-85 object-cover" />
          )}
          {activeSection === 2 && (
            <img src="https://cdn.pixabay.com/photo/2016/07/27/15/56/link-1545625_1280.jpg" alt="Image 2" className="w-full h-85 object-cover" />
          )}
          {activeSection === 3 && (
            <img src="https://media.istockphoto.com/id/1315856341/photo/young-woman-meditating-outdoors-at-park.webp?s=2048x2048&w=is&k=20&c=vbC6mgoJfdtt_8Is3IVrtQbuIEYwV-IVyO2n6_2eXwM=" alt="Image 3" className="w-full h-85 object-cover" />
          )}
        </div>
      </div>
    </div>
  );
}