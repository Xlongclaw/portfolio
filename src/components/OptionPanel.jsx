const OptionPanel = ({ setSelectedOption, selectedOption }) => {
  return (
    <section className=" w-1/5 flex flex-col space-y-1 overflow-hidden text-sm font-semibold">
      <div
        onClick={() => setSelectedOption(0)}
        className={` ${
          selectedOption === 0 ? "text-black bg-ASCENT " : "bg-DARK-III"
        }   w-full h-1/3 flex justify-center items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}
      >
        MY PROJECTS
      </div>
      <div
        onClick={() => setSelectedOption(1)}
        className={` ${
          selectedOption === 1 ? "text-black bg-ASCENT " : "bg-DARK-III"
        }   w-full h-1/3 flex justify-center items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}
      >
        ABOUT ME
      </div>
      <div
        onClick={() => setSelectedOption(2)}
        className={` ${
          selectedOption === 2 ? "text-black bg-ASCENT " : "bg-DARK-III"
        }   w-full h-1/3 flex justify-center items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}
      >
        SKILLS AND EXPERIENCE
      </div>
    </section>
  );
};

export default OptionPanel;
