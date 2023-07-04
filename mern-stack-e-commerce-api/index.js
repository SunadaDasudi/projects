const dotenv = require("dotenv")

const express = require("express");
const mongoose = express("mongoose");
const getPort = require('get-port');

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")


const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL,
  (err)=>{
    if(err) console.log(err)
    else console.log('successfully connected!')
  })
  
  // .then(() => console.log("DB Connection Successfull!"))
  // .catch((err) => {
  //   console.log(err);
  // });

// async function connectToDatabase() {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, (err) => {
//       console.log('in connectToDatabase method')
//       if (err) {
//         console.error('Error connecting to the database:', err);
//       } else {
//         console.log('Connected to the database');
//       }
//     });
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//   }
// }

// connectToDatabase();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


async function startServer() {
    const preferredPort = 5001; // The preferred port you want to use
    const port = await getPort({ port: preferredPort });
  
    // Start your application
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
  
  startServer();