const gameReducer = (state={ name : 'CRICKET' },action) => {
    switch(action.type){
        case 'GAME_UPDATE':
            return  action.payload;   
        default :
          return state;
    }
}

export default gameReducer;