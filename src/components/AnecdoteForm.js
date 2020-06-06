import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { createMessage, reset } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdoteService'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addNew = async (event) => {
        event.preventDefault()
        const content = event.target.saying.value
        event.target.saying.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(addAnecdote(newAnecdote))
        dispatch(createMessage())
        setTimeout(() => {
            dispatch(reset())
        }, 5000);
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
