import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@cluster2-shard-00-00.hkvbt.mongodb.net:27017,cluster2-shard-00-01.hkvbt.mongodb.net:27017,cluster2-shard-00-02.hkvbt.mongodb.net:27017/?ssl=true&replicaSet=atlas-6fxopg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster2`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 