var sort = require('./index.js');
var async = require('async');

var algoName = 'bubble';
// var algoName = 'selection';
var arr;

async.auto({
  fetchSortedArray:function(next){
    arr = [23,34,12,4,56,21,4];
    sort(arr,algoName,next)}
  },function(err,results){
    console.log(algoName,"-->",results.fetchSortedArray)
})
