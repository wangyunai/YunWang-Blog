// Admin functionality for blog
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is admin
    const isAdmin = localStorage.getItem('blog_admin') === 'true';
    
    // Admin login function
    window.loginAsAdmin = function() {
        const password = prompt('Enter admin password:');
        // Simple password check - in production use a more secure method
        if (password === 'yunwang-admin-2025') {
            localStorage.setItem('blog_admin', 'true');
            showAdminUI();
            alert('Logged in as admin!');
        } else {
            alert('Incorrect password');
        }
    };
    
    // Admin logout function
    window.logoutAdmin = function() {
        localStorage.removeItem('blog_admin');
        hideAdminUI();
        alert('Logged out');
    };
    
    // Show admin elements if logged in
    if (isAdmin) {
        showAdminUI();
    }
    
    // Function to show admin UI elements
    function showAdminUI() {
        const adminElements = document.querySelectorAll('.admin-only');
        adminElements.forEach(el => {
            el.style.display = 'inline-block';
        });
        
        // Show admin status in footer
        const footer = document.querySelector('footer .container');
        if (footer && !document.getElementById('admin-status')) {
            const adminStatus = document.createElement('p');
            adminStatus.id = 'admin-status';
            adminStatus.innerHTML = 'Logged in as Admin · <a href="#" onclick="logoutAdmin()">Logout</a>';
            footer.appendChild(adminStatus);
        }
    }
    
    // Function to hide admin UI elements
    function hideAdminUI() {
        const adminElements = document.querySelectorAll('.admin-only');
        adminElements.forEach(el => {
            el.style.display = 'none';
        });
        
        // Remove admin status from footer
        const adminStatus = document.getElementById('admin-status');
        if (adminStatus) {
            adminStatus.remove();
        }
    }
}); 