// object destructure 
const person = {
    fullName: 'Hero Khan',
    address: 'Dhaka',
    isMarried: false,
    salary: 30000,
    friendsName: ['asif', 'montu', 'faguni', 'tony'],
    secretInfo: {
        firstGf: 'Alia',
        firstChild: 'Tom',
    }
}

const { fullName, isMarried, isAdult } = person;
const { firstGf } = person.secretInfo;
// const fullName = person.fullName;
// const maritalStatus = person.isMarried;
// if we need some information from a big object then we use destructure if it not found some data in the object then it will return undefined
console.log(fullName, isMarried, isAdult, firstGf);

// array destructure
const [bestFriend, secondBestFriend, ...otherFriend] = person.friendsName;
console.log(bestFriend, secondBestFriend, otherFriend);
