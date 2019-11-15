import React, { Component } from 'react';

 export const MyContext = React.createContext(); 

class ContextProvider extends Component {
    state={
        isAuth:false
    }
    render() {
        return (
            <MyContext.Provider value={{
                state:this.state,
                Auth:()=>{this.setState({isAuth:true})}
            }} >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default ContextProvider;