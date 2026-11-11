// Array containing the 10 custom star jar messages for Ammar
const starMessages = [
    "1. You’re my cute little sunshine, Ammar. ☀️",
    "2. Never forget how special you are to me. 💗",
    "3. I’ll always be here for you, no matter what. 🫶🏻",
    "4. You’re my favorite human. Don’t tell anyone! 🤫",
    "5. Sending you a thousand virtual hugs! 🧸",
    "6. You deserve all the happiness in the world. 🌷",
    "7. I’m so lucky to have you in my life.",
    "8. Hey, silly! Don’t forget to smile today. 🥹",
    "9. No matter how far life takes us, I’ll always wish you the best.",
    "10. A little reminder: you’re loved, appreciated, and never forgotten. 💌"
];

let currentMsgIndex = 0;

// Function to handle the Star Jar message rotation
function nextStarMessage() {
    const msgBox = document.getElementById('starMsg');
    
    // Display the current message from the array
    msgBox.innerText = starMessages[currentMsgIndex];
    
    // Quick visual bounce effect when clicked
    msgBox.style.transform = 'scale(1.02)';
    setTimeout(() => {
        msgBox.style.transform = 'scale(1)';
    }, 200);

    // Move to the next message and loop back to the start after message 10
    currentMsgIndex = (currentMsgIndex + 1) % starMessages.length;
}

// Function to handle smooth Single Page Application (SPA) navigation between pages
function nextPage(pageNumber) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the requested page
    const targetPage = document.getElementById('page' + pageNumber);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Smooth scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}