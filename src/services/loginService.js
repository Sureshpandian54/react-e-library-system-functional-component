const ListService = {
    loginUsers(dispatch, input) {
        dispatch({
            type: 'sucess',
            payload: input
        })
    },
    logoutUsers(dispatch) {
        dispatch({
            type: 'logout',
            payload: ''
        })
    }
}

export default ListService;