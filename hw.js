//TODO task 1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']

let string = ''

for (let i = 0; i < friends.length; i++) {
  string += friends[i]
  if (i < friends.length - 1) {
    string += ', '
  }
}

console.log(string)

string = friends.join(', ')

console.log(string)

//TODO task 2
const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5']

// const cardToRemove = cards.indexOf(2)
cardToRemove = cards.indexOf('Card-3')
const cardToAdd = (cards[5] = 'Card-6')
const cardToUpdate = (cards[3] = 'HYPERCard-3')

cards.splice(cardToRemove, 1)
cards.push(cardToAdd)

console.log(cards)
