// import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";
import { useWavesurfer } from "@wavesurfer/react";
import { useLayoutEffect, useMemo, useRef } from "react";

const SoundWave = ({ sound }: { sound?: string }) => {
	const containerRef = useRef(null);
	const { wavesurfer } = useWavesurfer({
		height: 24,
		normalize: true,
		waveColor: "#43a4ff94",
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
				// Timeline.create(),
				Hover.create({
					lineColor: "--accent",
					lineWidth: 4,
					labelBackground: "--destructive",
					labelColor: "--secondary",
					labelSize: "16px",
				}),
			],
			[],
		),
	});

	useLayoutEffect(() => {
		wavesurfer?.on("interaction", () => {
			wavesurfer.playPause();
		});
		wavesurfer?.on("finish", () => {
			wavesurfer.play();
		});
	}, [wavesurfer]);

	return <div className="min-w-0" ref={containerRef} />;
};

export default SoundWave;
