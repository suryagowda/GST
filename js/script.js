// This JS is only for initial screen , For rest of the screens I have  embedded Javascript in  HTML itself

document.getElementById('addCategoryBtn').addEventListener('click', addCategory);
document.getElementById('viewCategoriesBtn').addEventListener('click', viewCategories);
document.getElementById('addProductsBtn').addEventListener('click', addProducts);
document.getElementById('deleteCategoriesBtn').addEventListener('click', deleteCategories);
document.getElementById('deleteProductsBtn').addEventListener('click', deleteProducts);

function addCategory() {
    var categoryNameInput = document.getElementById('categoryName');
    var gstRateInput = document.getElementById('gstRate');

    var categoryName = categoryNameInput.value.trim();
    var gstRate = parseFloat(gstRateInput.value);

    if (isNaN(gstRate) || gstRate < 0 || gstRate >= 100) {
        alert('Please enter a valid GST rate between 0 and 100.');
        gstRateInput.value = '';  // Clear the invalid input
        return;
    }

    if (categoryName === '' || categoryName.length > 15) {
        alert('Please enter a valid category name with a maximum length of 15 characters.');
        return;
    }

    try {
        // Retrieving existing categories from localStorage
        var existingCategories = JSON.parse(localStorage.getItem('categories')) || [];

        // Add the new category to the existing list
        var newCategory = {
            name: categoryName,
            rate: gstRate
        };

        existingCategories.push(newCategory);

        // Save the updated categories back to localStorage
        localStorage.setItem('categories', JSON.stringify(existingCategories));

        // Clear form fields
        categoryNameInput.value = '';
        gstRateInput.value = '';
    } catch (error) {
        console.error('An error occurred while adding the category:', error);
        alert('An error occurred. Please try again.');
    }
}

function viewCategories() {
    // Redirect to the categories page
    window.location.href = 'categories.html';
}

function addProducts() {
    // Redirect to the add_products page
    window.location.href = 'add_products.html';
}

function deleteCategories() {
    try {
        // Clear the categories in localStorage
        localStorage.removeItem('categories');
        alert('Categories deleted successfully!');
    } catch (error) {
        console.error('An error occurred while deleting categories:', error);
        alert('An error occurred. Please try again.');
    }
}

function deleteProducts() {
    try {
        // Clear the products in localStorage
        localStorage.removeItem('products');
        alert('Products deleted successfully!');
    } catch (error) {
        console.error('An error occurred while deleting products:', error);
        alert('An error occurred. Please try again.');
    }
}
