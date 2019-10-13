import React from 'react';
import { Switch, Route } from 'react-router';
import LoginForm from './LoginForm';
import BlogPostsListContainer from './BlogPostListContainer';

class App extends React.Component{

    render(){
        return(
            <div>
                Hello!
                <Switch>
                    <Route path={"/login"} component={ LoginForm }/>
                    <Route path={"/"} component={ BlogPostsListContainer }/>
                </Switch>
            </div>
        )
    }

}

export default App;