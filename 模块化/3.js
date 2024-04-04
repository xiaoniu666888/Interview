import('./1.js').then(res => {
    console.log(res)
    res.default()
})

import('./2.js').then(res => {
    console.log(res)
    res.foo()
})