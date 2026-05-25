# Room 00165 — Sound Room

## What it is
A browser synthesizer with oscillator (sine/square/sawtooth/triangle), ADSR-like envelope (attack/release), lowpass filter, and volume. Clickable 2-octave piano keyboard + QWERTY keyboard mapping (a=C, w=C#, s=D... etc). Waveform oscilloscope at top. Drone, white noise, and major chord buttons.

## Navigation
- data-nav: matrix
- Connections: 00164 ← → 00166

## Notes
- Fully client-side — Web Audio API; AudioContext created on first interaction
- Signal chain: OscillatorNode → GainNode (per note) → master GainNode → BiquadFilter (lowpass) → AnalyserNode → destination
- ADSR: attack (1ms–1s), release (10ms–3s); gain ramp with linearRampToValueAtTime
- Keyboard: white keys flex-column, black keys positioned absolutely over white keys
- QWERTY mapping: a-w-s-e-d-f-t-g-y-h-u-j for one octave, k-o-l for next
- Multiple notes: activeOscs map allows polyphony
- Drone: A3 sine (based on current octave); white noise: 2s buffer, looped, random float32
- Chord button: plays C major (C E G C) for 600ms
- Visualizer: oscilloscope (time domain), 1024 samples, requestAnimationFrame
- Note: "Sound is pressure waves in air. This room produces them electronically."
