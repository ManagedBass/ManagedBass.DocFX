---
uid: ManagedBass.Bass.SampleLoad(System.String,System.Int64,System.Int32,System.Int32,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                                 | Description
----------------------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Float>                        | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.Loop>                         | Loop the file. This flag can be toggled at any time using <xref:ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)>.
<xref:ManagedBass.BassFlags.Mono>                         | Decode/play the stream (MP3/MP2/MP1 only) in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if <xref:ManagedBass.DeviceInitFlags.Mono> was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>.
<xref:ManagedBass.BassFlags.SoftwareMixing>               | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.VAM>                          | Enables the DX7 voice allocation and management features on the sample, which allows the sample to be played in software or hardware. This flag is ignored if the <xref:ManagedBass.BassFlags.SoftwareMixing> flag is also specified.
<xref:ManagedBass.BassFlags.Bass3D>                       | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.MuteMax>                      | Mute the sample when it is at (or beyond) its max distance (software-mixed 3D samples only).
<xref:ManagedBass.BassFlags.SampleOverrideLowestVolume>   | Override: the channel with the lowest volume is overridden.
<xref:ManagedBass.BassFlags.SampleOverrideLongestPlaying> | Override: the longest playing channel is overridden.
<xref:ManagedBass.BassFlags.SampleOverrideDistance>       | Override: the channel furthest away (from the listener) is overridden (3D samples only).