describe('minNum', () => {
    it('should search min number of array', () => {
        expect(minNum([5, 2, 40, 27, 17, 3])).to.equal(2);
    })
})
describe('maxNum', () => {
    it('should search max number of array', () => {
        expect(maxNum([5, 2, 40, 27, 17, 3])).to.equal(40);
    })
})
describe('minimumIndex', () => {
    it('should search min index number of array', () => {
        expect(minimumIndex([5, 7, 40, 2, 17, 3])).to.equal(3);
    })
})
describe('maximumIndex', () => {
    it('should search max index number of array', () => {
        expect(maximumIndex([5, 2, 40, 27, 17, 3])).to.equal(2);
    })
})
describe('oddArray', () => {
    it('should sum numbers with odd index', () => {
        expect(oddArray([3, 6, 24, 78, 36, 49, 7, 11, 1])).to.equal(144);
    })
})
describe('revArray', () => {
    it('should reverse array', () => {
        expect(revArray([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
    })
})
describe('oddElArray', () => {
    it('should sum odd numbers of array', () => {
        expect(oddElArray([2, 3, 5, 7, 4, 6, 1])).to.equal(4);
    })
})