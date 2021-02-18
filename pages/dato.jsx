const { SiteClient } = require("datocms-client");
const client = new SiteClient(process.env.DATO_MANAGEMENT_API_TOKEN);
async function getFilteredRecords() {
  const records = await client.items.all({
    filter: {
      type: "testimonial",
      // fields: {
      //   name: {
      //     eq: "Patato",
      //   },
      //   _updated_at: {
      //     gt: "2020-04-18T00:00:00",
      //   },
      // },
    },
  });
  console.log(records);
}
getFilteredRecords();