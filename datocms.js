// import { GraphQLClient } from "graphql-request";
// export function request({ query, variables, preview }) {
//   const endpoint = preview
//     ? `https://graphql.datocms.com/preview`
//     : `https://graphql.datocms.com/`;
//   const client = new GraphQLClient(endpoint, {
//     headers: {
//       authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
//     }
//   });
//   return client.request(query, variables);
// }


// --------------------------------------------------------------------

// import { GraphQLClient, ClientContext } from 'graphql-hooks';
// import { useQuery } from "graphql-hooks";


// const client = new GraphQLClient({
//   url: "https://graphql.datocms.com/",
//   headers: {
//     "Authorization": "Bearer a5419b93416fd17b98d19bf08bbe49",
//   }
// });

// const HOMEPAGE_QUERY = `query MyQuery {
//     listing {
//       title
//     }
//   }`;

// function App(){
//     const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
//         variables: {
//           limit: 10
//         }
//       });
//       if (loading) return "Loading...";
//       if (error) return "Something Bad Happened";
//     return (
//         <Router>
//         {JSON.stringify(data)}
//         <div><NavComponent/></div>
//             <Switch>
//                 <Route exact path='/about'>
//                 </Route>
//             </Switch>
//         </Router>

//     );
// }


// React.DOM.render(<App/>,document.getElementById('app')) 
// // React.DOM.render(<App/>,document.getElementById('app'))
// ReactDOM.render(
//     <React.StrictMode>
//       <ClientContext.Provider value={client}>
//         <App />
//       </ClientContext.Provider>
//     </React.StrictMode>,
//     document.getElementById("app")
//   );

//   export default App

