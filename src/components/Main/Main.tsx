import { Playground } from "../Playground";
import { KeyboardWithInstrument } from "../Keyboard";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";

export const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
