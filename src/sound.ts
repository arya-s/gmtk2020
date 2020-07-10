class Sound {
    public audio: HTMLAudioElement

    constructor(src: string) {
        this.audio = document.createElement('audio')
        this.audio.src = src
        document.body.appendChild(this.audio)
    }

    play() {
        this.audio.play()
    }

    stop() {
        this.audio.pause()
        this.audio.currentTime = 0
    }
}

export default Sound
