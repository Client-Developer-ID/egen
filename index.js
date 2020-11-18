/**
*@param {string} Text
*@returns {string} `string`
*/
module.exports = (Text) => {
  return Text.replace(/[a,i,u,o]/gi, "e")
}
