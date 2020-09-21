let test = require('tape')
let sandbox = require('@architect/sandbox')

test('Shut down sandbox', async t=> {
  t.plan(1)
  let result = await sandbox.end()
  t.equal(result, 'Sandbox successfully shut down')
})
