const express = require("express");
// import sequelize connection
const sequelize = require("./config/connection");
const routes = require("./routes");
// added a seedALL to this
const { seedAll } = require("./seeds/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

// calling the required seedALL function from /seeds/index.js
seedAll;
