// import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";
import { useWavesurfer } from "@wavesurfer/react";
import { useCallback, useRef, useState } from "react";

// const audioUrls = [
//   "/examples/audio/audio.wav",
//   "/examples/audio/stereo.mp3",
//   "/examples/audio/mono.mp3",
//   "/examples/audio/librivox.mp3",
// ];

const formatTime = (seconds: number) =>
  [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(":");

const SoundWave = ({ sounds }: { sounds: string[] }) => {
  // const Timeline = useExternal("wavesurfer.js/dist/plugins/timelinej.esm.js");
  const containerRef = useRef(null);
  const [urlIndex, setUrlIndex] = useState(0);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    url: sounds[urlIndex],
    // plugins: useMemo(() => [Timeline.create()], []),
  });

  const onUrlChange = useCallback(() => {
    setUrlIndex((index) => (index + 1) % sounds.length);
  }, [sounds.length]);

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <>
      {" "}
      <audio controls ref={containerRef} />
      <p>Current audio: {sounds[urlIndex]}</p>
      <p>Current time: {formatTime(currentTime)}</p>
      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        {" "}
        <button onClick={onUrlChange}>Change audio</button>
        <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
          {" "}
          {isPlaying ? "Pause" : "Play"}{" "}
        </button>{" "}
      </div>{" "}
    </>
  );
};

export default SoundWave;
