# neon-sim
Neo AVM simulator

Dependencies:
`npm install big-integer`

Test with StackItem:

`nodejs`

`var StackItem = require('./stackitem.js')`

`var x = new StackItem(400)`

`x.ToByteArray()  // [ 1, 144 ]`


Test with NeonSimPrice:

`neonjs`

`const NeonSimPrice = require('./neon-sim.js')`

`NeonSimPrice.execute(NeonSimPrice.example())`
