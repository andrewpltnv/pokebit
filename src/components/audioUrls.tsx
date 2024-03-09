import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";
import { useWavesurfer } from "@wavesurfer/react";
import { useCallback, useMemo, useRef, useState } from "react";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";

// const audioUrls = [
//   "/examples/audio/audio.wav",
//   "/examples/audio/stereo.mp3",
//   "/examples/audio/mono.mp3",
//   "/examples/audio/librivox.mp3",
// ];

// const formatTime = (seconds: number) =>
//   [seconds / 60, seconds % 60]
//     .map((v) => `0${Math.floor(v)}`.slice(-2))
//     .join(":");

const SoundWave = ({ sounds }: { sounds: string[] }) => {
  // const Timeline = useExternal("wavesurfer.js/dist/plugins/timelinej.esm.js");
  const containerRef = useRef(null);
  const [urlIndex, setUrlIndex] = useState(0);

  const {
    wavesurfer,
    isPlaying,
    // currentTime
  } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    interact: true,
    url: sounds[urlIndex],
    plugins: useMemo(
      () => [
        Timeline.create(),
        Hover.create({
          lineColor: "#ff0000",
          lineWidth: 2,
          labelBackground: "#555",
          labelColor: "#fff",
          labelSize: "11px",
        }),
      ],
      [],
    ),
  });

  const onUrlChange = useCallback(() => {
    setUrlIndex((index) => (index + 1) % sounds.length);
  }, [sounds.length]);

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <div
      style={{
        margin: "1em 0",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <div ref={containerRef} />
      <button onClick={onUrlChange}>Change audio</button>
      <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default SoundWave;
