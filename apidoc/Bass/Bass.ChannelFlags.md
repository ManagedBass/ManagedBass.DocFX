---
uid: ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                          | Description
---------------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Loop>                  | Loop the file.
<xref:ManagedBass.BassFlags.AutoFree>              | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.RestrictDownloadRate>  | Restrict the download rate.
<xref:ManagedBass.BassFlags.MusicNonInterpolated>  | Use non-interpolated sample mixing.
<xref:ManagedBass.BassFlags.SincInterpolation>     | Use sinc interpolated sample mixing.
<xref:ManagedBass.BassFlags.MusicRamp>             | Use "normal" ramping.
<xref:ManagedBass.BassFlags.MusicSensitiveRamping> | Use "sensitive" ramping.
<xref:ManagedBass.BassFlags.MusicSurround>         | Use surround sound.
<xref:ManagedBass.BassFlags.MusicSurround2>        | Use surround sound mode 2.
<xref:ManagedBass.BassFlags.MusicFT2Mod>           | Use FastTracker 2 MOD playback.
<xref:ManagedBass.BassFlags.MusicPT1Mod>           | Use ProTracker 1 MOD playback.
<xref:ManagedBass.BassFlags.MusicPositionReset>    | Stop all notes when seeking.
<xref:ManagedBass.BassFlags.MusicPositionResetEx>  | Stop all notes and reset BPM/etc when seeking.
<xref:ManagedBass.BassFlags.MusicStopBack>         | Stop when a backward jump effect is played.
SPEAKER                                            | <xref:SpeakerFlags>.