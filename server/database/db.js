import mongoose from 'mongoose';

const Connection = async () => {
  const URL = 'mongodb+srv://spade-blog:spade-blog2022@spade-blog.q8dujjo.mongodb.net/?retryWrites=true&w=majority';

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
