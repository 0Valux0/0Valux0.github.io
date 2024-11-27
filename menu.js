let menuVisible = false;

function openMenu() {
    const menu = document.getElementById('sidenav');
    
    if (menuVisible) {
        // Close the menu
        menu.style.right = '-250px'; // Move it back to the right
    } else {
        // Open the menu
        menu.style.right = '0'; // Move it into view
    }
    
    // Toggle the visibility state
    menuVisible = !menuVisible;
}
