
var matrix = require('matrix')
  , it =  require('it-is')

exports ['join two arrays'] = function (){

var left = [1,2,3]
  , right = 'a b c'.split(' ')
  
  it(matrix.product(left,right))
    .has([
       [1,'a'], [2,'a'], [3,'a'] 
    ,  [1,'b'], [2,'b'], [3,'b'] 
    ,  [1,'c'], [2,'c'], [3,'c'] 
    ])

}

exports ['join two arrays with cell function'] = function (){

var left = [1,2,3]
  , right = 'a b c'.split(' ')

  var m = matrix({
    cell: function (x,y){
      return x + y
    }
  })

  it(m.product(left,right))
    .has([
       '1a', '2a', '3a' 
    ,  '1b', '2b', '3b'
    ,  '1c', '2c', '3c'
    ])
}
//thats all that I need right now.