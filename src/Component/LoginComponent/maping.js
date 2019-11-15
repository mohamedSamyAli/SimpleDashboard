

 export function mapStateToProps(state) {
  //  const { user } = state
    debugger
    return {
        isAuth:state.isAuth
    };
}
export const mapDispatchToProps = dispatch => {
debugger
    return {
        Auth:()=>dispatch({type:"Auth"})

    }
  }
