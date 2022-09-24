// Min stack


var MinStack = function() {
    this.stack = [];
    this.currMin = Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length == 0) {
        this.stack.push(val)
        this.currMin = val
    } else {
        if (val < this.currMin) {
            this.stack.push(val - this.currMin)
            this.currMin =  val
        } else {
            this.stack.push(val - this.currMin)
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        if (this.stack[this.stack.length - 1] >= 0) {
            this.stack.pop()
        } else {
            this.currMin = this.currMin - this.stack[this.stack.length - 1]
            this.stack.pop()
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length == 1) {
        return this.stack[0]
    } 
     if (this.stack[this.stack.length - 1] >= 0) {
         return this.currMin + this.stack[this.stack.length - 1]
     } else {
       return this.currMin
     }

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length == 1) return this.stack[0]
    return this.currMin
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */