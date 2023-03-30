const messagesContainer = document.getElementById("messages-container");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = chatInput.value;
    addMessageToUI("user", message);
    chatInput.value = "";
    // You can add your own logic to generate bot's response here
    addMessageToUI("bot", "Hello, how can I assist you?");
  });

  function addMessageToUI(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerHTML = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
