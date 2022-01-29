import { useEffect } from "react";
import { useInstrument } from "../../state/Instrument";
import { useAudioContext } from "../AudioContextProvider";
import {
  SoundfontProvider,
  withInstrument,
  withInstrumentBasedOnHook,
  withInstrumentStatic,
  useSoundfont,
} from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "../Keyboard";

// Using useSoundfont hook
// export const KeyboardWithInstrument = () => {
//   const AudioContext = useAudioContext()!;
//   const { instrument } = useInstrument();
//   const { loading, current, play, stop, load } = useSoundfont({ AudioContext });

//   useEffect(() => {
//     if (!loading && instrument !== current) load(instrument);
//   }, [load, loading, current, instrument]);

//   //   useMount(() => load());

//   return <Keyboard loading={loading} play={play} stop={stop} />;
// };

// Using Render Props
// export const KeyboardWithInstrument = () => {
//   const AudioContext = useAudioContext()!;
//   const { instrument } = useInstrument();

//   return (
//     <SoundfontProvider
//       AudioContext={AudioContext}
//       instrument={instrument}
//       render={(props) => <Keyboard {...props} />}
//     />
//   );
// };

// Using HOC class component
const WrappedKeyboard = withInstrument(Keyboard);

// Using HOC withInstrumentBasedOnHook
// const WrappedKeyboardBasedOnHook = withInstrumentBasedOnHook(Keyboard);

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
