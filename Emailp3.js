const ExcelJS = require('exceljs');

function createExcelFile(formData) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Form Data');
  
  // Add headers
  worksheet.addRow(['Ingredient', 'Supplier', 'Country of Origin', '%(Mixing Bowl)', '%(Final Product)']);
  
  // Add form data
  worksheet.addRow([
    formData.ingredient,
    formData.supplier,
    formData.country,
    formData.mixingBowl,
    formData.finalProduct
  ]);

  // Save the Excel file
  return workbook.xlsx.writeBuffer();
}
