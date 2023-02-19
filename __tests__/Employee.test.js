const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('getRole', () => {
        it('should log inputed data as an array', () => {

            const result = new Employee('test','1','test@test.com')

            expect(result).toEqual({"email": "test@test.com", "id": "1", "name": "test"})
        })
    })
})
