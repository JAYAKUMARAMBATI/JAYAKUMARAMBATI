const  mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

let pizzasSchema = require('../Models/pizzas')



router.route('/create-pizzas').post((req, res, next) => {
  pizzasSchema.init() 
  pizzasSchema.create(req.body, (error, data) => {
    
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


router.route('/').get((req, res , next) => {
  pizzasSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
     
      res.json(data)
    }
  })
})

router.route('/edit-pizzas/:id').get((req, res, next) => {
  pizzasSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/update-pizzas/:id').put((req, res, next) => {
  pizzasSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('pizzas updated successfully !')
      }
    },
  )
})

// Delete pizzas
router.route('/delete-pizzas/:id').delete((req, res, next) => {
  pizzasSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
