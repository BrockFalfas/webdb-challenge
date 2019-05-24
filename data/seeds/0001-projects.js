exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("projects")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("projects").insert([
          {
            name: "shoot a basketball",
            description: "make ball in the hoop"
          },

          { name: "sprint challenge", description: "finish mvp" },

          { name: "go to water-park", description: "water-park with family" }
        ]);
      })
  );
};
