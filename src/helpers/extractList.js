export function extractList(object, location) {
  return object
    .map(function(item, index) {
      if (item.id === parseInt(location.droppableId)) {
        return object[index];
      } else {
        return undefined;
      }
    })
    .filter(function(element) {
      return element !== undefined;
    })
    .pop();
}
