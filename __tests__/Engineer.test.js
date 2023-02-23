const Engineer = require("../lib/Engineer");
//test if engineer is collecting input data and returning correctly
describe('Engineer', () => {
    describe('getRole', () => {
        it('should log inputed data as an array with github', () => {

            const result = new Engineer('test','1','test@test.com', 'testGithub')

            expect(result).toEqual({"email": "test@test.com", "id": "1", "name": "test", "github": "testGithub"})
        })
    })
})