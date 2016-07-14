---
uid: ManagedBass.Bass.MusicLoad(System.String,System.Int64,System.Int32,ManagedBass.BassFlags,System.Int32)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                          | Description
---------------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Byte>                  | Use 8-bit resolution. If neither this or the <xref:ManagedBass.BassFlags.Float> flags are specified, then the stream is 16-bit.
<xref:ManagedBass.BassFlags.Float>                 | Use 32-bit floating-point sample data. See <xref:FloatChannels> for info.
<xref:ManagedBass.BassFlags.Mono>                  | Decode/play the music in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if <xref:ManagedBass.DeviceInitFlags.Mono> was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>.
<xref:ManagedBass.BassFlags.SoftwareMixing>        | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>                | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>. 3D channels must also be mono, so <xref:ManagedBass.BassFlags.Mono> is automatically applied. The <xref:SpeakerFlags> cannot be used together with this flag.
<xref:ManagedBass.BassFlags.FX>                    | Enable the old implementation of DirectX 8 effects. See the <xref:DX8Impl> section for details. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the music.
<xref:ManagedBass.BassFlags.Loop>                  | Loop the music.
<xref:ManagedBass.BassFlags.MusicNonInterpolated>  | Use non-interpolated sample mixing. This generally reduces the sound quality, but can be good for chip-tunes.
<xref:ManagedBass.BassFlags.SincInterpolation>     | Use sinc interpolated sample mixing. This increases the sound quality, but also requires more CPU. If neither this or the <xref:ManagedBass.BassFlags.MusicNonInterpolated> flag is specified, linear interpolation is used.
<xref:ManagedBass.BassFlags.MusicRamp>             | Use "normal" ramping (as in FastTracker 2).
<xref:ManagedBass.BassFlags.MusicSensitiveRamping> | Use "sensitive" ramping.
<xref:ManagedBass.BassFlags.MusicSurround>         | Apply XMPlay's surround sound to the music. This is ignored if <xref:ManagedBass.BassFlags.Mono> flag is also specified.
<xref:ManagedBass.BassFlags.MusicSurround2>        | Apply XMPlay's surround sound 2 to the music. This is ignored if <xref:ManagedBass.BassFlags.Mono> flag is also specified.
<xref:ManagedBass.BassFlags.MusicFT2PAN>           | Apply FastTracker 2 panning to XM files.
<xref:ManagedBass.BassFlags.MusicFT2Mod>           | Play .MOD files as FastTracker 2 would, including applying FastTracker 2 panning.
<xref:ManagedBass.BassFlags.MusicPT1Mod>           | Play .MOD files as ProTracker 1 would.
<xref:ManagedBass.BassFlags.MusicPositionReset>    | Stop all notes when seeking (<xref:ManagedBass.Bass.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)>).
<xref:ManagedBass.BassFlags.MusicPositionResetEx>  | Stop all notes and reset BPM/etc when seeking.
<xref:ManagedBass.BassFlags.MusicStopBack>         | Stop the music when a backward jump effect is played. This stops musics that never reach the end from going into endless loops. Some MOD musics are designed to jump all over the place, so this flag would cause those to be stopped prematurely. If this flag is used together with the <xref:ManagedBass.BassFlags.Loop> flag, then the music would not be stopped but any <xref:ManagedBass.SyncFlags.End> sync would be triggered.
<xref:ManagedBass.BassFlags.Prescan>               | Calculate the playback length of the music, and enable seeking in bytes. This slightly increases the time taken to load the music, depending on how long it is. In the case of musics that loop, the length until the loop occurs is calculated. Use <xref:ManagedBass.Bass.ChannelGetLength(System.Int32,ManagedBass.PositionFlags)> to retrieve the length.
<xref:ManagedBass.BassFlags.MusicNoSample>         | This reduces the time (and memory) taken to load the music, notably with MO3 files, which is useful if you just want to get the text and/or length of the music without playing it.
<xref:ManagedBass.BassFlags.AutoFree>              | Automatically free the music when playback ends. Note that some musics have infinite loops, so never actually end on their own.
<xref:ManagedBass.BassFlags.Decode>                | Decode/render the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and <xref:SpeakerFlags> cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.
SPEAKER                                            | <xref:SpeakerFlags>. The <xref:ManagedBass.BassFlags.Mono> flag is automatically applied when using a mono speaker assignment flag.