document.addEventListener('DOMContentLoaded', function(){
  window.Storage = new Storage;
});


class Storage {
  constructor(){
   console.log("Storage created");
  }

  add(key, value) {
    if(this.alreadyExists(key, value)){
      console.log("Already exists");
    } else {
      localStorage.setItem(key, value);
      console.log("ok");
    }
  };

  remove(key) {
    localStorage.removeItem(key)
    console.log("ok");
  };

  update(key, value) {
    this.add(key, value)
    console.log("ok");
  };

  get(key) {
    return localStorage.getItem(key);
    console.log("ok");
  };

  alreadyExists(key, value) {
    const existing = this.get(key);
    if(existing && JSON.stringify(value) === JSON.stringify(existing)) {
      return true;
    } else {
      return false;
    };
  };
}
