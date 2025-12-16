print("🎧 Emotion-Based Music Recommender")
user_input = input("How are you feeling today?\n> ")

text = user_input.lower()

emotions = {
    "happy": ["happy", "excited", "joy", "great", "awesome"],
    "sad": ["sad", "depressed", "down", "cry", "lonely"],
    "stress": ["stressed", "tired", "anxious", "pressure", "worried"],
    "angry": ["angry", "mad", "furious", "irritated"],
    "relaxed": ["calm", "relaxed", "peaceful", "chill"]
}

detected_emotion = "neutral"

for emotion, keywords in emotions.items():
    for word in keywords:
        if word in text:
            detected_emotion = emotion
            break

print("Detected Emotion:", detected_emotion)
music_map = {
    "happy": "Pop, Dance, Upbeat songs 🎉",
    "sad": "Soft acoustic, Emotional songs 🎧",
    "stress": "Lo-fi, Instrumental, Calm beats 🌿",
    "angry": "Rock, Heavy beats, Workout music 🔥",
    "relaxed": "Jazz, Chillhop, Ambient music ☁️",
    "neutral": "Indie, Light Pop, Easy listening 🎵"
}

print("Recommended Music:", music_map[detected_emotion])

