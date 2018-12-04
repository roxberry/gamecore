//load index.json
//expose index object to import
//simple tree
var fs = require('fs');

function read(srcPath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    })
}

function write(savPath, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(savPath, data, function (err) {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
        });
    })
}

module.exports = {
    read,
    write
}