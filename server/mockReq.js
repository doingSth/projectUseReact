module.exports = function (app) {
  app.get('/test', function(req, res){
    res.send(require('./json/test'));
  });
  app.get('/list', function(req, res){
    res.send(require('./json/list'));
  });
  app.get('/newList', function(req, res){
    res.send(require('./json/newList'));
  });
  app.get('/item/:id', function(req, res){
    res.send(require('./json/item'));
  });
};

