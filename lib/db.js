import mongoose from "mongoose";

const connectDb = async () => {
    try{
      await mongoose.connect('mongodb+srv://praveens321123:w28IgAk8IhfzRcEY@cluster0.eackaf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      console.log("Mongoose Connected");
    } catch(err) {
      console.error(err.message)
      process.exit(1)  
    } 
}

export default connectDb;