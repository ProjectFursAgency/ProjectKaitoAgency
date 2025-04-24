
// Simple browser fingerprint function
function getBrowserFingerprint() {
  return navigator.userAgent + window.screen.width + window.screen.height;
}

// Get clicks from localStorage or initialize empty array
let clickedUsers = JSON.parse(localStorage.getItem('clickedUsers') || '[]');
document.getElementById('clickCount').textContent = clickedUsers.length;

function incrementClicks() {
  const fingerprint = getBrowserFingerprint();
  
  if (!clickedUsers.includes(fingerprint)) {
    clickedUsers.push(fingerprint);
    localStorage.setItem('clickedUsers', JSON.stringify(clickedUsers));
    document.getElementById('clickCount').textContent = clickedUsers.length;
  }
}
