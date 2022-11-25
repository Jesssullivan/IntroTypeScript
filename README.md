# IntroTypeScript

### Lesson scaffolding for teaching my housemates TypeScript.  

#### Learn how to write and iterate on a command line utility of your own in pure modern TypeScript.


*Lez write some code!*

Open the following documentation pages in tabs in your browser:
- [JavaScript Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
- [JavaScript Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
- [JavaScript Indexes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- [JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript Globals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [tsc Compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [eslint Docs](https://typescript-eslint.io/docs/)


- - - -

*Setup:*

```
# clone this repo:
git clone https://github.com/jesssullivan/IntroTypeScript && cd IntroTypeScript

# install typescript, node & eslint parser:
npm install 

## Setup your TS linter (only if you want to set up eslint yourself)
# npm init @eslint/config 

# Lint your TS:
npx eslint src/playground.ts

# Transpile some TS:
tsc src/playground.ts --outfile pub/playground_bundle.js

# Run your program:
node pub/playground_bundle.js 
```

- - -

*To start, lets write a program that:*
- prompts the user to type "Hello World"
  - print some info about the response;
    - what is the type of user data we can use?
    - did the user type Hello World?
    - how many characters were typed?
    - how many more characters are needed to reach the number 42?
