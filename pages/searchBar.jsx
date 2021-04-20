import React, { useState } from 'react';

function SearchBar() {
  const [search, setSearch] = useState('')

  function handleInput(e) {
    setSearch(e.target.value)
  }

//     const { SiteClient } = require("datocms-client");
//     const client = new SiteClient(process.env.DATO_MANAGEMENT_API_TOKEN);
    
//     async function getFilteredRecords() {
//     const records = await client.items.all({
//       filter: {
//         type: "listing",
//         fields: {
//           title: search,
//         },
//       },
//     });
//   console.log(records);

// }
  
// getFilteredRecords(); 

  return (
    <div className="search">
      <input onChange={handleInput} type="text"></input>
      {/* <button onClick={getFilteredRecords()}>search</button> */}
    </div>

  )

}

export default SearchBar



// set state for search query
// plug the state into the records obj above


