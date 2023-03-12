import React, {
  useCallback,
  useRef,
  useMemo
} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { WaveSurfer, WaveForm} from "wavesurfer-react";
import "./styles.css";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";
import SpectrogramPlugin from "wavesurfer.js/dist/plugin/wavesurfer.spectrogram";

const Buttons = styled.div`
  display: inline-block;
`;

const Button = styled.button``;

function App() {

  const plugins = useMemo(() => {
    return [
      {
        plugin: SpectrogramPlugin,
        options: {
          container: "#spectrogram"
        }
      },
      {
        plugin: TimelinePlugin,
        options: {
          container: "#timeline"
        }
      }
    ].filter(Boolean);
  }, []);

  const wavesurferRef = useRef();
  const handleWSMount = useCallback(
    (waveSurfer) => {
      if (waveSurfer.markers) {
        waveSurfer.clearMarkers();
      }

      wavesurferRef.current = waveSurfer;

      if (wavesurferRef.current) {
        wavesurferRef.current.load('https://wavesurfer-js.org/example/media/demo.wav');

        wavesurferRef.current.on("ready", () => {
          console.log("WaveSurfer is ready");
        });

        wavesurferRef.current.on("loading", (data) => {
          console.log("loading --> ", data);
        });

        if (window) {
          window.surferidze = wavesurferRef.current;
        }
      }
    },
    []
  );

  const play = useCallback(() => {
    wavesurferRef.current.playPause();
  }, []);


  return (
    <div className="App">
      <WaveSurfer plugins={plugins} onMount={handleWSMount}>
        <WaveForm id="waveform" cursorColor="transparent">
        </WaveForm>
        <div id="timeline" />
        <div id="spectrogram" />
      </WaveSurfer>
      <Buttons>
        <Button onClick={play}>Play / Pause</Button>
      </Buttons>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
