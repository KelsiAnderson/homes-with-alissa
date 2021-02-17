const { SiteClient } = require("datocms-client");
const client = new SiteClient("7e8a92fbf8df4c2d39a8e750a984fa");
async function getFilteredRecords() {
  const records = await client.items.all({
    filter: {
      type: "dog",
      fields: {
        name: {
          eq: "Patato",
        },
        _updated_at: {
          gt: "2020-04-18T00:00:00",
        },
      },
    },
  });
  console.log(records);
}
getFilteredRecords();