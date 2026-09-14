import {Friend, Colleague, EmailContact } from './myTypes'
import { friends,colleagues } from './01-basics'

function older(f: Friend){
    f.age += 1
    return `${f.name} is now ${f.age}`
}
console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

// Add colleague to array and set extension num to highest extension plus 1
function addColleague (cs: Colleague[], name: string, department: string, email: string ){
    const highestColleague = highestExtension(cs); //* USe parameters passed instead of hardcoded vars
    const nextExtension = highestColleague.contact.extension + 1;

    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
        email: email,
        extension: nextExtension,
      },
    };

    /*
    const newColleague1: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: nextExtension,
      },
    };
    */
    
    cs.push(newColleague); // Correct use of passed parameter
    
    return newColleague
    //return [...cs, newColleague1]
  }

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
//console.log(colleagues.current)

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number // callback (function)
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({name: ce.name, email: ce.contact.email }));
  return result
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length ));


function findFriends(
  friends: Friend[],
  isMatch: (f: Friend) => boolean //callBack function can be named something relevant
): string[] {
  return friends.filter(isMatch).map((f) => f.name)
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));


