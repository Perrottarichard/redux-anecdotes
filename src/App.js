import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>

      <AnecdoteForm />
      <br></br>
      <Notification />
      <Filter />
      <AnecdoteList />
    </div >
  )
}
export default App