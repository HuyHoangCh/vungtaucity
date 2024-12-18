// JavaScript Document
function lentop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        }
const responses ={
	"hello":"Chào bạn",	
"hi":" Chào bạn",
"xin chào":"chào bạn",
"vũng tàu có những gì?": "- Có rất nhiều thú vị bạn có thể nói cụ thể được không",
"bãi sau ở đâu": "ở vũng tàu</br>",
"bãi trước ở đâu?": "ở vũng tàu",
"quán ăn ngon ở đâu": "ở vũng tàu.",
"bãi biển đẹp nhất ở vũng tàu ở đâu": "ở vũng tàu",
"tượng đức chúa ở đâu": "ở vũng tàu",
"quán nước ngon nhất ở đâu": "ở vũng tàu",
};

document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}

function respondToUser(userInput) {
    const response = responses[userInput] || responses["default"];
    setTimeout(function() {
        appendMessage('bot', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            appendMessage('bot', responses["expert"]);
        };
        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✖ No';
        buttonNo.onclick = function() {
            appendMessage('bot', responses["no"]);
        };
const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
}