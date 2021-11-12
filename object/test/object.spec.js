describe('getCookingTime', () => {
    it('should get cooking aggs time', () => {
        expect(getCookingTime(23)).to.equal(25);
    })
})
describe('getNumber', () => {
    it('should search one odd number', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.equal(13);
    })
    it('should search one even number', () => {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal(4);
    })
})
describe('findTitle', () => {
    it('should get cooking aggs time', () => {
        expect(findTitle(arr, 'js')).to.eql([{ title: 'I like JS' },
        { user: 'This obj doesn’t have key title js' },
        { title: 'Js - is the best!' }])
    })
})
describe('reverse', () => {
    it('should reverse num', () => {
        expect(reverse(12)).to.equal("21");
    })
    it('should search palindrome', () => {
        expect(Palindrome(12)).to.equal(22);
    })
})





