# Simple Linear Regression

Very basic linear regression

## Usage

The constructor has two optional arguments:

* ```data``` An array of pairs in the form [x,y]
* ```clearData``` A boolean value (by default ```true```) that determines if the data array will be cleared
after analyzing the data to save memory.

The library exposes two methods:

* ```analize``` Used to calculate correlation, slope, mean, standard deviation and function intercept.
* ```predict(x)``` Calculates the value of ```y``` for a value ```x```

### Initialization with data

```js
const LR = require('lregression');
const regression = new LR();
const data = [ [1,2], [2,4], [3,6] ];

console.dir(regression.analize());

regression.analize();
for (let i = 4; i < 10; i++) {
	console.log(`x=${i} y=${regression.predict(i)}`);
}
```

### Manually feeding the data

```js
const LR = require('lregression');
const regression = new LR();

for (let i = 0; i < 50; i++) {
	regression.add(i, i * 2);
}

console.dir(regression.analize());

regression.analize();
for (let i = 51; i < 100; i++) {
	console.log(`x=${i} y=${regression.predict(i)}`);
}
```