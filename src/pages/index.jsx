/**
 * Nama: Riza Dwi Andhika
 * Kelas: E
 * Asal: Institut Teknologi Sepuluh Nopember
 *
 * Task - Events Handling
 */

import React, { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'

import Header from '../components/Header/Header'
import Activities from '../components/Activities/Avtivities'
import Search from '../components/Seach/Search'

export default class Index extends Component {
  state = {
    activities: [],
    input: '',
    isOpen: false
  }

  inputHandler = (event) => {
    this.setState({ input: event.target.value })
  }

  addHandler = () => {
    if (!this.state.input) {
      return this.togglePopup(true)
    }

    this.setState((state) => {
      const newData = { id: uuidv4(), activity: state.input, finished: false }
      return {
        input: '',
        activities: [...state.activities, newData],
        isOpen: false
      }
    })
  }

  toggleHandler = (id) => {
    this.setState((state) => {
      const updated = state.activities.map((act) => {
        return act.id === id ? { ...act, finished: !act.finished } : act
      })

      return { activities: updated }
    })
  }

  deleteHandler = (id) => {
    this.setState({
      activities: this.state.activities.filter((act) => act.id !== id)
    })
  }

  togglePopup = (status) => {
    this.setState({ isOpen: status })
  }

  render() {
    return (
      <div className="w-10/12 mx-auto">
        <Header text="todos" />

        <Search
          value={this.state.input}
          inputHandler={this.inputHandler}
          addHandler={this.addHandler}
          isOpen={this.state.isOpen}
          togglePopup={this.togglePopup}
        />

        <Activities
          activities={this.state.activities}
          toggleHandler={this.toggleHandler}
          deleteHandler={this.deleteHandler}
        />
      </div>
    )
  }
}
