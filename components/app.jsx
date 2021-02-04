// This will be the app component to run the app 
"use strict";

function App(){
    return (
        <Router>
        <div><NavComponent/></div>
            <Switch>
                <Route exact path='/about'>
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}
React.DOM.render(<Aap/>,document.getElementById('app'))