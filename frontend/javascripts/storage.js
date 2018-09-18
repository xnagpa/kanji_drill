document.addEventListener('DOMContentLoaded', function(){
  window.Storage = new Storage;
});


class Storage {
  constructor(){
   console.log("Storage created");
  }

  add(key, value) {
    if(alreadyExists(key, value)){
      console.log("Already exists");
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
    console.log("ok");
  };

  remove(key) {
    localStorage.removeItem(key)
    console.log("ok");
  };

  update(key, value) {
    this.add(key, JSON.stringify(value))
    console.log("ok");
  };

  get(key) {
    return JSON.parse(localStorage.getItem(key));
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
