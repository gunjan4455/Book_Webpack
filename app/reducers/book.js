const books = (state = [], action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return action.books
        default:
            return state
    }
};

export default books
