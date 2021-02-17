// This will be the app component to run the app 
"use strict";
class App extends React.Component {
    constructor(props){
        super(props);
    } render() {
    return (
        <Router>
        <div><NavComponent/></div>
            <Switch>
                <Route exact path='/about'>
                <About/>
                </Route>
            </Switch>
        </Router>
    );
    }
}
React.DOM.render(<Aap/>,document.getElementById('app'))