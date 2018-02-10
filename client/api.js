import request from 'superagent'

const compareUrl = 'http://localhost:3000/api/v1/compare'


export function getWidgets (callback) {
  request
    .get(compareUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function postList (data, callback) {
  request
    .post(compareUrl)
    .set('Content-Type', 'application/json')
    .send(data)
    .then(callback)
}
