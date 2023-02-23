const Manager = require("../lib/Manager");
//test if manager is collecting input data and returning correctly
describe('Manager', () => {
    describe('getRole', () => {
        it('should log inputed data as an array with office', () => {

            const result = new Manager('test','1','test@test.com', 'testOffice')

            expect(result).toEqual({"email": "test@test.com", "id": "1", "name": "test", "office": "testOffice"})
        })
    })
})