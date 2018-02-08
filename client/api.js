import request from 'superagent'

const compareUrl = 'http://localhost:3000/api/v1/compare'

export function getWidgets (callback) {
  request
    .get(compareUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}
