'use strict';

module.exports = function(array, algoName, callback) {

  const async = require('async');

  async.auto({
    sortArray:function(next){
      if(algoName == 'selection' ){
        selectionSort(array, next);
      }else if (algoName == 'insertion') {
        insertionSort(array, next);
      }else if (algoName == 'bubble') {
        bubbleSort(array, next);
      }
    },
  },function(err, results){
      var sortedArray = results.sortArray;
      callback(null,sortedArray);
  });


//functions

  function selectionSort(array, fnCallback){
    var length = array.length;

    var count1 = 0;
    async.whilst(function(){      //function for checking the while loop condition
      return count1<length-1;
    },function(whCallback1){
      var min = count1;
      var count2 = count1 + 1;

      async.whilst(function(){      //function for checking the while loop condition
        return count2<length;
      },function(whCallback2){
        if(array[count2] < array[min]){
          min = count2;
        }
        count2 = count2 + 1;
        whCallback2();
      },function(err2){
          if(min != count1){
            var temp = array[count1];
            array[count1] = array[min];
            array[min] = temp;
          }
          count1 = count1 + 1;
          whCallback1();
      })
    },function(err1){
      fnCallback(null,array);
    })
  };

  function insertionSort(array, fnCallback){
    var length = array.length;
    var count1 = 1;

    async.whilst(function(){
      return count1<length;
    },function(whCallback1){
        var temp = array[count1];
        var count2 = count1 - 1;

        async.whilst(function(){
          return (count2>=0 && (array[count2] > temp));
        },function(whCallback2){
          array[count2 + 1] = array[count2];
          count2 = count2-1;

          whCallback2();
        },function(err2){
            array[count2 + 1] = temp;
            count1 = count1+1;
            whCallback1();
        })
    },function(err1){
        fnCallback(null,array);
    })
  };

  function bubbleSort(array, fnCallback){
    var length = array.length;
    var count1 = length-1;

    async.whilst(function(){
      return count1 >= 0;
    },function(whCallback1){
        var count2 = length - count1;

        async.whilst(function(){
          return count2 > 0;
        },function(whCallback2){
            if(array[count2] < array[count2 - 1]){
              var temp = array[count2];
              array[count2] = array[count2 - 1];
              array[count2 - 1] = temp;
            }
            count2 = count2 - 1;
            whCallback2();
        },function(err2){
            count1 = count1 - 1;
            whCallback1();
        })
    },function(err1){
        fnCallback(null,array);
    })
  };

};
