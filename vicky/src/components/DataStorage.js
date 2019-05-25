class DataStorage {
  saveItem(itemName, value) {
    if (window.localStorage) {
      return localStorage.setItem(itemName, value);
    } else {
      return document.cookie = `${itemName}=${value};max-age=${60*60*24*30}`;
    }
  }

  getItem(itemName) {
    if (window.localStorage) {
      return localStorage.getItem(itemName);
    } else {
      var search = new RegExp(`(?:(?:^|.*;\s*)${itemName}\s*\=\s*([^;]*).*$)|^.*$`);
      return document.cookie.replace(search, "$1");
    }
  }

  removeItem(itemName) {
    if (window.localStorage) {
      return localStorage.removeItem(itemName);
    }
    else {
      return document.cookie = `${itemName}=${value};max-age=-1`;
    }
  }
}

export default new DataStorage();
