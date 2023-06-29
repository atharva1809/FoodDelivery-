// const mongoose = require("mongoose");
// // const mongoURI =
//   //"mongodb+srv://atharvaninave12:atharva3009@cluster0.nqx20g1.mongodb.net/foodie?retryWrites=true&w=majority";
// const mongoURI = "mongodb://atharvaninave12:atharva3009@ac-lxeall6-shard-00-00.nqx20g1.mongodb.net:27017,ac-lxeall6-shard-00-01.nqx20g1.mongodb.net:27017,ac-lxeall6-shard-00-02.nqx20g1.mongodb.net:27017/foodie?ssl=true&replicaSet=atlas-4fgwri-shard-0&authSource=admin&retryWrites=true&w=majority";
// const user = require('../backend/models/User')
// const connectDB = async () => {
//     try {
//         //mongoose.set('strictQuery', false)
//         await mongoose.connect(mongoURI,{useNewUrlParser: true});
//         console.log('Mongo connected')

//         const fetcheddata = mongoose.connection.db.collection("food_items")
    
//         fetcheddata.find({}).toArray(function(err,data){
//             if(err)console.log(err);
//             else {
//                 global.food_items = data;
//                 console.log(global.food_items)
//             }
//         })
//     //     user.find()
//     //     .then((users) => {
//     //       console.log('All users:', users);
//     //     })
//     //     .catch((error) => {
//     //       console.error('Error fetching users:', error);
//     //     });
      
//     //   // Find a user by email
//     //   user.findOne({ CategoryName: 'Starter' })
//     //     .then((user) => {
//     //       console.log('user:', user);
//     //     })
//     //     .catch((error) => {
//     //       console.error('Error fetching user:', error);
//     //     });

//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// module.exports = connectDB;
const mongoose = require("mongoose");
// const mongoURI =
//"mongodb+srv://atharvaninave12:atharva3009@cluster0.nqx20g1.mongodb.net/foodie?retryWrites=true&w=majority";
const mongoURI = "mongodb://atharvaninave12:atharva3009@ac-lxeall6-shard-00-00.nqx20g1.mongodb.net:27017,ac-lxeall6-shard-00-01.nqx20g1.mongodb.net:27017,ac-lxeall6-shard-00-02.nqx20g1.mongodb.net:27017/foodie?ssl=true&replicaSet=atlas-4fgwri-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  try {
  
    //mongoose.set('strictQuery', false)
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Mongo connected");

    let collection = mongoose.connection.db.collection("food_items");

    collection.find().toArray()
    .then((data) => {
        global.food_items = data 
       // console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
    let collection1 = mongoose.connection.db.collection("food_category");

    collection1.find().toArray()
    .then((catdata) => {
        global.foodCategory = catdata 
        //console.log(catdata);
    })
    .catch((error) => {
        console.error(error);
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;


