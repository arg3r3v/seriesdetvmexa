window.onload = function() {
    document.getElementById('popup').style.display = 'block';
};

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function redirect(url) {
    window.open(url, '_blank');
}