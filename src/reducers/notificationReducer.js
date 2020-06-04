
const nada = ''
const notificationReducer = (state = nada, action) => {
    switch (action.type) {
        case 'VOTE_MESSAGE':
            return action.message
        case 'CREATE_MESSAGE':
            return action.message
        case 'RESET':
            return nada
        default:
            return state
    }
}
export const voteMessage = () => {
    return {
        type: 'VOTE_MESSAGE',
        message: 'You voted!'
    }
}
export const createMessage = () => {
    return {
        type: 'CREATE_MESSAGE',
        message: 'You added a new anecdote!'
    }
}
export const reset = () => {
    return {
        type: 'RESET',
        message: nada
    }
}

export default notificationReducer