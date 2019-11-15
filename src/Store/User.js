const initialState = {
    isAuth:false
  };
  const reducer = ( state = initialState, action ) => {
      switch ( action.type ) {
         
              case 'Auth':
                  return {
                      
                      isAuth:true
                  }
                  default: return state
              }    
  };
  
  export default reducer;