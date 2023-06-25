
const initialState = {
    contacts:[]
}

function ContactsReducer(state=initialState,action){
    if(action.type==="add_contact"){
        return {
            ...state,
            contacts:[
                ...state.contacts,
                action.payload
            ]
        }
    }else if(action.type==="set_all_contacts"){
        return {
            ...state,
            contacts:[...action.payload]
        }
    }
    else{
        return {
            ...state
        }
    }

}

export default ContactsReducer