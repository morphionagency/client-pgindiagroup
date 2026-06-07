const fs = require('fs');
const svg = fs.readFileSync('public/world-map.svg', 'utf8');
const countries = ['km','mg','id','vn','in','ng','lk','cn','th','la','mm','ci','gh','bj','tg','tr','sd'];
const map = {};
countries.forEach(c => {
  const match = svg.match(new RegExp('<path[^>]*id=\"' + c + '\"[^>]*d=\"M([0-9.]+),([0-9.]+)'));
  if (match) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    map[c] = {x, y};
  } else {
    // try to find within a g tag
    const gMatch = svg.match(new RegExp('<g[^>]*id=\"' + c + '\".*?d=\"M([0-9.]+),([0-9.]+)'));
    if (gMatch) {
      map[c] = {x: parseFloat(gMatch[1]), y: parseFloat(gMatch[2])};
    }
  }
});
for(let c in map) {
  const xp = ((map[c].x - 30.767) / 784.077 * 100).toFixed(2);
  const yp = ((map[c].y - 241.591) / 458.627 * 100).toFixed(2);
  console.log(c + ':', xp + '%', yp + '%');
}
