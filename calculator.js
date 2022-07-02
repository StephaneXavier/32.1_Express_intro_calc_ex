const express = require('express')
const ExpressError = require('./errors')
const { mean, median, mode, checkArr, toArr } = require('./function')

const app = express()

app.get('/mean', (req, res, next) => {
    const nums = req.query.nums
    if (!nums) {
        throw new ExpressError('Numbers required as parameter divided by comma', 400)
    }

    if (checkArr(nums) != true) {
        res.send(checkArr(nums))
        return
    }

    const numsArr = toArr(nums)
    const result = mean(numsArr)
   
    res.json({response:{ operation: "mean", result: `${result}` }})
})


app.get('/median', (req,res) =>{
    const nums = req.query.nums
    if (!nums) {
        throw new ExpressError('Numbers required as parameter divided by comma', 400)
    }

    if (checkArr(nums) != true) {
        res.send(checkArr(nums))
        return
    }
    const numsArr = toArr(nums)
    
    res.json({response :{operation:'median', result : `${median(numsArr)}`}})
})


app.get('/mode', (req,res) => {
    const nums = req.query.nums
    if (!nums) {
        throw new ExpressError('Numbers required as parameter divided by comma', 400)
    }

    if (checkArr(nums) != true) {
        res.send(checkArr(nums))
        return
    }
    const numsArr = toArr(nums)
    
    res.json({response: {operation:'mode', result:`${mode(numsArr)}`}})

})


app.listen(3000, function () {
    console.log('Server on port 3000')
})