import { useEffect, useState } from "react";

export function useKeySequenceToggle(keySequence = "k") {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === keySequence && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [keySequence]);

	return { open, setOpen };
}
