import React, {
  Fragment,
  useCallback,
  useRef,
  useMemo
} from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CssBaseline,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { yellow } from "@mui/material/colors";
import { 
  ArrowLeft as ArrowLeftIcon,
  PlayArrow as PlayArrowIcon
} from '@mui/icons-material';
import styled from "styled-components";
import { WaveSurfer, WaveForm} from "wavesurfer-react";
import "./styles.css";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";
import SpectrogramPlugin from "wavesurfer.js/dist/plugin/wavesurfer.spectrogram";

// const Buttons = styled.div`
//   display: inline-block;
// `;

// const Button = styled.button``;

function App() {

  const plugins1 = useMemo(() => {
    return [
      {
        plugin: SpectrogramPlugin,
        options: {
          container: "#spectrogram1"
        }
      },
      {
        plugin: TimelinePlugin,
        options: {
          container: "#timeline1"
        }
      }
    ].filter(Boolean);
  }, []);

  const plugins2 = useMemo(() => {
    return [
      {
        plugin: SpectrogramPlugin,
        options: {
          container: "#spectrogram2"
        }
      },
      {
        plugin: TimelinePlugin,
        options: {
          container: "#timeline2"
        }
      }
    ].filter(Boolean);
  }, []);

  const wavesurferRef1 = useRef();
  const handleWSMount1 = useCallback(
    (waveSurfer) => {
      if (waveSurfer.markers) {
        waveSurfer.clearMarkers();
      }

      wavesurferRef1.current = waveSurfer;

      if (wavesurferRef1.current) {
        wavesurferRef1.current.load('https://wavesurfer-js.org/example/media/demo.wav');

        wavesurferRef1.current.on("ready", () => {
          console.log("WaveSurfer is ready");
        });

        wavesurferRef1.current.on("loading", (data) => {
          console.log("loading --> ", data);
        });

        if (window) {
          window.surferidze = wavesurferRef1.current;
        }
      }
    },
    []
  );

  const play1 = useCallback(() => {
    wavesurferRef1.current.playPause();
  }, []);

  const wavesurferRef2 = useRef();
  const handleWSMount2 = useCallback(
    (waveSurfer) => {
      if (waveSurfer.markers) {
        waveSurfer.clearMarkers();
      }

      wavesurferRef2.current = waveSurfer;

      if (wavesurferRef2.current) {
        wavesurferRef2.current.load('https://wavesurfer-js.org/example/media/demo.wav');

        wavesurferRef2.current.on("ready", () => {
          console.log("WaveSurfer is ready");
        });

        wavesurferRef2.current.on("loading", (data) => {
          console.log("loading --> ", data);
        });

        if (window) {
          window.surferidze = wavesurferRef2.current;
        }
      }
    },
    []
  );

  const play2 = useCallback(() => {
    wavesurferRef2.current.playPause();
  }, []);

  const cards = [
    {
      id: "0001321",
      machine: "Milling Machine 1",
      anomaly: "Unknown Anomaly",
      status: "Moderate",
      date: "2021-06-08 20:10:14"
    },
    {
      id: "0001322",
      machine: "Milling Machine 2",
      anomaly: "Unknown Anomaly",
      status: "Moderate",
      date: "2021-06-08 20:10:14"
    },
    {
      id: "0001323",
      machine: "Milling Machine 3",
      anomaly: "Unknown Anomaly",
      status: "Moderate",
      date: "2021-06-08 20:10:14"
    },
    {
      id: "0001324",
      machine: "Milling Machine 4",
      anomaly: "Unknown Anomaly",
      status: "Moderate",
      date: "2021-06-08 20:10:14"
    },
    {
      id: "0001325",
      machine: "Milling Machine 5",
      anomaly: "Unknown Anomaly",
      status: "Moderate",
      date: "2021-06-08 20:10:14"
    },
    {
      id: "0001326",
      machine: "Milling Machine 6",
      anomaly: "Unknown Anomaly",
      status: "Moderate",
      date: "2021-06-08 20:10:14"
    }
  ];

  return (
    <Fragment>
      <CssBaseline />
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          GROUNDUP.AI
        </Typography>
      </Toolbar>
      <Container maxWidth="lg">
        <Container sx={{ py: 4 }} maxWidth="lg">
          <Paper>
            <Box>
              <FormControl sx={{ marginTop: 2, marginLeft: 2 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Machine</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value='CNC Machine'
                  autoWidth
                  label="Machine"
                  sx={{ width: 150, height: 45, marginBottom: 2 }}
                >
                  <MenuItem value='CNC Machine'>CNC Machine</MenuItem>
                  <MenuItem value='Milling Machine'>Milling Machine</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Divider />
            <Box>
              <Grid container>
                <Grid item xs={4} sx={{ borderRight: 1 }}>
                  <Box>
                    <Divider />
                    <Grid container direction="row" alignItems="center">
                      <Grid item>
                        <IconButton>
                          <ArrowLeftIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Back
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                  <Box>
                    <Grid container direction="row" alignItems="center">
                      <Grid item>
                        <Chip sx={{ marginLeft: 2, marginTop: 1, marginBottom: 1 }} label="6 Alerts" variant="outlined" />
                      </Grid>
                      <Grid item>
                        <Chip label="2 New" sx={{ marginLeft: 2, marginTop: 1, marginBottom: 1 }} color="primary" />
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                  <Container>
                    {
                      cards.map((v) => (
                        <Card key={v.id} variant="outlined" sx={{ marginTop: 1, marginBottom: 1}}>
                          <CardHeader
                            avatar={
                              <Typography color="text.secondary">
                                {`ID #${v.id}`}
                              </Typography>
                            }
                            action={
                              <Chip label={v.status} color="primary" size="small" />
                            }
                            sx={{ paddingTop: 1, paddingBottom: 0 }}
                          />
                          <CardContent>
                            <Typography>
                              {v.anomaly}
                            </Typography>
                            <Typography color="text.secondary">
                              {v.date}
                            </Typography>
                            <Typography color="primary">
                              {v.machine}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </Container>
                </Grid>
                <Grid item xs={8}>
                  <Container>
                    <Typography variant="h5" sx={{ marginTop: 2 }}>
                      Alert ID #12345
                    </Typography>
                    <Typography variant="body2">
                      Detected at 2021-04-22 20:10:04
                    </Typography>
                    <Divider />
                    <Grid container>
                      <Grid item xs={6} sx={{ marginTop: 2}}>
                        <Typography>
                          Anomaly Machine Output
                        </Typography>
                        <Box sx={{ bgcolor: '#cfe8fc', height: 30, width: 120, borderRadius: '16px' }}>
                          <IconButton
                            sx={{ height: 30 }}
                            onClick={play1}>
                              <PlayArrowIcon />
                          </IconButton>
                        </Box>
                        <div className="App">
                          <WaveSurfer plugins={plugins1} onMount={handleWSMount1}>
                            <WaveForm id="waveform" cursorColor="transparent">
                            </WaveForm>
                            <div id="timeline1" />
                            <div id="spectrogram1" />
                          </WaveSurfer>
                        </div>
                      </Grid>
                      <Grid item xs={6} sx={{ marginTop: 2}}>
                        <Typography>
                          Normal Machine Output
                        </Typography>
                        <Box sx={{ bgcolor: '#cfe8fc', height: 30, width: 120, borderRadius: '16px' }}>
                          <IconButton
                            sx={{ height: 30 }}
                            onClick={play2}>
                              <PlayArrowIcon />
                          </IconButton>
                        </Box>
                        <div className="App">
                          <WaveSurfer plugins={plugins2} onMount={handleWSMount2}>
                            <WaveForm id="waveform2" cursorColor="transparent">
                            </WaveForm>
                            <div id="timeline2" />
                            <div id="spectrogram2" />
                          </WaveSurfer>
                        </div>
                      </Grid>
                    </Grid>
                    <Box>
                      <Typography>Equipment</Typography>
                      <Typography>CNC Machine</Typography>
                      <Grid>
                        <FormControl sx={{ marginTop: 2 }}>
                          <InputLabel id="demo-simple-select-autowidth-label">Suspected Reason</InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value='unknown_anomaly'
                            autoWidth
                            label="Suspected Reason"
                            sx={{ width: 240, height: 45, marginBottom: 2 }}
                          >
                            <MenuItem value='unknown_anomaly'>Unknown Anomaly</MenuItem>
                            <MenuItem value='knonw_anomaly'>Known Anomamly</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid>
                        <FormControl sx={{ marginTop: 2 }}>
                          <InputLabel id="demo-simple-select-autowidth-label">Action Required</InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value=''
                            autoWidth
                            label="Action Required"
                            sx={{ width: 240, height: 45, marginBottom: 2 }}
                          >
                            <MenuItem value='repair'>Repair</MenuItem>
                            <MenuItem value='replace'>Replace</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid>
                        <TextField
                          id="outlined-textarea"
                          label="Multiline Placeholder"
                          placeholder="Placeholder"
                          rows={7}
                          sx={{ width: 410 }}
                          multiline
                        />
                      </Grid>
                      <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>
                        UPDATE
                      </Button>
                    </Box>
                  </Container>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Container>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
