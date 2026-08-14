// daynamically generics


type GenericArray<value> = Array<value>

const friendsList: GenericArray<string> = ['sachin', 'virat', 'dhoni', 'rohit'];

const rollNumbers:GenericArray<number> = [1, 2, 3, 4, 5];

const isEligible:GenericArray<boolean> = [true, false, true, false];


type Coordinates <X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [10, 20];

const coordinates2: Coordinates<string, string> = ['10', '20'];

// also array of objects use on genarics