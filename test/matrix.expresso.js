
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

exports ['product of two arrays'] = function (){
var suites = 'H S C D'.split(' ')
  , ranks  = '2 3 4 5 6 7 8 9 10 J K Q A'.split(' ')

  var m = matrix({
    cell: function (rank,suite){
      return suite + '-' + rank
    }
  })
  var pack = m.product(ranks,suites)
  it(pack)
    .property('length',52)
  console.log(pack)
  
  var table = 
    m.tabulate(pack, function (e,index){
      var card = e.split('-')
      index(card[0],card[1],e)
    })

  it(table.get('S','A')).equal('S-A')
  it(table.get('C','Q')).equal('C-Q')
  it(table.get('D','2')).equal('D-2')

  it(table)
    .has({
      rows: 'H S C D'.split(' ')
    , cols: '2 3 4 5 6 7 8 9 10 J K Q A'.split(' ')
    })

  it(table.toArray())
    .deepEqual(
     [ ['H-2',  'H-3',  'H-4',  'H-5',  'H-6',  'H-7',  'H-8',  'H-9',  'H-10',  'H-J',  'H-K',  'H-Q',  'H-A'] 
     , ['S-2',  'S-3',  'S-4',  'S-5',  'S-6',  'S-7',  'S-8',  'S-9',  'S-10',  'S-J',  'S-K',  'S-Q',  'S-A']
     , ['C-2',  'C-3',  'C-4',  'C-5',  'C-6',  'C-7',  'C-8',  'C-9',  'C-10',  'C-J',  'C-K',  'C-Q',  'C-A']
     , ['D-2',  'D-3',  'D-4',  'D-5',  'D-6',  'D-7',  'D-8',  'D-9',  'D-10',  'D-J',  'D-K',  'D-Q',  'D-A'] ]
    )
}