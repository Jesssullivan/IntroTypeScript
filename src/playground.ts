// Let's write a program that:
// prompts the user to type "Hello World"
//  - print some info about the response;
//    - what is the type of user data we can use?
//    - did the user type Hello World?
//    - how many characters were typed?
//    - how many more characters are needed to reach the number 42?

let helloWorldString = "Hello World"

// first thing the user will interact with:
console.log("What do you say? (try, 'Hello World!')")

// start reading from stdin:
process.stdin.on("data", (data: string) => {

    const response: string = data.toString().toLowerCase()

    helloWorldString = helloWorldString.toLowerCase()

    // what is the type of user data we can use?
    console.log("Data type: " + typeof response)

    // did the user type Hello World?
    if (response.split("!")[0].match(helloWorldString.split("!")[0])) {
        console.log("You did it!  Yay! :)")
    } else {
        console.log("You did not write hello world :|")
    }

    // how many characters were typed?
    console.log("Character count: " + (data.length - 1))

    //how many more characters are needed to reach the number 42?
    console.log(`It'll take ${42 - (data.length - 1)} characters to reach a total of 42!`)

    // exit our lil stdin process and exit:
    process.exit()

})
