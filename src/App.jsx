import React, { useState } from "react";
import { MainPanel, OptionPanel } from "./components";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <div
      className="bg-DARK-III text-WHITE h-screen font-inter
      pt-2 pb-8 px-2
      xs:pt-2 xs:pb-2 xs:px-2 "
    >
      <div className="p-1 bg-DARK-I h-full">
        <main className="flex gap-[0.20rem] h-full sm:gap-1">
          <MainPanel selectedOption={selectedOption} />
          <OptionPanel
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
