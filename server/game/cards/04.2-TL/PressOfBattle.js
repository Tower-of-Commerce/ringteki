const DrawCard = require('../../drawcard.js');
const { CardTypes } = require('../../Constants');

class PressOfBattle extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Bow a non-unique character',
            condition: context => this.game.isDuringConflict('military') &&
                                 this.game.currentConflict.hasMoreParticipants(context.player),
            target: {
                activePromptTitle: 'Choose a character',
                cardType: CardTypes.Character,
                cardCondition: card => card.isParticipating() && !card.isUnique(),
                gameAction: ability.actions.bow()
            }
        });
    }
}

PressOfBattle.id = 'press-of-battle';

module.exports = PressOfBattle;
