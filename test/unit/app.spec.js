describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return area and message', function () {
			expect(answer.calculateArea(7,2,1,'Succes','Error')).toEqual({area: 5 ,message: 'Succes'});
        });
		it('should return area and message', function () {
			expect(answer.calculateArea(5,2,1,'Succes','Error')).toEqual({area: 3 ,message: 'Succes'});
		});
		it('should return area and message', function () {
			expect(answer.calculateArea(5,2,1,'S','Error')).toEqual({area: 3 ,message: 'S'});
		});
    });
});
