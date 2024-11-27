const fs = require("fs");

// fs.writeFile("test.html", "node js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created successfully");
//   }
// });

fs.readFile("index.html", "utf-8",(err, data) => {
  if (err) {
    console.log(err);
  } else {
    res.end(data)
    console.log(data);
  }
});

// fs.rename("test.html", "test.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file renamed successfully");
//   }
// });

// fs.unlink("test.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file unlinked successfully");
//   }
// });
