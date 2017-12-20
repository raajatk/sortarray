# arraysorts
The NPM package for sorting the array using standard algorithms.

## Installation
```
npm install arraysorts
```

## Running Example File
```
node example.js
```

## Example Code
```
var arraysorts = require('arraysorts');
var async = require('async');

var algoName = 'bubble';

async.auto({
  fetchSortedArray:function(next){
    arr = [23,34,12,4,56,21,4];
    sortarray(arr,algoName,next)}
  },function(err,results){
    console.log(algoName,"-->",results.fetchSortedArray)
})

```
## Key for Sorting Algorithm
>'insertion' for insertionSort

>'selection' for selectionSort

>'bubble' for bubbleSort

## License
This project is licensed under the MIT License - see the LICENSE file for details
