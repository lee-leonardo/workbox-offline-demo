var fs = require("fs").promises;

Promise.all([
  fs.copyFile("./404.html", "docs/404.html"),
  fs.copyFile("./advanced.html", "docs/advanced.html"),
]).catch((err) => {
  console.log(err);
  process.exit(1);
});
