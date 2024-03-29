class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id){
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id,data){
        try {
            const result = await this.model.findByIdAndUpdate(id,data);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default CrudRepository