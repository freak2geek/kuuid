// generate a timestamp - number of milliseconds since the epoch
const ts = function (t) {
  const d = t ? new Date(t) : new Date()
  return Math.floor(d.getTime())
}

module.exports = ts
