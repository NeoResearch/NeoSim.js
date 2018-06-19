
var Stack = function() {
    this.Count = 0;
    this.storage = {};
}

Stack.prototype.Push = function(value) {
    this.storage[this.Count] = value;
    this.Count++;
}

Stack.prototype.Pop = function() {
    if (this.Count === 0) {
        return null;
    }

    this.Count--;
    var result = this.storage[this.Count];
    delete this.storage[this.Count];
    return result;
}

Stack.prototype.Peek = function(n=0) {
    if (this.Count === 0) {
        return null;
    }

    return this.storage[this.Count-1-n];
}

Stack.prototype.Size = function() {
    return this.Count;
}
