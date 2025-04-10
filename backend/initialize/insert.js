const mongoose=require('mongoose')
const initialTopic=require("./data")
const Topic=require("../Models/Topics")

//connect to db
async function main() {
    try {
        await mongoose.connect("mongodb+srv://mahammadsarfaraj6:unRGYmRjyUCM94O8@cluster0.29qffvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to db");
    }
    catch (err) {
        console.log(err)
    };

}
main();
const initializeDB = async () => {
    try {
        await Topic.deleteMany({}); // Clear existing topics
        await Topic.insertMany(initialTopic);
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect();
    }
};

initializeDB();
