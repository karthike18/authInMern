const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect("mongodb+srv://karthikeyanr2022aiml:Tommyshelby18@cluster0.p9b6emy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};