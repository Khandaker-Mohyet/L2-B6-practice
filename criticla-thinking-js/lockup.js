// genarate a lookup table

// Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;

  return table;
}, {})

// console.log(lookupTable)

const post = lookupTable["p-103"]

// console.log(post)

// grooping data


//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

const count = surveyResponses.reduce((table, response) => {
  if (table[response]) {
    table[response] = table[response] + 1
  } else {
    table[response] = 1;
  }

  return table;
}, {})

console.log(count)
