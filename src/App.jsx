import React from 'react'
import { MainPanel, OptionPanel } from './components'

const App = () => {
  return (
    <div className='bg-DARK-III text-WHITE p-4 h-screen font-inter'>
      <div className='p-1 bg-DARK-I h-full'>
      <main className='flex gap-1 h-full'>
        <MainPanel/>
        <OptionPanel/>
      </main>
      </div>
    </div>
  )
}

export default App