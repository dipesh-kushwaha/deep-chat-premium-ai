# deep-chat-premium-ai
An advanced, multimodal AI assistant built with React and Google Gemini 2.5. Features real-time bi-directional voice conversation (Live API), image analysis, customizable personas, and a premium glassmorphism UI.
# Deep Chat - Premium AI Assistant ⚡️

**Deep Chat** is a state-of-the-art AI application designed to provide a premium conversational experience. Built by **Dipesh Mahato Koiri**, this application leverages the power of Google's latest **Gemini 2.5** models to offer real-time voice interaction, multimodal image understanding, and intelligent text generation wrapped in a modern, responsive glassmorphism interface.

## 🚀 Key Features

*   **🎙 Real-Time Voice Mode (Live API):** Experience low-latency, bi-directional voice conversations with a dynamic audio visualizer. Powered by `gemini-2.5-flash-native-audio-preview`.
*   **💬 Advanced Text Chat:** Full markdown support, code syntax highlighting, and seamless history management.
*   **👁️ Multimodal Vision:** Upload images for instant analysis and discussion with the AI.
*   **🎨 Premium UI/UX:** deeply polished interface featuring glassmorphism, smooth animations (Tailwind CSS), and responsive design.
*   **⚙️ Customizable Personas:** Define system instructions and choose from 5 distinct voice personalities (Zephyr, Puck, Kore, Fenrir, Charon).
*   **🔊 Text-to-Speech:** One-click read-aloud functionality for AI responses.
*   **🛡️ Secure & Private:** API keys are handled securely, and no personal data is persistently stored on our servers.

## 🛠️ Tech Stack

*   **Frontend:** React 19, TypeScript, Vite
*   **AI Engine:** Google GenAI SDK (`@google/genai`)
*   **Models:** `gemini-2.5-flash`, `gemini-2.5-flash-native-audio-preview`
*   **Styling:** Tailwind CSS, Lucide React (Icons)
*   **Audio:** Web Audio API (PCM conversion & visualization)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/deep-chat-premium-ai.git
    cd deep-chat-premium-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Create a `.env` file in the root directory and add your Google Gemini API key:
    ```env
    GEMINI_API_KEY=your_actual_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to `http://localhost:3000` to start chatting.

## 🎮 Usage

### Live Voice Mode
1. Click the "LIVE VOICE" button in the header or the microphone icon in the chat bar.
2. Grant microphone permissions.
3. Speak naturally—the AI will listen and respond in real-time with the selected voice persona.

### Settings
Click the **Settings** gear in the sidebar to:
*   Change your display name.
*   Modify the System Persona (System Instructions).
*   Select a different AI Voice.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Deep Chat, please feel free to fork the repository and submit a Pull Request.

## 👨‍💻 Author

**Deep Chat** was created and developed by **Dipesh Mahato Koiri**.

*   **Version:** 2.0.0 (Deep Chat Edition)
*   **Support:** View the "Donate & Support" section in the app sidebar.

## 📄 License

This project is licensed for personal and educational use. Please review the Google GenAI Prohibited Use Policy before deploying public-facing instances.
