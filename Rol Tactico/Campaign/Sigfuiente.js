[h: round = getInitiativeRound()]
[h:nextInitiative()]
[h: tok = getInitiativeToken() ]
[h: roundNew = getInitiativeRound()]
[ if( roundNew > round ), CODE: {	
    [macro("ResetTokens@campaign"): 1]
    [macro("finAsalto@campaign"): 1]
	
};{}]
[h, if( isPC(tok) ): goto(getInitiativeToken())]

