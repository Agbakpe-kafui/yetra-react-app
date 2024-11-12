import React from 'react';
import logo from './assets/logo.png';

const End = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start bg-black text-white p-8">
      <div className="flex-1 ml-0 md:ml-20 mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="w-36 mb-4" />
        <form className="flex gap-2 mb-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 p-2 bg-transparent border border-white text-white rounded placeholder-gray-400"
          />
          <button 
            type="submit" 
            className="p-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
        <p className="text-sm text-gray-400">Subscribe to our mailing list so you don’t miss out on any info</p>
      </div>
      <div className="flex-1 ml-0 md:ml-[50em] items-end md:mr-0">
        <h3 className="text-lg font-bold mb-4">Address</h3>
        <ul className="list-none p-0">
          <li className="mb-2 text-sm">Accra Mall, Spintex Road. Entrance, <br /> Next to Telecel </li>
          <li className='mb-2 text-sm'>Open: 10am : 10pm</li>
          <li className="mb-2 text-sm">Phone: (+233) 50 865 086</li>
          <li className="mb-2 text-sm">Email: support@yetra.com</li>
        </ul>
      </div>
    </section>
  );
};

export default End;
