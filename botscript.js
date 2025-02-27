// script.js
document.addEventListener("DOMContentLoaded", function () {
    const chatbotIcon = document.getElementById("custom-chatbot-icon");
    const dfMessenger = document.querySelector("df-messenger");

    dfMessenger.addEventListener("df-messenger-loaded", function () {
        const shadowRoot = dfMessenger.shadowRoot;
        const chatWrapper = shadowRoot.querySelector(".df-messenger-wrapper");

        // Hide the chat window by default
        chatWrapper.style.display = "none";

        // Toggle chatbot visibility when clicking the custom icon
        chatbotIcon.addEventListener("click", function () {
            chatWrapper.style.display = chatWrapper.style.display === "none" ? "block" : "none";
        });
    });
});
