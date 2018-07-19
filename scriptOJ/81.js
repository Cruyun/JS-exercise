const singletonify = (OriginalClass) => {
  const newclass = new OriginalClass();
  return new Proxy(OriginalClass, {
    construct(target, argumentsList, newTarget) {
      return newclass;
    }
  })
}
