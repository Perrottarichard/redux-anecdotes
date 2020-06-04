import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <AnecdoteForm />
      <Notification />
      <AnecdoteList />
    </div >
  )
}
export default App