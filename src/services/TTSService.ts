import { observable } from 'mobx';

// Define the Voice Preset Types
type VoicePreset = 'warm' | 'professional' | 'friendly' | 'calm';

class TTSService {
    @observable
    voicePreset: VoicePreset;

    constructor() {
        this.voicePreset = 'friendly'; // default preset
    }

    setVoicePreset(preset: VoicePreset) {
        this.voicePreset = preset;
    }

    speak(text: string) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.getVoiceByPreset();
        speechSynthesis.speak(utterance);
    }

    getVoiceByPreset() {
        // Here you could select voice based on the preset
        // This is a simplified example. Further implementation needed to choose actual voices.
        switch(this.voicePreset) {
            case 'warm':
                return speechSynthesis.getVoices().find(voice => voice.name.includes('Warm'));
            case 'professional':
                return speechSynthesis.getVoices().find(voice => voice.name.includes('Professional'));
            case 'friendly':
                return speechSynthesis.getVoices().find(voice => voice.name.includes('Friendly'));
            case 'calm':
                return speechSynthesis.getVoices().find(voice => voice.name.includes('Calm'));
            default:
                return speechSynthesis.getVoices()[0]; // fallback to the first voice
        }
    }
}

export default new TTSService();
