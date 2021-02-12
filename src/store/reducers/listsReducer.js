const initState = {
    lists : [
        {id: '1', imeiprezime:'Ermin Selimovic', visina: '179', godina: '30', tezina: '93'},
        {id: '2', imeiprezime:'Zerina Selimovic', visina: '160', godina: '29', tezina: '70'},
        {id: '3', imeiprezime:'Amina Halilovic', visina: '162', godina: '27', tezina: '52'}
    ],
}

const listsReducer = (state = initState, action) =>{
    return state;
}

export default listsReducer;