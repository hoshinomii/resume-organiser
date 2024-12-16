// Simple class to store the resume data and tags and organize them.
export class Resume {
  // store the tags
  tags = {};
  categories = {};
  dataset = [];
  defaultTag = "";

  // init, build the initial data and tags
  constructor(dataset, defaultTag) {
    this.defaultTag = defaultTag;
    this.data = dataset;
    this.setTags(dataset);
    this.setCategories(dataset);
  }

  setTags = () => {
    // read the unique datasets and save it to tags
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.tags.length; j++) {
        this.tags[data[i].tags[j]] = data[i].tags[j];
      }
    }
  };

  setCategories = () => {
    // read the unique datasets and save it to categories
    for (let i = 0; i < data.length; i++) {
      this.categories[data[i].category] = data[i].category;
    }
  };

  // sort the dataset by tag, returned the sorted data once done
  sortByTag = (tag) => {
    // take the first 3 elements of each category based on the tag, prioritize the date
    // sort the data by date
    let sortedData = this.data.sort((a, b) => {
      return new Date(b.dateStarted) - new Date(a.dateStarted);
    });

    // filter the data by tag
    sortedData = sortedData.filter((data) => {
      return data.tags.includes(tag);
    });

    // take the first 3 elements
    return sortedData.slice(0, 3);
  };
}
