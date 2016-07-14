---
uid: ManagedBass.Mix.BassMix.CreateStream(System.Int32,System.Int32,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

Any combination of these flags.

BassFlags                                    | Description
---------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Byte>            | Use 8-bit resolution. If neither this or the <xref:ManagedBass.BassFlags.Float> flags are specified, then the stream is 16-bit.
<xref:ManagedBass.BassFlags.Float>           | Produce 32-bit floating-point output. WDM drivers or the <xref:ManagedBass.BassFlags.Decode> flag are required to use this flag in Windows. See <xref:FloatChannels> for more info.
<xref:ManagedBass.BassFlags.SoftwareMixing>  | Force the stream to not use hardware mixing. Note this only applies to playback of the mixer's output; the mixing of the source channels is always performed by BassMix.
<xref:ManagedBass.BassFlags.Bass3D>          | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1). The <xref:SpeakerFlags> can not be used together with this flag.
<xref:ManagedBass.BassFlags.FX>              | Enable the old implementation of DirectX 8 effects. See the <xref:DX8Impl> section for details. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.
<xref:ManagedBass.BassFlags.AutoFree>        | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>          | Mix the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve the mixed sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and <xref:SpeakerFlags> can not be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing>, <xref:ManagedBass.BassFlags.FX> and <xref:ManagedBass.BassFlags.MixerResume> flags are also ignored.
<xref:ManagedBass.BassFlags.MixerEnd>        | End the stream when there are no active (including stalled) source channels, else it is never-ending.
<xref:ManagedBass.BassFlags.MixerNonStop>    | Do not stop producing output when there are no active source channels, else it will be stalled until there are active sources.
<xref:ManagedBass.BassFlags.MixerPositionEx> | Keep a record of the source positions, making it possible to account for output latency when retrieving a source position. How far back the position record goes is determined by the <xref:ManagedBass.Mix.BassMix.MixerPositionEx> config option. If this flag is not used and neither is the <xref:ManagedBass.BassFlags.Decode> flag, then the mixer will automatically have a position record of equal length to the <xref:ManagedBass.Bass.PlaybackBufferLength> setting.
<xref:ManagedBass.BassFlags.MixerResume>     | When stalled, resume the mixer immediately upon a source being added or unpaused, else it will be resumed at the next update cycle.
SPEAKER                                      | <xref:SpeakerFlags>. These flags have no effect when the stream is more than stereo.