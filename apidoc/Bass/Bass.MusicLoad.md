---
uid: ManagedBass.Bass.MusicLoad(System.String,System.Int64,System.Int32,ManagedBass.BassFlags,System.Int32)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                   | Description
--------------------------------------------|-------------
@ManagedBass.BassFlags.Byte                 | Use 8-bit resolution. If neither this or the @ManagedBass.BassFlags.Float flags are specified, then the stream is 16-bit.
@ManagedBass.BassFlags.Float                | Use 32-bit floating-point sample data. See @FloatChannels for info.
@ManagedBass.BassFlags.Mono                 | Decode/play the music in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if @ManagedBass.DeviceInitFlags.Mono was specified when calling @ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr).
@ManagedBass.BassFlags.SoftwareMixing       | Force the sample to not use hardware mixing.
@ManagedBass.BassFlags.Bass3D               | Enable 3D functionality. This requires that the @ManagedBass.DeviceInitFlags.Device3D flag was specified when calling @ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr). 3D channels must also be mono, so @ManagedBass.BassFlags.Mono is automatically applied. The @SpeakerFlags cannot be used together with this flag.
@ManagedBass.BassFlags.FX                   | Enable the old implementation of DirectX 8 effects. See the @DX8Impl section for details. Use @ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32) to add effects to the music.
@ManagedBass.BassFlags.Loop                 | Loop the music.
@ManagedBass.BassFlags.MusicNonInterpolated | Use non-interpolated sample mixing. This generally reduces the sound quality, but can be good for chip-tunes.
@ManagedBass.BassFlags.SincInterpolation    | Use sinc interpolated sample mixing. This increases the sound quality, but also requires more CPU. If neither this or the @ManagedBass.BassFlags.MusicNonInterpolated flag is specified, linear interpolation is used.
@ManagedBass.BassFlags.MusicRamp            | Use "normal" ramping (as in FastTracker 2).
@ManagedBass.BassFlags.MusicRampSensitive   | Use "sensitive" ramping.
@ManagedBass.BassFlags.MusicSurround        | Apply XMPlay's surround sound to the music. This is ignored if @ManagedBass.BassFlags.Mono flag is also specified.
@ManagedBass.BassFlags.MusicSurround2       | Apply XMPlay's surround sound 2 to the music. This is ignored if @ManagedBass.BassFlags.Mono flag is also specified.
@ManagedBass.BassFlags.FT2Pan               | Apply FastTracker 2 panning to XM files.
@ManagedBass.BassFlags.FT2Mod               | Play .MOD files as FastTracker 2 would, including applying FastTracker 2 panning.
@ManagedBass.BassFlags.PT1Mod               | Play .MOD files as ProTracker 1 would.
@ManagedBass.BassFlags.MusicPositionReset   | Stop all notes when seeking (@ManagedBass.Bass.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)).
@ManagedBass.BassFlags.MusicPositionResetEx | Stop all notes and reset BPM/etc when seeking.
@ManagedBass.BassFlags.MusicStopback        | Stop the music when a backward jump effect is played. This stops musics that never reach the end from going into endless loops. Some MOD musics are designed to jump all over the place, so this flag would cause those to be stopped prematurely. If this flag is used together with the @ManagedBass.BassFlags.Loop flag, then the music would not be stopped but any @ManagedBass.SyncFlags.End sync would be triggered.
@ManagedBass.BassFlags.Prescan              | Calculate the playback length of the music, and enable seeking in bytes. This slightly increases the time taken to load the music, depending on how long it is. In the case of musics that loop, the length until the loop occurs is calculated. Use @ManagedBass.Bass.ChannelGetLength(System.Int32,ManagedBass.PositionFlags) to retrieve the length.
@ManagedBass.BassFlags.MusicNoSample        | This reduces the time (and memory) taken to load the music, notably with MO3 files, which is useful if you just want to get the text and/or length of the music without playing it.
@ManagedBass.BassFlags.AutoFree             | Automatically free the music when playback ends. Note that some musics have infinite loops, so never actually end on their own.
@ManagedBass.BassFlags.Decode               | Decode/render the sample data, without playing it. Use @ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int64) to retrieve decoded sample data. The @ManagedBass.BassFlags.Bass3D, @ManagedBass.BassFlags.AutoFree and @SpeakerFlags cannot be used together with this flag. The @ManagedBass.BassFlags.SoftwareMixing and @ManagedBass.BassFlags.FX flags are also ignored.
SPEAKER                                     | @SpeakerFlags. The @ManagedBass.BassFlags.Mono flag is automatically applied when using a mono speaker assignment flag.