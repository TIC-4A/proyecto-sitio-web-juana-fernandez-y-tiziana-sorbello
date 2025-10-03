document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    
    // Simular un evento de inicio de sesión
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Funcionalidad de inicio de sesión no implementada. Redirigiendo a la galería de fotos.');
            window.location.href = 'photos.html';
        });
    }
});
