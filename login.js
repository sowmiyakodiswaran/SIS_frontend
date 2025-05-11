function login() {
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (username === '' || password === '') {
      alert('Please enter both username and password');
      return;
    }
  
    // Redirect to the corresponding dashboard based on the role
    if (role === 'student') {
      window.location.href = 'student-dashboard.html';
    } else if (role === 'staff') {
      window.location.href = 'staff-dashboard.html';
    } else if (role === 'admin') {
      window.location.href = 'admin-dashboard.html';
    }
  }
function logout() {
  localStorage.clear(); // clear any saved login data
  alert("You have been logged out.");
  window.location.href = "login.html";
  }
  
    