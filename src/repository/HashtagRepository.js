import Hashtag from "../models/hashtag.js";

class HashtagRepository{
    async Create(tag){
        try {
           return await Hashtag.create(tag);
        } catch (error) {
            console.log(error);
        }
    }

    async CreateMany(tags){
        try {
            return await Hashtag.insertMany(tags);
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            return await Hashtag.findById(id);
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id){
        try {
            await Hashtag.deleteOne(id);
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList){
        try {
            return Hashtag.find({
                title : titleList
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export {HashtagRepository};