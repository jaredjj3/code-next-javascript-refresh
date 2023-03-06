# code-next-javascript-refresh

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/web-platform-qhwrl1)

## Variables

Variables store values. They are declared with `let` or `const`.

```js
let foo = 'foo';
const bar = 'bar';
```

Use `let` if you will _reassign_ a variable. 

```js
// GOOD: used let when variable reassigned
let foo = 'foo1';
foo = 'foo2';

// BAD: used let when variable not reassigned
let baz = 'baz';
```

Use `const` if you don't need to _reassign_ a variable.

```js
// GOOD: used const when variable not reassigned
const bar = 'bar';

// BAD: used const when variable reassigned, this will throw an error
const bam = 'bam1';
bam = 'bam2';
```

Declaring a variable **without** using `const` or `let` will put it in the global scope. You should avoid doing this.

```js
// BAD: any context can reassign this!
foo = 'foo';
```

### YOUR TURN

Open `variables.js` and practice using variables.

## Primitives

