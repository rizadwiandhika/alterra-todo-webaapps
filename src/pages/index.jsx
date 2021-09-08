/**
 * Nama: Riza Dwi Andhika
 * Kelas: E
 * Asal: Institut Teknologi Sepuluh Nopember
 *
 * Task - React Hooks
 */

import React, { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import Header from '../components/Header/Header'
import Activities from '../components/Activities/Avtivities'
import Search from '../components/Seach/Search'

import illustration from '../assets/illustration.svg'

export default function Index(props) {
  const [activities, setActivities] = useState([])
  const [inputNewActivity, setInputNewActivity] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const data = [
      { id: uuidv4(), activity: 'Write a song', finished: false },
      { id: uuidv4(), activity: 'Go to guitar lesson', finished: false }
    ]

    setActivities(data)
  }, [])

  const inputHandler = (event) => {
    setInputNewActivity(event.target.value)
  }

  const addHandler = () => {
    if (!inputNewActivity) {
      return togglePopup(true)
    }

    const newActivities = {
      id: uuidv4(),
      activity: inputNewActivity,
      finished: false
    }

    setActivities([...activities, newActivities])
    setInputNewActivity('')
    setIsOpen(false)
  }

  const toggleHandler = (id) => {
    setActivities((prev) =>
      prev.map((act) =>
        act.id === id ? { ...act, finished: !act.finished } : act
      )
    )
  }

  const deleteHandler = (id) => {
    setActivities(activities.filter((act) => act.id !== id))
  }

  const togglePopup = (status) => {
    setIsOpen(status)
  }

  return (
    <div className="w-10/12 max-w-screen-md mx-auto">
      <div className="my-12">
        <Header
          text="Todos"
          pause={isOpen}
          showWritter={activities.length === 0}
        />
      </div>

      <Search
        value={inputNewActivity}
        inputHandler={inputHandler}
        addHandler={addHandler}
        isOpen={isOpen}
        togglePopup={togglePopup}
      />

      <Activities
        activities={activities}
        toggleHandler={toggleHandler}
        deleteHandler={deleteHandler}
      />

      {activities.length === 0 && (
        <div className="hidden sm:block relative mt-12 opacity-50">
          <img
            className="block w-8/12 mx-auto"
            src={illustration}
            alt="undraw_empty_street_sfxm"
          />
          <p className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-center font-bold text-lg text-gray-800">
            No activities...
          </p>
        </div>
      )}
    </div>
  )
}
