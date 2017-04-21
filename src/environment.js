class Environment {
  constructor(parent = null) {
    this.parent = parent;
    this.scope = new Map();
  }

  get(key) {
    if (this.scope.has(key)) {
      return this.scope.get(key);
    } else if (this.parent !== null) {
      return this.parent.get(key);
    }
    return null;
  }

  set(key, value) {
    this.scope.set(key, value);
  }

}

module.exports = Environment;
