import React from 'react'
import { sociallinks } from '../constants'

const SocialLinks = () => {
  return (
    <div className="fle font-semibold text-sm mt-8">
    {sociallinks.map((link, index) => (
      <div className="flex gap-2 py-1 items-center cursor-pointer">
        <img  src={link.image} className="w-[1.5rem]" alt="" />
        <span className="text-GRAY-I hover:text-WHITE">{link.name}</span>
      </div>
    ))}
  </div>
  )
}

export default SocialLinks