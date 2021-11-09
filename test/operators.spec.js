describe('calk', () => {
    it('if first number(a) is even should multiply two numbers', () => {
        expect(calk(2, 5)).to.equal(10);
    })
    it('if first number(a) is odd should sum two numbers', () => {
        expect(calk(3, 2)).to.equal(5);
    })
})

describe('coordinat', () => {
    it('if x > 0 and y > 0 should find first quatter', () => {
        expect(coordinat(3, 2)).to.equal('1 Четверть');
    })
    it('if x < 0 and y > 0 should find second quatter', () => {
        expect(coordinat(-2, 5)).to.equal('2 Четверть');
    })
    it('if x < 0 and y < 0 should find third quatter', () => {
        expect(coordinat(-3, -2)).to.equal('3 Четверть');
    })
    it('if x > 0 and y < 0 should fours quatter', () => {
        expect(coordinat(4, -4)).to.equal('4 Четверть');
    })
    it('if x = 0 and y > 0 should find y-axis', () => {
        expect(coordinat(0, 4)).to.equal('Ось Y');
    })
    it('if x < 0 and y = 0 should find x-axis', () => {
        expect(coordinat(4, 0)).to.equal('Ось X');
    })
    it('if x = 0 and y = 0 should find center of coordinates', () => {
        expect(coordinat(0, 0)).to.equal('Центр координат');
    })
})

describe('sumPos', () => {
    it('should multiply only positive numbers', () => {
        expect(sumPos([-3, 3, 2])).to.equal(5);
    })
})

describe('maxCount', () => {
    it('should multiply numbers and + 3', () => {
        expect(maxCount(3, 2, 5)).to.equal(33);
    })
    it('should sum numbers and + 3', () => {
        expect(maxCount(1, 1, 1)).to.equal(6);
    })
})

describe('rating', () => {
    it('if mark >= 0 and mark <= 19 should write Rating:F', () => {
        expect(rating(14)).to.equal('Rating:F');
    })
    it('if mark >= 20 and mark <= 39 should write Rating:E', () => {
        expect(rating(23)).to.equal('Rating:' + 'E');
    })
    it('if mark >= 40 and mark <= 59 should write Rating:D', () => {
        expect(rating(45)).to.equal('Rating:' + 'D');
    })
    it('if mark >= 60 and mark <= 74 should write Rating:C', () => {
        expect(rating(67)).to.equal('Rating:' + 'C');
    })
    it('if mark >= 75 and mark <= 89 should write Rating:B', () => {
        expect(rating(78)).to.equal('Rating:' + 'B');
    })
    it('if mark >= 90 and mark <= 100 should write Rating:A', () => {
        expect(rating(95)).to.equal('Rating:' + 'A');
    })
})

