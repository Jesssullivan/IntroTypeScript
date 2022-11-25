# IntroTypeScript

### Lesson scaffolding for teaching my housemates TypeScript.  

#### Learn how to write and iterate on a command line utility of your own in pure modern TypeScript.


*Lez write some code!*

Open the following doc pages in tabs in your browser:
- [JavaScript Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
- [JavaScript Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
- [JavaScript Indexes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- [JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript Globals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [tsc Compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [eslint Docs](https://typescript-eslint.io/docs/)

```
# clone this repo:
git clone https://github.com/jesssullivan/IntroTypeScript && cd IntroTypeScript

# install typescript, node & eslint parser:
npm install 

# Setup your TS linter:
npm init @eslint/config 

# Transpile some TS:
tsc src/playground.ts --outfile pub/playground_bundle.js

# Lint your TS:
npx eslint pub/playground_bundle.js

# Run your program:
node pub/playground_bundle.js 
```
