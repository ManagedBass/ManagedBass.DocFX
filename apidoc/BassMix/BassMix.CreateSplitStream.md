---
uid: ManagedBass.Mix.BassMix.CreateSplitStream(System.Int32,ManagedBass.BassFlags,System.Int32[])
syntax:
  parameters:
    - id: Flags
      description: *content
---

Any combination of these flags.

BassFlags                                   | Description
--------------------------------------------|-------------
<xref:ManagedBass.BassFlags.SoftwareMixing> | Force the stream to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>         | Use 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the stream must be mono. The <xref:ManagedBass.SpeakerFlags> can not be used together with this flag.
<xref:ManagedBass.BassFlags.FX>             | Enable the old implementation of DirectX 8 effects. See the <xref:DX8Impl> section for details. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.
<xref:ManagedBass.BassFlags.AutoFree>       | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>         | Render the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve the sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and <xref:ManagedBass.SpeakerFlags> can not be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> are also ignored.
<xref:ManagedBass.BassFlags.SplitSlave>     | Only get data from the splitter buffer, not directly from the source.
SPEAKER                                     | <xref:SpeakerFlags>. These flags have no effect when the stream is more than stereo.