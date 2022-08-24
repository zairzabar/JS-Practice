class Stack {
    #arr
    constructor() {
        this.#arr = []
    }

    push(x) {
        this.#arr.push(x)
    }

    pop() {
        this.#arr.pop()
    }

    top() {
        return this.#arr[this.#arr.length - 1]
    }
}

let st = new Stack()
st.push(10)
st.push(20)
st.push(30)

console.log(st.top())
st.pop()

