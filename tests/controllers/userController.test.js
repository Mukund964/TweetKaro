import {mockrequest,mockresponse} from '../mocker.js';
import userService from '../../src/services/userService.js';
import {signUp} from '../../src/controller/userController.js'

jest.mock('../../src/services/userService.js');

describe('testing userController',()=>{
    test('testing controller for user creation',async ()=>{
        const req = mockrequest();
        const res = mockresponse();
        const response = {
            email : 'abc@123',
            password : '123',
            createdAt:'2024-04-02',
            updatedAt : '2024-04-02'
        };
        (userService.prototype.create).mockReturnValue(response);
        
        await signUp(req,res); 
        expect(res.json).toHaveBeenCalledWith({
            message : 'User registered succesfully',
            data : response,
            error : {},
            success :true
        });
    })
})