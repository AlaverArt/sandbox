function sum() {
    return [...arguments].reduce((sum, item) => sum + item, 0);
}

function spy(func) {
    function wrapper() {
        const result = func.call(this, ...arguments);
        wrapper.calls.push([...arguments]);
        return result;
    }

    wrapper.calls = [];
    return wrapper;
}

const mySpySum = spy(sum);

mySpySum(1,1,1,1,1);
mySpySum(2,2,2,2,2);
mySpySum(3,3,3,3,3);

console.log(mySpySum.calls);
