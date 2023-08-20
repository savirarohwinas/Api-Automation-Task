const { exec } = require('child_process');

// Jalankan file tes Add Category dengan Mochawesome
exec('mocha test/spec/AddCategory.js --reporter mochawesome --reporter-options reportDir=reports/addCategory', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Add Category tests: ${error}`);
    return;
  }
  console.log(stdout);
});

// Jalankan file tes Get List Category dengan Mochawesome
exec('mocha test/spec/GetCategoryList.js --reporter mochawesome --reporter-options reportDir=reports/getListCategory', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Get List Category tests: ${error}`);
    return;
  }
  console.log(stdout);
});

// Jalankan file tes Update Category dengan Mochawesome
exec('mocha test/spec/UpdateCategory.js --reporter mochawesome --reporter-options reportDir=reports/updateCategory', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Update Category tests: ${error}`);
    return;
  }
  console.log(stdout);
});

// Jalankan file tes Delete Category dengan Mochawesome
exec('mocha test/spec/DeleteCategory.js --reporter mochawesome --reporter-options reportDir=reports/deleteCategory', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Delete Category tests: ${error}`);
    return;
  }
  console.log(stdout);
});
