import React from 'react'
import { MainPanel, OptionPanel } from './components'

const App = () => {
  return (
    <div className='bg-DARK-I text-WHITE h-screen p-1 font-inter'>
      <main className='flex gap-1 h-full'>
        <MainPanel/>
        <OptionPanel/>
      </main>
    </div>
  )
}

export default App