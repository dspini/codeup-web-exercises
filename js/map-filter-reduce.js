// 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 2. Use .filter to create an array of user objects where each user object has
// at least 3 languages in the languages array.

let filtered = users.filter((user) => user.languages.length > 2); 
 
console.log(filtered);

// 3. Use .map to create an array of strings where each element is a user's email address

let emails = users.map((user) => user.email);

console.log(emails);

// 4. Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce((a, user) => a + user.yearsOfExperience, 0);

console.log(totalYears / users.length);

// 5. Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((a, user) => {
    if (user.email.length > a.length)
        return user.email;
    else
        return a;
}, '');

console.log(longestEmail)

// 6. Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce((a, user) => {
    a.push(user.name);
    return a;
}, []).join(', ');

console.log(userNames);

//Bonus
// 1. Use .reduce to get the unique list of languages from the list of users.

let userLanguages = users.reduce((a, user) => {
    a.push(user.languages);
    return a;
}, []).join(', ');

console.log(userLanguages);