import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";
import { useWavesurfer } from "@wavesurfer/react";
import { useLayoutEffect, useMemo, useRef } from "react";

const SoundWave = ({ sound }: { sound?: string }) => {
  const containerRef = useRef(null);
  const {
    wavesurfer,
    // isPlaying,
    // currentTime
  } = useWavesurfer({
    height: 62,
    normalize: true,
    waveColor: "#ffffff",
    progressColor: "#a51d2d",
    cursorColor: "#000000",
    cursorWidth: 4,
    barWidth: 4,
    barGap: 2,
    barAlign: "bottom",
    barRadius: 19,
    barHeight: 2.2,
    fillParent: true,
    interact: true,
    hideScrollbar: true,
    autoScroll: true,
    autoCenter: true,
    sampleRate: 24000,
    container: containerRef,

    url: sound,
    plugins: useMemo(
      () => [
        Timeline.create(),
        Hover.create({
          lineColor: "#ff0000",
          lineWidth: 4,
          labelBackground: "#555",
          labelColor: "#fff",
          labelSize: "16px",
        }),
      ],
      [],
    ),
  });

  useLayoutEffect(() => {
    // if (settled.current) return;

    wavesurfer?.on("interaction", () => {
      console.log("plaat");

      wavesurfer.playPause();
    });
    wavesurfer?.on("finish", () => {
      wavesurfer.play();
    });
  }, [wavesurfer]);

  return <div className="min-w-0" ref={containerRef} />;
};

export default SoundWave;
