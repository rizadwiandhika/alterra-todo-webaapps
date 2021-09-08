import React from 'react'

import Typewriter from 'typewriter-effect'

export default function Header({ text, pause, showWritter }) {
  return (
    <div className="text-center">
      <h1 className="w-min mx-auto my-4 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-300 via-green-400 to-blue-500">
        {text}
      </h1>
      {showWritter && (
        <div
          className={`my-4 font-bold text-3xl text-gray-300 ${
            pause ? 'opacity-0' : ''
          }`}
        >
          <Typewriter
            options={{
              strings: [
                'Skateboarding',
                'Watch youtube',
                'Buy snacks in supermarket',
                "Chillin' with friends"
              ],
              autoStart: true,
              loop: true,
              pauseFor: 4000,
              delay: 40,
              deleteSpeed: 30
            }}
          />
        </div>
      )}
    </div>
  )
}
