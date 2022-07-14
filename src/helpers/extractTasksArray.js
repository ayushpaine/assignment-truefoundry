export function extractTasksArray(object) {
  return (({ tasks }) => ({ tasks }))(object).tasks;
}
