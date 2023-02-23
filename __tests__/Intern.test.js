const Intern = require("../lib/Intern");
//test if intern is collecting input data and returning correctly
describe('Intern', () => {
    describe('getRole', () => {
        it('should log inputed data as an array with school', () => {

            const result = new Intern('test','1','test@test.com', 'testSchool')

            expect(result).toEqual({"email": "test@test.com", "id": "1", "name": "test", "school": "testSchool"})
        })
    })
})