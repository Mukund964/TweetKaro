import UserRepository from '../../src/repository/userRepository.js';
import user from '../../src/models/user.js';

jest.mock('../../src/models/user.js');
test('testing finding user method',async ()=>{
    const data = {
        email : 'abc@123'
    }
    const response = jest.spyOn()
    const userRepo = new UserRepository();
    
})