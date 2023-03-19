const messageList = document.querySelector('.chat-messages');
const messageInput = document.querySelector('.chat-input input[type="text"]');
const sendButton = document.querySelector('.chat-input button');

// Function to add a new message to the chat
function addMessage(message, sender) {
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', sender);
  newMessage.innerHTML = `<p>${message}</p>`;
  messageList.appendChild(newMessage);
  messageList.scrollTop = messageList.scrollHeight;
}

// Event listener to handle send button click
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    addMessage(message, 'outgoing');
    messageInput.value = '';
  }
});

// Event listener to handle Enter key press
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendButton.click();
  }
});

// Initialize the chat with a welcome message
addMessage('I want a list of your services.', 'incoming');