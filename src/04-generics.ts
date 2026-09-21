import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

/**
 * 
 * @param data Takes an array of items
 * @param criteria Takes a comparison func
 * @returns a new array sorted according to criteria
 * 
 * How it works:
 *  - 'data' is a T[] (an array of any type T)
 *  - 'criteria is a function that compares two items of Type T
 *      It must return:
 *          < 0 if a should before b
 *          > 0 if a should come after b
 *          = 0 if they are equal in sorting order
 * 
 * Why T[]?
 *  - Function will work for any type T
 *  - Comparator recieves correct type ( a:T,b:T)
 *  - Return array is T[]
 * 
 * Notes:
 *  - This actively works on the array, so no mutate could copy ? [...data]
 *  - Built in Array.sort() utilised
 */
function sort<T>( data : T[], criteria:(a:T, b:T) => number) : T[]{
    return data.sort(criteria)
}

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
