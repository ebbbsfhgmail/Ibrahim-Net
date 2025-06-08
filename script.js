// متغيرات التطبيق
let currentUser = null;
const tweets = [
    {
        id: 1,
        user: "إبراهيم",
        username: "ibrahim_dev",
        content: "مرحبًا بكم في منصة إبرام! هذه أول تغريدة في المنصة.",
        time: "منذ دقيقتين"
    },
    {
        id: 2,
        user: "أحمد",
        username: "ahmed_coder",
        content: "أحب واجهة المنصة الجديدة، عمل رائع!",
        time: "منذ 10 دقائق"
    }
];

// وظائف التطبيق
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        currentUser = {
            name: username,
            username: username.toLowerCase().replace(/\s/g, '_')
        };
        
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('feedSection').style.display = 'block';
        document.getElementById('appNav').style.display = 'flex';
        
        loadTweets();
    } else {
        alert('الرجاء إدخال اسم المستخدم وكلمة المرور');
    }
}

function showRegister() {
    alert('هذه نسخة تجريبية، يمكنك استخدام أي بيانات لتسجيل الدخول');
}

function showSection(section) {
    const sections = ['feed', 'explore', 'notifications', 'messages', 'profile'];
    
    sections.forEach(sec => {
        const el = document.querySelector(`.${sec}-section`);
        if (el) el.style.display = 'none';
    });
    
    const activeSection = document.querySelector(`.${section}-section`);
    if (activeSection) activeSection.style.display = 'block';
}

function loadTweets() {
    const tweetsContainer = document.querySelector('.tweets');
    tweetsContainer.innerHTML = '';
    
    tweets.forEach(tweet => {
        const tweetEl = document.createElement('div');
        tweetEl.className = 'tweet';
        tweetEl.innerHTML = `
            <div class="tweet-header">
                <span class="tweet-user">${tweet.user}</span>
                <span class="tweet-username">@${tweet.username}</span>
                <span class="tweet-time">${tweet.time}</span>
            </div>
            <div class="tweet-content">${tweet.content}</div>
            <div class="tweet-actions">
                <span>💬</span>
                <span>🔄</span>
                <span>❤️</span>
                <span>📤</span>
            </div>
        `;
        tweetsContainer.appendChild(tweetEl);
    });
}

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    // يمكنك إضافة أي تهيئة هنا
});
