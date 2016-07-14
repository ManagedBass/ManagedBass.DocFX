---
uid: ManagedBass.Fx.BassFx.ReverseCreate(System.Int32,System.Single,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                   | Description
--------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Loop>           | Looped? Note that only complete sample loops are allowed by DirectSound (ie. you can't loop just part of a sample)
<xref:ManagedBass.BassFlags.SoftwareMixing> | Force the sample to not use hardware mixing
<xref:ManagedBass.BassFlags.Bass3D>         | Use 3D functionality. This is ignored if <xref:ManagedBass.DeviceInitFlags.Device3D> wasn't specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>. 3D samples must be mono (use <xref:ManagedBass.BassFlags.Mono>)
<xref:ManagedBass.BassFlags.FX>             | Enable the old implementation of DirectX 8 effects. See the <xref:DX8Impl> section for details. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream
<xref:ManagedBass.BassFlags.AutoFree>       | Automatically free the stream's resources when it has reached the end, or when <xref:ManagedBass.Bass.ChannelStop(System.Int32)> (or <xref:ManagedBass.Bass.Stop>) is called
<xref:ManagedBass.BassFlags.Decode>         | Decode the sample data, without outputting it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. <xref:ManagedBass.BassFlags.SoftwareMixing>/<xref:ManagedBass.BassFlags.Bass3D>/<xref:ManagedBass.BassFlags.FX>/<xref:ManagedBass.BassFlags.AutoFree> are all ignored when using this flag, as are the <xref:SpeakerFlags>.
SPEAKER                                     | <xref:SpeakerFlags>.
<xref:ManagedBass.BassFlags.FxFreeSource>   | Free the source handle as well.

---
uid: ManagedBass.Fx.BassFx.ReverseCreate(System.Int32,System.Single,ManagedBass.BassFlags)
---

**Example**
Create a Reverse stream.

```csharp
// create decoded stream
var chan = Bass.CreateStream(FileName, Flags: BassFlags.Decode);

// create reverse stream, 2 secs decoding block
if (chan != 0)
    chan = BassFx.TempoCreate(chan, 2, BassFlags.FxFreeSource);
```