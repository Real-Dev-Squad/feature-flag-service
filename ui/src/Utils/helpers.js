export function camelCaseToNormal(string) {
  return (
    string
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
  );
}

/**
 * @function searchFilter to filter featureList when userInput changes
 * @param list {array} featureList
 * @param action {string} user input
 * @return {array} filtered list
 */

export default function searchFilter(list, userSearchInput = '') {
  return list.filter(
    (value) =>
      // Filter by userName
      value.createdBy.toLowerCase().includes(userSearchInput.toLowerCase()) ||
      // Filter by featureFlag status
      value.featureFlag.toLowerCase().includes(userSearchInput.toLowerCase()) ||
      // Filter by Repository Name
      value.repository.toLowerCase().includes(userSearchInput.toLowerCase())
  );
}
