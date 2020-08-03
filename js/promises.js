//Exercises
// Handle An API Promise
// 1. Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//    COMP

// 2. Generate a Personal Access Token for the GitHub API.

//    We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your
//    requests like this:

//    fetch(url, {headers: {'Authorization': 'gitHubApiKey'}})

// 3. Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the
//    last commit that user made. Reference the github api documentation to achieve this.

let getLastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {"authorization": `token ${gitHubApiKey}`}})
        .then((resp) => {
        console.log(resp);
                resp.json()
                    .then((json) => {
                    console.log(json);
                        for(let event of json) {
                            if(event.type === "pushEvent") {
                                let localeString = new Data(event.create_at). toLocalString("en-US");
                                let commit = event.payload.commits[0];
                                console.log(`last Commit Made by ${username} at ${localeString}:\n${commit.sha.slice(-5)} - ${commit.message}`);
                                break;
                                }
                            }
                        });
                    }
                );
            }
getLastCommit('dspini');
//console.log(getLastCommit('dspini'))

// Create Your Own Promise
// 1. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the
//    passed number of milliseconds.

//      wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//      wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//      1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log
//      message more dynamic.

let wait = (delay) => new Promise((resolve, _) => {
    setTimeout(() => {
        resolve();
    }, delay);
});

wait(3000).then(() => {console.log("dspini"); });
