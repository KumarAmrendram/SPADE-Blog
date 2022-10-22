import mongoose from 'mongoose';

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@spade-blog.q8dujjo.mongodb.net/?retryWrites=true&w=majority`;

  // console.log(username, password);
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
