# rename-props

### Install:

```
npm i rename-props --save
```

### Useage

```
test('should rename the object', t => {
  const obj = {
    foo: 'foo',
    bar: 'bar',
  }
  t.deepEqual(rename({ foo: 'name' }, obj), { name: 'foo', bar: 'bar' })
})
```
