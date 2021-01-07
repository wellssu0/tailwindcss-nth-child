Tailwindcss Nth Child Variants Plugin
--
This repository is a plug in for [Tailwindcss](https://github.com/tailwindlabs/tailwindcss) 

 Installation
--
Install the plugin via npm:

    npm install tailwindcss-nth-child

tailwind.config.js
--
Create an instance like this.
``` js
const Nth =  require('tailwindcss-nth-child');
const plugin =  new  Nth('<nth-value>')
module.exports = {
// ...
variants: {
    // extend the backgroundColor variants
    extend:{
      backgroundColor: ['nth-child'],
    }
},
plugins: [
    plugin.nthChild() // add-plugin
],
}
```

> Extending the variants is important.

Value of <nth-value\>
--
You need to give **nth-value** in constructor method. Check the below examples.

### odd
To select odd child:
```js
const plugin =  new  Nth('odd')
```

### even
To select even child
```js
const plugin =  new  Nth('even')
```
### first child
It is simple just write **1** inside of constructor method. To select first child:
```js
const plugin =  new  Nth('1')
```
### (x)n+(y)
You can write which elements you want to select accordingly. You can check [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) for usage of css nth-child 
```js
const plugin =  new  Nth('2n+1')
```

Examples
--
Lets test with **even** child
```jsx
const  Example  =  ()  =>  {
return  (
<div className="nth-child:bg-red-400">
	<div  className="">Example 1</div>
	<div className="">Example 2</div>
	<div className="">Example 3</div>
	<div className="">Example 4</div>
	<div className="">Example 5</div>
	<div className="">Example 6</div>
</div>
);
};
```
Result:
![enter image description here](https://i.imgur.com/kkx4k6w.png)



## TO-DO
 - [x] Add nth-child selector
 - [ ] Add last-child selector
 - [ ] Add important modifier