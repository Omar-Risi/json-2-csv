export default {
  /*
   * returns text of converted Object into CSV 
   * @param {Object[]} data - Object array to convert into csv
   * */
  convertData(data) {
    if (!data[0]) throw new Error("Expected array of objects for argument 'data' "); // stop function if no array provided 
    let text = "";
    Object.keys(data[0]).forEach(key => {
      text += `${key}, `;
    });
    for (let i = 0; i < data.length; i++) {
      text += "\n";// start new row 
      Object.values(data[i]).forEach(val => {
        text += `${val}, `;
      })
    }

    return text;
  },

}
