const OptionPanel = ({ setSelectedOption, selectedOption }) => {
  return (
    <section className=" sm:w-1/5 w-[12%] flex flex-col space-y-1 overflow-hidden text-xs sm:text-sm font-semibold">
      <div
        onClick={() => setSelectedOption(0)}
        className={` ${
          selectedOption === 0 ? "text-black bg-ASCENT " : "bg-DARK-III"
        }   w-full h-1/3 flex justify-center text-nowrap items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}
      >
        <h3 className="rotate-90 lg:rotate-0">MY PROJECTS</h3>
      </div>
      <div
        onClick={() => setSelectedOption(1)}
        className={` ${
          selectedOption === 1 ? "text-black bg-ASCENT " : "bg-DARK-III"
        }   w-full h-1/3 flex justify-center text-nowrap items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}
      >
        <h3 className="rotate-90 lg:rotate-0">ABOUT ME</h3>
      </div>
      <div
        onClick={() => setSelectedOption(2)}
        className={` ${
          selectedOption === 2 ? "text-black bg-ASCENT " : "bg-DARK-III"
        }   w-full h-1/3 flex justify-center text-nowrap items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}
      >
        <h3 className="rotate-90 lg:rotate-0">SKILLS AND EXPERIENCE</h3>
      </div>
    </section>
  );
};

export default OptionPanel;
