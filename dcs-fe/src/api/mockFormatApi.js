import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const formats = [
  { id: "Big-Group", name: "Big Group" },
  { id: "Small-Group", name: "Small Group" },
  { id: "Individual", name: "Individual" },
  { id: "Solo", name: "Solo" },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (format) => {
  return replaceAll(format.name, ' ', '-');
};

class FormatApi {
  static getAllFormats() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], formats));
      }, delay);
    });
  }

  static saveFormat(format) {
    format = Object.assign({}, format); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minFormatNameLength = 1;
        if (format.name.length < minFormatNameLength) {
          reject(`Title must be at least ${minFormatNameLength} characters.`);
        }

        if (format.id) {
          const existingFormatIndex = formats.findIndex(a => a.id == format.id);
          formats.splice(existingFormatIndex, 1, format);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          format.id = generateId(format);
          formats.push(format);
        }

        resolve(format);
      }, delay);
    });
  }

  static deleteFormat(formatId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfFormatToDelete = formats.findIndex(format => {
          formats.id == formatId;
        });
        formats.splice(indexOfFormatToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default FormatApi;