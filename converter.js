import fs from 'fs';

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

  /*
   * Creates a new file called data.csv
   * @param {Object[]} data - Object array to convert into CSV
   * @param {string} extension - extension of exported file options ['csv', 'xlsx']
   *
   * */
  exportFile(data, extension) {
    if (!fs.existsSync('./build')) fs.mkdirSync('./build'); // create dir if doesn't exist

    let ext =
      (extension.toLowerCase() == 'csv' || extension.toLowerCase() == 'xlsx')
        ? extension.toLowerCase()
        : 'csv';

    fs.writeFileSync(`build/data.${ext}`, this.convertData(data));

    console.log('build/data.csv created successfully✅'); // completion message
  }
}
