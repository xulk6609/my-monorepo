// 获取 id 映射信息
export function getIdMap(nameMap) {
  let list = Object.values(nameMap)
  let result = {}
  list.forEach((item) => {
    result[item.id] = item
  })
  return Object.freeze(result)
}
// 获取映射信息
export function getKeyToValueMap(nameMap, key = 'id', value = 'name') {
  let list = Object.values(nameMap)
  let result = {}
  list.forEach((item) => {
    result[item[key]] = item[value]
  })
  return Object.freeze(result)
}

/**
 * 获取数组形式的 map 信息
 * @param {Object} nameMap 字典对象
 * @param {String} [keyName] 原来 Map 上的 key 作为数组元素的属性值时使用的 keyName
 * @param {Function} [sortMethod] 转换为数组时可选的排序方式，与 Array.sort 一致
 * @returns {Array} 数组形式的字典
 */
export function getMapToArray(nameMap, keyName = 'key', sortMethod = null) {
  let list = Object.entries(nameMap)
  let array = []
  list.forEach(([key, value]) => {
    const newItem = {
      [keyName]: key,
      ...value,
    }
    array.push(newItem)
  })

  if (sortMethod) {
    return array.sort(sortMethod)
  }
  return array
}