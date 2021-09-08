/**
 * Nama: Riza Dwi Andhika
 * Kelas: E
 * Asal: Institut Teknologi Sepuluh Nopember
 *
 * Task - React Hooks
 */

import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import Header from '../components/Header/Header'
import Activities from '../components/Activities/Avtivities'
import Search from '../components/Seach/Search'

export default function Index(props) {
  const [activities, setActivities] = useState([])
  const [inputNewActivity, setInputNewActivity] = useState('')
  const [isOpen, setIsOpen] = useState(false)

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

    console.log('adding new activity...')

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
    </div>
  )
}
