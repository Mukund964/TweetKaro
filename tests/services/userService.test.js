import userService from '../../src/services/userService.js';
import UserRepository from '../../src/repository/userRepository';

jest.mock('../../src/repository/userRepository');

describe('testing user creation from service',()=>{
    test('user creation from service', async ()=>{
        const data = {
            email : 'abc@gmail.com',
            password : '123'
        };
        const Userservice = new userService();
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt:'2024-04-02',updatedAt : '2024-04-02'});
        const user = await Userservice.create(data);
        //expect(UserRepository.prototype.create).toHaveBeenCalledWith(data);
        expect(user.email).toBe(data.email);
    });
})