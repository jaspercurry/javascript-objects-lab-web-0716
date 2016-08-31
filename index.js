var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
object[key] = value;
return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object

}

function deleteFromObjectByKey(obj, key) {
  var new_obj = Object.assign({}, obj)
  delete new_obj[key]
  return new_obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object 

}
