import test from 'ava'

import rename from '../src'

test('should rename the object', t => {
  const obj = {
    foo: 'foo',
    bar: 'bar',
  }
  t.deepEqual(rename({ foo: 'name' }, obj), { name: 'foo', bar: 'bar' })
})
