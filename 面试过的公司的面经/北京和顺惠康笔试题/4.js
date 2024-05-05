var fruits = [
    { label: 'Apple', value: 2 },
    { label: 'Banana', value: 12 },
    { label: 'Cherry', value: 8 },
    { label: 'Strawberry', value: 13 },
    { label: 'Pineapple', value: 4 }
]

// 1.1 for循环
function fruitsFilterFor() {
    let res;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].value === 13) {
            res = fruits[i]
        }
    }
    return res

}
// 1.2 forEach
function fruitsFilterForeach(fruits) {
    let res;
    fruits.forEach(item => {
        if (item.value === 13) {
            res = item
        }
    })
    return res
}
console.log(fruitsFilterFor(fruits))
console.log(fruitsFilterForeach(fruits))

// 2.1 根据value递增排序(for)
function increFruitsFor(fruits) {

    for (let i = 0; i < fruits.length; i++) {

        for (let j = i + 1; j < fruits.length; j++) {

            if (fruits[j].value < fruits[i].value) {

                let temp = fruits[i];
                fruits[i] = fruits[j];
                fruits[j] = temp;
            }
        }
    }
    return fruits
}
// 2.2 根据value递增排序(sort)
function increFruits(fruits) {
    const res = fruits.sort((a, b) => {
        return a.value - b.value
    })

    return res
}
console.log(increFruitsFor(fruits))
console.log(increFruits(fruits))

// 3.1 计算value总和(for)
function sumValueFor(fruits) {
    let sum = 0;
    for (let i = 0; i < fruits.length; i++) {
        sum += fruits[i].value
    }
    return sum
}
// 3.2 计算value总和(reduce)
function sumValue(fruits) {
    const res = fruits.reduce((pre, cur) => {
        return pre + cur.value
    }, 0)

    return res
}
console.log(sumValue(fruits))
console.log(sumValueFor(fruits))

