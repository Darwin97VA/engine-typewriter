# engine-typewriter
Generador de maquina de escribir.

```markdown
> npm i engine-typewriter
```

### How to use:
#### Initialize:
It is initialized with an object of three properties of which one is optional.
```js
const config = {
    data: [
        'Lorem ipsum...',
        'Someone text',
        'Hello world!'
    ],
    frecuency: 200,
    // listeners: [callback1, callback2] (optional)
}
const typewriter = new TypeWriter(config)
```

#### Use:
```js
typewriter.add( fragment => {
    console.log(`Hi! Your current fragment is: ${fragment}.` )
})
typewriter.add([
    fragment => console.log(`It's execute each ${typewriter.frecuency} miliseconds.`),
    fragment => console.log("I'm someone callback.")
])
```
#### Results:
In this case, the following will be issued on the console:

```markdown
// 200 ms
Hi! Your current fragment is: L.
It's execute each 200 miliseconds.
I'm someone callback.

// 400 ms
Hi! Your current fragment is: Lo.
It's execute each 200 miliseconds.
I'm someone callback.

// ... 1800 ms
Hi! Your current fragment is: Lorem ipsu.
It's execute each 200 miliseconds.
I'm someone callback.
```

### Enviroment
It's works in Node JS and navigator side. This module works by issuing events using Node js EventEmmiter or a polyfill (it is very light) to simulate this in the browser.


### Fun and Happy Code!

