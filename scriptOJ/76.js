const flikerProps = (obj) => {
  const ks = Object.getOwnPropertyDescriptors(obj);
  for (let key in ks) {
    Object.defineProperty(obj, key, {enumerable: ks[key].enumerable ? false : true})
  }
}

