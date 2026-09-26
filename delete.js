const fs = require("fs");
const path = require("path");

const folder = "images";
const photo = {
  id: "123"
};

fs.unlink(path.join("public", folder, photo.id + ".jpg"), (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log("File deleted successfully.");
});
