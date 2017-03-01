export const renameProps = (mapping, obj) => {
  Object.keys(mapping).forEach(fromKey => {
    obj[mapping[fromKey]] = obj[fromKey]
    delete obj[fromKey]
  })
  return obj
}

export default renameProps
