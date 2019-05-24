exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: "1",
          description: "get the basketball",
          notes: "located in the backyard"
        },

        {
          project_id: "1",
          description: "hoop",
          notes: "-this is where the ball goes"
        },

        {
          project_id: "2",
          description: "build node server",
          notes: "yarn install, then install dev"
        },
        {
          project_id: "2",
          description: "build SQL server",
          notes: "build columns (schema) and rows"
        },
        {
          project_id: "3",
          description: "drive to orlando",
          notes: "meet in hotel room family from california"
        }
      ]);
    });
};
