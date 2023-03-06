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

The primitive types are: `String`, `Boolean`, `null`, `undefined`, `Number`, `Symbol`, and `BigInt`.

```js
const arrayOfCharacters = 'hello world!'; // String
const trueOrFalse = true; // Boolean
const explicitAbsenceOfAValue = null; // null
const variableDeclaredButNotAssignedYet = undefined; // undefined
const countThings = 5; // Number
const symbol = Symbol('hello'); // Symbol
const largeNumber = BigInt(9007199254740991) // BigInt
```

### YOUR TURN

Open `primitives.js` and practice using primitives.

## Objects

Objects map keys to values.

```js
const o = {
  hello: 'world',
  lol: 'lol'
};

console.log(o.hello) // world
console.log(o['hello']) // world
console.log(o.goodbye) // undefined
```

Values can be objects.

```js
const o = {
  whats: {
    my: {
      secret: '👌👖',
    }
  }
};

console.log(o.whats.my.secret); // 👌👖
```

Objects are mutable.

```js
const o = {
  foo: 'foo1',
};

console.log(o); // { foo: 'foo1' }

o.foo = 'foo2';
o.bar = 'bar1';

console.log(o); // { foo: 'foo2', bar: 'bar1' }
```

Arrays are objects whose values are keyed by their index.

```js
const arr = [1, 'two', { three: 'three' }];

console.log(arr[0]); // 1
console.log(arr[1]); // two
console.log(arr[2]); // { three: 'three' }
console.log(typeof arr) // object
```

### YOUR TURN

Open `objects.js` and practice using objects.