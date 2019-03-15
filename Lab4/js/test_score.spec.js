let expect = chai.expect;

import Score from '../js/score.js';

describe('Score instances', () => {

	let score;
	beforeEach(() => {score = new Score(); });

	it('Start with all counts set to zero', () => {
		checkValuesAre(switchWins, switchLosses, stayWins, stayLosses){
			expect (score.switchWins).to.equal(switchWins);
    		expect (score.switchLosses).to.equal(switchLosses);
    		expect (score.stayWins).to.equal(stayWins);
    		epxect (score.stayLosses).to.equal(stayLosses);
		}

		checkValuesAre(0, 0, 0, 0);

   		});

});



