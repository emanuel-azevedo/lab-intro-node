class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if(item !== undefined){
      this.items.push(item)
      this.length++
      this.items.sort((a,b) => a - b)      
    }
    return this.items
  }

  get(pos) {
    if(this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    }
     return this.items[pos]
  }

  max() {
    if(!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if(!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

  sum() {
    if(!this.items.length) {
      return 0;
    }
    return this.items.reduce((acc, curr) => acc + curr)
  }

  avg() {
    if(!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.items.length
  }
}

module.exports = SortedList;

 