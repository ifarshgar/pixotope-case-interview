export const getMultimachineSyncing = () =>
  fetch(
    'http://localhost:16208/gateway/2.2.0/publish?Type=Get&Target=Store&Name=State.General.MultimachineSyncing',
    {
      method: 'GET',
    }
  ).then((response) => response.json());

export const setMultimachineSyncing = (value: string) =>
  fetch(
    `http://localhost:16208/gateway/2.2.0/publish?Type=Set&Target=Store&Name=State.General.MultimachineSyncing&&Value=${value}`,
    {
      method: 'GET',
    }
  ).then((response) => response.json());

// [
//   {
//     Topic: {
//       Type: 'Update',
//       Target: 'DESKTOP-US',
//       Source: 'Store',
//       Name: 'State.General.MultimachineSyncing',
//     },
//     Message: { Value: 'Timecode' },
//   },
// ];

export const getDefaultInputOutput = () =>
  fetch(
    'http://localhost:16208/gateway/2.2.0/publish?Type=Get&Target=Store&Name=State.Defaults.Type',
    {
      method: 'GET',
    }
  ).then((response) => response.json());

export const setDefaultInputOutput = (value: string) =>
  fetch(
    `http://localhost:16208/gateway/2.2.0/publish?Type=Set&Target=Store&Name=State.Defaults.Type&&Value=${value}`,
    {
      method: 'GET',
    }
  ).then((response) => response.json());

// [
//   {
//     Topic: {
//       Type: 'Update',
//       Target: 'DESKTOP-US',
//       Source: 'Store',
//       Name: 'State.Defaults.Type',
//     },
//     Message: { Value: 'AJA' },
//   },
// ];

export const getCameras = () =>
  fetch('http://localhost:16208/gateway/2.2.0/publish?Type=Get&Target=Store&Name=State.Cameras', {
    method: 'GET',
  }).then((response) => response.json());

// [
//   {
//     Topic: {
//       Type: 'Update',
//       Target: 'DESKTOP-USD2RAT-Gateway',
//       Source: 'Store',
//       Name: 'State.Cameras',
//     },
//     Message: {
//       Value: {
//         '5684b43f-1d3d-4f25-bf5e-67f9cbbedb5b': {
//           Name: 'front',
//           Ancillary: { Fingerprint: 'DESKTOP-USD2RAT-Director', CameraType: '2/3inch - 16:9' },
//           Input: {
//             TrackingProtocol: 'FreeD D1',
//             CameraSpecific: {
//               FilmbackWidth: 9.59,
//               FilmbackHeight: 5.39,
//               Aperture: 4,
//               EnableDOF: true,
//               DistortionModel: 'Undefined',
//               EnableFilmback: true,
//               EnableAperture: false,
//             },
//             LengthUnits: 'mm',
//             AngleUnits: 'degrees',
//             AxisPositives: { X: 'right', Y: 'forward', Z: 'up' },
//             RotationPositives: { Pan: 'pan right', Tilt: 'tilt up', Roll: 'roll right' },
//           },
//           PositionOffsets: {
//             Type: 'No mount setup',
//             Value: {
//               GlobalPosition: { X: 0, Y: 0, Z: 0 },
//               GlobalRotation: { X: 0, Y: 0, Z: 0 },
//               CameraRotation: { Pan: 0, Tilt: 0, Roll: 0 },
//             },
//           },
//           LensOffsets: {
//             FieldOfView: 0,
//             FocusDistance: 0,
//             Aperture: 0,
//             CX: 0,
//             CY: 0,
//             K1: 0,
//             K2: 0,
//             NodalX: 0,
//             ShowCrosshair: false,
//           },
//           LensFileConfig: {
//             UseLensFile: false,
//             LensFilePath: '',
//             ZoomEncoderOut: 0,
//             ZoomEncoderIn: 65000,
//             FocusEncoderNear: 65000,
//             FocusEncoderFar: 0,
//             EnableDOF: true,
//             EnableDistortion: true,
//             EnableNodal: true,
//             EnableFOV: true,
//             EnableCenterOffset: true,
//           },
//         },
//         '4979a464-d264-4916-a06d-c04904a10239': {
//           Name: 'back',
//           Ancillary: { Fingerprint: 'DESKTOP-USD2RAT-Director', CameraType: '2/3inch - 16:9' },
//           Input: {
//             TrackingProtocol: 'FreeD D1',
//             CameraSpecific: {
//               FilmbackWidth: 9.59,
//               FilmbackHeight: 5.39,
//               Aperture: 4,
//               EnableDOF: true,
//               DistortionModel: 'Undefined',
//               EnableFilmback: true,
//               EnableAperture: false,
//             },
//             LengthUnits: 'mm',
//             AngleUnits: 'degrees',
//             AxisPositives: { X: 'right', Y: 'forward', Z: 'up' },
//             RotationPositives: { Pan: 'pan right', Tilt: 'tilt up', Roll: 'roll right' },
//           },
//           PositionOffsets: {
//             Type: 'No mount setup',
//             Value: {
//               GlobalPosition: { X: 0, Y: 0, Z: 0 },
//               GlobalRotation: { X: 0, Y: 0, Z: 0 },
//               CameraRotation: { Pan: 0, Tilt: 0, Roll: 0 },
//             },
//           },
//           LensOffsets: {
//             FieldOfView: 0,
//             FocusDistance: 0,
//             Aperture: 0,
//             CX: 0,
//             CY: 0,
//             K1: 0,
//             K2: 0,
//             NodalX: 0,
//             ShowCrosshair: false,
//           },
//           LensFileConfig: {
//             UseLensFile: false,
//             LensFilePath: '',
//             ZoomEncoderOut: 0,
//             ZoomEncoderIn: 65000,
//             FocusEncoderNear: 65000,
//             FocusEncoderFar: 0,
//             EnableDOF: true,
//             EnableDistortion: true,
//             EnableNodal: true,
//             EnableFOV: true,
//             EnableCenterOffset: true,
//           },
//         },
//       },
//     },
//   },
// ];
