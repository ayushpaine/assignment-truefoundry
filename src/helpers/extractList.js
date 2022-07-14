export function extractList(object, location) {
  return object
    .map(function(item, index) {
      if (item.id === parseInt(location.droppableId)) {
        return object[index];
      }
    })
    .filter(function(element) {
      return element !== undefined;
    })
    .pop();
}
