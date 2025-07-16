function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    event.target.reset();

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
    return false;
}