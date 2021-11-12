describe('sumEven', () => {
    it('should sum even numbers from 1 to 99', () => {
        expect(sumEven(0)).to.equal(2450);
    })
})
describe('checkNum', () => {
    it('should check if prime number', () => {
        expect(checkNum(5)).to.equal(true);
    })
})
describe('rootNum', () => {
    it('should find the root of the number', () => {
        expect(rootNum(9)).to.equal(3);
    })
    it('if there is no whole root', () => {
        expect(rootNum(5)).to.equal('Целого корня нет!');
    })
})
describe('factNum', () => {
    it('should find the factorial of a number', () => {
        expect(factNum(5, 1)).to.equal(120);
    })
})
describe('sumNum', () => {
    it('should Calculate the sum of the digits of a given number', () => {
        expect(sumNum(352)).to.equal(10);
    })
})
describe('reversNum', () => {
    it('should reverse number', () => {
        expect(reversNum(1234)).to.equal(4321);
    })
})