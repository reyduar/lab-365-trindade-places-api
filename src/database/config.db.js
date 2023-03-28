const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {});

    console.log("Connected to MongoBD");
  } catch (error) {
    console.log(`Couldn't connect to Mongo database ${error}`);
  }
};

module.exports = {
  dbConnection,
};
