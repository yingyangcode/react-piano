/// <reference types="react-scripts" />

type AudioContext = typeof AudioContext

interface Window extends Window {
    webkitAudioContext: AudioContextType
}