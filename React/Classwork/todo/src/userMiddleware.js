import userSlice from "./redux/UserSlice";
const actions = userSlice.actions;
const fetchUserMiddleware = (param) => {
    return async (dispatch) => {
        try{
            dispatch(actions.setLoading())
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const user = await resp.json();
            console.log(user);
            dispatch(actions.setUser(user))
        }catch(err){
            dispatch(actions.setError(err))
        }
    }
}

export default fetchUserMiddleware