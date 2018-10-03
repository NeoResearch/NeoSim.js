# NeoSim.js
Neo AVM simulator on JavaScript.
This project is intended to run together with NeoVM.js, and some external storage service, that will accomplish the part of the Application Engine information available at heavy RPC nodes. This is a safer alternative to testinvoke on RPC, and it will run on any browser.

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
