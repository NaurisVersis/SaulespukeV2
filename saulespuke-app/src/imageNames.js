function importAll(r) {
    r.keys().forEach(r);
  }
  
  var allNames = importAll(require.context('./ziedi', true, /\.jpg));
  console.log(allNames);