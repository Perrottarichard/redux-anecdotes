import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addNew = (event) => {
        event.preventDefault()
        const content = event.target.saying.value
        event.target.saying.value = ''
        dispatch(addAnecdote(content))
    }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addNew}>
                <div><input name='saying' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm
