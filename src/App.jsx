import React, { useState } from 'react'
import { MainPanel, OptionPanel } from './components'

const App = () => {
  const [selectedOption,setSelectedOption] = useState(1)
  return (
    <div className='bg-DARK-III text-WHITE p-4 h-screen font-inter'>
      <div className='p-1 bg-DARK-I h-full'>
      <main className='flex gap-1 h-full'>
        <MainPanel selectedOption={selectedOption}/>
        <OptionPanel selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      </main>
      </div>
    </div>
  )
}

export default App