document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message');
    const chatBox = document.getElementById('chat-box');
    
    if (messageInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = messageInput.value;
        chatBox.appendChild(message);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; 
    }
});
document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset(); 
        } else {
            alert('Failed to send message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});