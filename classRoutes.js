const express = require('express')
const path = require('path')
const router = express.Router()
const classList = [] // our class list array
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})
// Create
router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.student)
  classList.push(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})
// router.post('/api/create', function (req, res) {
//   console.log('creating a student entry')
//   res.json('creating')
// })

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
// Delete
router.post('/api/delete', function (req, res) {
  console.log('Deleting the following student:', req.body.studentDel)
  var i = classList.indexOf(req.body.studentDel)
  if (i > -1) {
    classList.splice(i, 1)
  }
  res.redirect(req.baseUrl + '/api/list')
})
router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
// Edit
router.post('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})
router.post('/api/edit', function (req, res) {
  console.log('editing a student entry')
})

module.exports = router
