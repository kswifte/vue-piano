type CreateKey = (data: number) => void
export const createKey: CreateKey = (data) => {
    const audioCtx = new AudioContext()
    const oscillator = audioCtx.createOscillator()

    const gainNode = audioCtx.createGain()

    oscillator.connect(gainNode)

    gainNode.connect(audioCtx.destination)

    oscillator.type = 'triangle'

    oscillator.frequency.value = data

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime)

    gainNode.gain.linearRampToValueAtTime(
        1,
        audioCtx.currentTime + 0.01
    )
    oscillator.start(audioCtx.currentTime)

    gainNode.gain.exponentialRampToValueAtTime(
        0.1,
        audioCtx.currentTime + 0.5
    )
    oscillator.stop(audioCtx.currentTime + 0.5)
}