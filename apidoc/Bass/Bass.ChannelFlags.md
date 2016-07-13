---
uid: ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                      | Description
-----------------------------------------------|-------------
@'ManagedBass.BassFlags.Loop'                  | Loop the file.
@'ManagedBass.BassFlags.AutoFree'              | Automatically free the stream when playback ends.
@'ManagedBass.BassFlags.RestrictDownloadRate'  | Restrict the download rate.
@'ManagedBass.BassFlags.MusicNonInterpolated'  | Use non-interpolated sample mixing.
@'ManagedBass.BassFlags.SincInterpolation'     | Use sinc interpolated sample mixing.
@'ManagedBass.BassFlags.MusicRamp'             | Use "normal" ramping.
@'ManagedBass.BassFlags.MusicSensitiveRamping' | Use "sensitive" ramping.
@'ManagedBass.BassFlags.MusicSurround'         | Use surround sound.
@'ManagedBass.BassFlags.MusicSurround2'        | Use surround sound mode 2.
@'ManagedBass.BassFlags.MusicFT2Mod'           | Use FastTracker 2 MOD playback.
@'ManagedBass.BassFlags.MusicPT1Mod'           | Use ProTracker 1 MOD playback.
@'ManagedBass.BassFlags.MusicPositionReset'    | Stop all notes when seeking.
@'ManagedBass.BassFlags.MusicPositionResetEx'  | Stop all notes and reset BPM/etc when seeking.
@'ManagedBass.BassFlags.MusicStopBack'         | Stop when a backward jump effect is played.
SPEAKER                                        | @'SpeakerFlags'.