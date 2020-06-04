import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { upVote, addAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(upVote(id))
  }
  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.saying.value
    event.target.saying.value = ''
    dispatch(addAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name='saying' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App