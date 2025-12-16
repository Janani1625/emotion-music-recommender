// 🌱 Supportive messages for each emotion
const messages = {
    happy: "Your joy is contagious. Enjoy the moment ✨",
    sad: "It’s okay to feel this way. You’re not alone 💙",
    stress: "Slow down. You’ve been strong for too long 🌿",
    angry: "Pause. Breathe. This feeling will pass 🔥",
    relaxed: "Enjoy this calm — you deserve it ☁️",
    bored: "Maybe today needs a little spark 🎶",
    motivated: "This energy is powerful — use it 💪",
    lonely: "Even now, you matter more than you think 🤍",
    energetic: "Let’s channel this power ⚡",
    neutral: "Every feeling is valid 🌱"
};

// 📝 Quotes for reflection
const quotes = {
    happy: "Happiness is a direction, not a place.",
    sad: "Tears are words the heart can’t say.",
    stress: "Almost everything will work again if you unplug it for a few minutes.",
    angry: "Speak when you are angry and you will make the best speech you will ever regret.",
    relaxed: "Calmness is the cradle of power.",
    bored: "Creativity begins where boredom ends.",
    motivated: "Dreams don’t work unless you do.",
    lonely: "You are enough, even on quiet days.",
    energetic: "Do something today your future self will thank you for.",
    neutral: "Balance is not something you find, it’s something you create."
};

function recommendMusic() {
    const text = document.getElementById("userInput").value.toLowerCase().trim();

    // 🛑 Empty input protection
    if (text === "") {
        alert("Tell me how you feel first 😊");
        return;
    }

    let emotion = "neutral";

    // 🧠 Emotion keywords
    const emotions = {
        happy: ["happy", "excited", "joy", "great"],
        sad: ["sad", "down", "depressed"],
        stress: ["stressed", "tired", "anxious"],
        angry: ["angry", "mad"],
        relaxed: ["calm", "relaxed", "peaceful"],
        bored: ["bored", "boring"],
        motivated: ["motivated", "focused"],
        lonely: ["lonely", "alone"],
        energetic: ["energetic", "active"]
    };

    // 🔍 Detect emotion
    for (let key in emotions) {
        for (let word of emotions[key]) {
            if (text.includes(word)) {
                emotion = key;
                break;
            }
        }
    }

    // 🎨 Change background based on emotion
    document.body.className = "";
    document.body.classList.add(`bg-${emotion}`);

    // 🎵 Spotify playlists
    const musicMap = {
        happy: ["Pop 🎉", "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"],
        sad: ["Acoustic 🎧", "https://open.spotify.com/playlist/37i9dQZF1DWVrtsSlLKzro"],
        stress: ["Lo-fi 🌿", "https://open.spotify.com/playlist/37i9dQZF1DXc8kgYqQLMfH"],
        angry: ["Rock 🔥", "https://open.spotify.com/playlist/37i9dQZF1DWXTHBOfJ8aI7"],
        relaxed: ["Chill ☁️", "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6"],
        bored: ["Feel Good 🎶", "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0"],
        motivated: ["Focus 💪", "https://open.spotify.com/playlist/37i9dQZF1DX4fpCWaHOned"],
        lonely: ["Comfort 💙", "https://open.spotify.com/playlist/37i9dQZF1DWYfV3yUuZ6Xt"],
        energetic: ["Workout ⚡", "https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh"],
        neutral: ["Easy Listening 🎵", "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"]
    };

    // 📊 Show recommendation
    document.getElementById("result").innerHTML = `
        <h3>Detected Emotion: ${emotion}</h3>
        <p>Recommended Music: ${musicMap[emotion][0]}</p>
        <a href="${musicMap[emotion][1]}" target="_blank">🎧 Open Spotify Playlist</a>
    `;

    // 🔥 Daily streak logic
    const moodCard = document.getElementById("moodCard");
    moodCard.classList.remove("hidden");

    const today = new Date().toDateString();
    const lastDay = localStorage.getItem("lastMoodDay");
    let streak = parseInt(localStorage.getItem("streak")) || 0;

    if (lastDay !== today) {
        streak++;
        localStorage.setItem("streak", streak);
        localStorage.setItem("lastMoodDay", today);
    }

    // 🧠 Mood card display
    moodCard.innerHTML = `
        <h3>🧠 Your Mood Today</h3>
        <p><strong>Emotion:</strong> ${emotion}</p>
        <p><strong>Message:</strong> ${messages[emotion]}</p>
        <p><em>"${quotes[emotion]}"</em></p>
        <p>🔥 Mood Check-in Streak: ${streak} days</p>
    `;
}
