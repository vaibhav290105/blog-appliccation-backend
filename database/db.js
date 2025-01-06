import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@cluster2-shard-00-00.hkvbt.mongodb.net:27017,cluster2-shard-00-01.hkvbt.mongodb.net:27017,cluster2-shard-00-02.hkvbt.mongodb.net:27017/?ssl=true&replicaSet=atlas-6fxopg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster2`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;