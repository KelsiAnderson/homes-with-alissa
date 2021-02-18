// This will be the app component to run the app 
// "use strict";
// class App extends React.Component {
//     constructor(props){
//         super(props);
//     } render() {
//     return (
//         <Router>
//         <div><NavComponent/></div>
//             <Switch>
//                 <Route exact path='/about'>
//                 <About/>
//                 </Route>
//             </Switch>
//         </Router>
//     );
//     }
// }
// React.DOM.render(<Aap/>,document.getElementById('app'))
// This will be the app component to run the app 
"use strict";
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { useQuery } from "graphql-hooks";
const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": "Bearer a5419b93416fd17b98d19bf08bbe49",
  }
});

const HOMEPAGE_QUERY = `query MyQuery {
    listing {
      title
    }
  }`;

function App(){
    const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
        variables: {
          limit: 10
        }
      });
      if (loading) return "Loading...";
      if (error) return "Something Bad Happened";
    return (
        <Router>
        {JSON.stringify(data)}
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
// React.DOM.render(<App/>,document.getElementById('app'))
ReactDOM.render(
    <React.StrictMode>
      <ClientContext.Provider value={client}>
        <App />
      </ClientContext.Provider>
    </React.StrictMode>,
    document.getElementById("app")
  );

  export default App
  