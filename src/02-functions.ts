import {Friend, Colleague } from './myTypes'
import { friends,colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}
console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

// Add colleague to array and set extension num to highest extension plus 1
function addColleague (cs: Colleague[], name: string, department: string, email: string ): Colleague {
    const highestColleague = highestExtension(colleagues.current);
    const nextExtension = highestColleague.contact.extension + 1;
    //const c1;
    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
        email: email,
        extension: nextExtension,
      },
    };

    colleagues.current.push(newColleague);
    return newColleague
  }

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

