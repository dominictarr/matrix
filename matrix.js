//product.js

/*

from two arrays, generate cartesian product

[1,2,3,4], ['a',b']

cell function merges values into one object.

cell(1,'a')
cell(2,'a')
cell(3,'a')
cell(4,'a')

cell(1,'b')
cell(2,'b')
cell(3,'b')
cell(4,'b')

then, another function to turn set into a list, or a table

and what about converting a list into a table?
specify column and row keys, move down list grouping them together 

get(x,y) -> retrive a cell.

*/

module.exports = Matrix

function Matrix (opts){
  if(!(this instanceof Matrix)) return new Matrix(opts)

  if(opts)
    for(var f in opts){
      this[f] = opts[f]
    }
}

Matrix.prototype = Matrix

Matrix.product = function (left,right){

  var result = []

  for(var j in right){

    for(var i in left){
      result.push(this.cell(left[i],right[j]))
    }
  }
  return result
}

Matrix.cell = function (x,y){
  return [x,y]
}

