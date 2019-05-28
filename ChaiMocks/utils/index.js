const http = require('http');


module.exports.isValid = (url) => {
    const options = {
        method: 'HEAD',
        host: url
    }
const promise = new Promise((resolve, reject) => {
    const req = http.request(options, () => {
        return resolve(true)
    })
    req.on('error', () => {
        return reject(new Error('Not valid'))
    })

    req.end();
})

return promise;
}