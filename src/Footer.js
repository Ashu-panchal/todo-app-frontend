function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full  bg-black/50 backdrop-blur-md text-gray-800 py-4 shadow-inner">
      <div className="px-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        
        <h2 className="text-white font-semibold pl-10">
          Made by Ashu Panchal
        </h2>
        <p className="text-white ml-[50px]">IT 2nd Year | Roll No 28241277</p>

        <div className="space-x-6">
          <a href="#" className="text-white hover:text-blue-600 transition">Contact us</a>
          <a href="#" className="text-white hover:text-blue-600 transition">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
export { Footer };