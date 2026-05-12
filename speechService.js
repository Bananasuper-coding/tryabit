class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis;
    this.recognition = null;
    this.isSupported = typeof window !== 'undefined' && (
      window.speechSynthesis || window.SpeechRecognition
    );
  }

  speak(text, options = {}) {
    if (!this.synth) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 0.85;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;
    utterance.lang = options.lang || 'en-US';

    const voices = this.synth.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
    if (englishVoice) utterance.voice = englishVoice;

    return new Promise((resolve) => {
      utterance.onend = resolve;
      utterance.onerror = resolve;
      this.synth.cancel();
      this.synth.speak(utterance);
    });
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  speakSlow(text) {
    return this.speak(text, { rate: 0.6, pitch: 1 });
  }

  speakNormal(text) {
    return this.speak(text, { rate: 0.85, pitch: 1 });
  }

  async initRecognition(onResult, onError) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      onError?.('Speech recognition not supported');
      return null;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      onResult?.(transcript, event.results);
    };

    this.recognition.onerror = (event) => {
      onError?.(event.error);
    };

    return this.recognition;
  }

  startListening(onResult, onError) {
    if (!this.recognition) {
      this.initRecognition(onResult, onError).then(rec => {
        if (rec) rec.start();
      });
    } else {
      this.recognition.start();
    }
  }

  stopListening() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  getVoices() {
    if (!this.synth) return [];
    return this.synth.getVoices().filter(v => v.lang.startsWith('en'));
  }

  calculateSimilarity(str1, str2) {
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();
    
    if (s1 === s2) return 100;
    
    const words1 = s1.split(/\s+/);
    const words2 = s2.split(/\s+/);
    
    let matches = 0;
    words1.forEach(w => {
      if (words2.some(w2 => w2.includes(w) || w.includes(w2))) {
        matches++;
      }
    });
    
    return Math.round((matches / Math.max(words1.length, words2.length)) * 100);
  }

  scorePronunciation(spoken, expected) {
    const similarity = this.calculateSimilarity(spoken, expected);
    
    if (similarity >= 90) return { score: 5, feedback: 'Perfect! 🎉' };
    if (similarity >= 75) return { score: 4, feedback: 'Great job! 👍' };
    if (similarity >= 60) return { score: 3, feedback: 'Good try! 💪' };
    if (similarity >= 40) return { score: 2, feedback: 'Keep practicing! 📚' };
    return { score: 1, feedback: 'Try again! 🔄' };
  }
}

export const speechService = new SpeechService();
export default speechService;
