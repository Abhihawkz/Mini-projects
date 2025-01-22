import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectToDb.js";
import authRoutes from "./routes/auth.routes.js"
import urlRoutes from "./routes/url.routes.js"
import cors from "cors"
dotenv.config()


const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json({limit:"5mb"}));
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your React app's origin
  }));

  app.use("/api",authRoutes)
  app.use("/",urlRoutes)
  
app.listen(PORT,()=>{
    console.log("Server is Running!!!",PORT)

    connectDb()
})


// app.post('/api/users', async (req, res) => {
//     try {
//       const { username, fullname, password, email } = req.body;
//       const user = new User({ username, fullname, password, email });
//       await user.save();
//       res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to create user', error: error.message });
//     }
//   });