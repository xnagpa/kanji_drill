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
      localStorage.setItem(key, JSON.stringify(value));
      console.log("ok");
    }
  };

  remove(key) {
    localStorage.removeItem(key)
    console.log("ok");
  };

  update(key, value) {
    this.add(key, JSON.stringify(value));
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

  countGrade(criteria, jlptLevel, jlptArray) {
    let count = 0;
    for (var i = 0; i < jlptArray.length; i++){
      let currentItem = this.get(jlptArray[i]);
      if(currentItem && currentItem['grade'] == criteria && currentItem['jlptLevel'] == jlptLevel){
        count++;
      };
    };
    return count;
  };
}
