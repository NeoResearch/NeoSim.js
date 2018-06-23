
// StackItem (just carrying only BigInteger and ByteArray functionalities)

//public Integer(BigInteger value) {
//    this.value = value;
//}

//import SimpleBigInteger from './simplebiginteger'

// https://github.com/peterolson/BigInteger.js
//npm install big-integer
//import BigInteger from "big-integer";

const BigInteger = require("big-integer");
//const BigInteger = await import('big-integer');

//console.log(BigInteger);

var StackItem = function(_value = new BigInteger(0)) {
   // 'this.value' is always BigInteger
   if(_value.constructor === Array) {
      console.log("StackItem is ByteArray "+_value);
      this.value = new BigInteger(_value);
   }
   else if (_value.constructor === BigInteger) {
   //else {
      console.log("StackItem is BigInteger "+_value);
      this.value = _value
   }
   else {
      console.log("StackItem is Something Else... try to convert to BigInteger!"+_value);
      this.value = new BigInteger(_value);
   }
}

// C#
//public virtual BigInteger GetBigInteger() {
//            return new BigInteger(GetByteArray());
//}

StackItem.prototype.GetBigInteger = function() {
    return this.value;
}

//public override byte[] GetByteArray() {
//    return value.ToByteArray();
//}

StackItem.prototype.ToByteArray = function() {
    var varray = this.value.toArray(256);
    console.log(varray);
    if(!varray.isNegative)
      return varray.value;
    else
      return varray.value; // TODO: deal with negative values in bytearray
}



if(typeof module !== 'undefined') {
   module.exports = StackItem;
}
