export default (state = {"a" : 10} ,action )=> {
    if(action.type === "ADD"){
        return {
            "a" : state.a + 1
        }
    }else if(action.type === "MINUS"){
        return {
            "a" : state.a - 1
        }
    }
    return state
}