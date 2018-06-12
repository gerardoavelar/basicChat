var fs = require('fs'),
    path = require('path')

module.exports = {

  saveData: function(dataType, newData, data) {
    var dataPath = datType == 'users' ? __dirname + path.join('/data/users.json'):
                __dirname + path.join('/data/messages.json')
    data.current.push(newData)
    return new promise(function(resolve, reject) {
      fs.writeFile(dataPath, JSON.stringify(data), function(err) {
        if(err) reject(err)
        resolve('OK')
      })
    })
  },
  getData: function(dataType) {
    var dataPath = datType == 'users' ? __dirname + path.join('/data/users.json'):
                __dirname + path.join('/data/messages.json')
    return new promise(function(resolve, reject) {
      fs.readFile(dataPath, 'utf8', function(err, readData) {
        if(err) reject(err)
        resolve(JSON.parse(readData))
      })
    })
  }
}
