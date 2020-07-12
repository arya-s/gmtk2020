class Sound {
    public audio: HTMLAudioElement

    constructor(src: string) {
        this.audio = document.createElement('audio')
        this.audio.src = src
        document.body.appendChild(this.audio)
    }

    play(loop = false) {
        this.audio.play()
        this.audio.loop = loop
    }

    stop() {
        this.audio.pause()
        this.audio.currentTime = 0
    }
}

export default Sound
