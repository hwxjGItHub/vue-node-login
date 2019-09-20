var User = require('../models/users');
var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
  if (req.body.username == '' && req.body.password == '') {
    res.send({ 'status': 201, 'message': '账户或密码不能为空!' });
    return;
  }
  User.find({ username: req.body.username, password: req.body.password }, function (err, data) {
    if (err) {
      res.send({ 'status': 400, 'message': '查询数据库失败!', 'data': err });
    } else {
      if (data.length > 0) {
        req.session.user = data[0].username;
        res.send({ 'status': 200, 'message': '登录成功!' });
      } else {
        res.send({ 'status': 201, 'message': '账户或密码错误', 'data': err });
      }
    }
  })
})

router.post('/register', function (req, res) {
  let data = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    address: req.body.address,
  }
  if (req.body.username == '' || req.body.password == '') {
    console.log(req.body, 99999)
    res.send({ 'status': 201, 'message': '账户或密码不能为空!' });
    return;
  }
  User.create(data, function (err, doc) {
    if (err) {
      res.send({ 'status': 400, 'message': '注册失败', 'data': err });
    } else {
      res.send({ 'status': 200, 'message': '注册成功!' });
    }
  })
})

router.get('/session', function (req, res, next) {
  res.send({ 'status': 200, 'username': req.session.user });
  res.end();
})

module.exports = router;
