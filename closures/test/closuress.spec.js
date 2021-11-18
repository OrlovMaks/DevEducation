describe('tickets', () => {
    it('if Vasya will not have enough money to give change to change', () => {
        expect(tickets([100])).to.equal('NO, Vasya will not have enough money to give change to ' + 100 + ' dollars!');
    })
    it('if Vasya can give change!', () => {
        expect(tickets([25, 50, 25, 100,])).to.equal('YES, Vasya can give change!');
    })
})
describe('getSum', () => {
    it('Sum two infinity numbers', () => {
        expect(getSum('111111111111111111111111111111111111111111111111111', '233333333333333333333333333333333333333333333333333')).to.equal('344444444444444444444444444444444444444444444444444');
    })
})
describe('getQuntityPodtdByAuthor', () => {
    it('Find ad count Rimus`s posts and comments', () => {
        expect(getQuntityPodtdByAuthor(posts, 'Rimus')).to.equal('posts = 1, coments = 3');
    })
})
