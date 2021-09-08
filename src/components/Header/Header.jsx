import React from 'react'

import Typewriter from 'typewriter-effect'

export default function Header({ text }) {
  return (
    <div className="my-16 flex justify-center">
      <h1 className="py-2 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 via-green-400 to-blue-500">
        {text + ':'}
        <Typewriter
          options={{
            strings: ['skateboarding', 'watch youtube', 'hangout'],
            autoStart: true,
            loop: true
          }}
        />
      </h1>
    </div>
  )
}
