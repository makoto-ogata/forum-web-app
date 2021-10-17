const useCreateThread = require("./useCreateThread")
// @ponicode
describe("useCreateThread.useCreateThread", () => {
    test("0", () => {
        let callFunction = () => {
            useCreateThread.useCreateThread()
        }
    
        expect(callFunction).not.toThrow()
    })
})
