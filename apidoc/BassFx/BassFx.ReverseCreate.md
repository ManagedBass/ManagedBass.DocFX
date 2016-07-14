---
uid: ManagedBass.Fx.BassFx.ReverseCreate(System.Int32,System.Single,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                               | Description
----------------------------------------|-------------
@'ManagedBass.BassFlags.Loop'           | Looped? Note that only complete sample loops are allowed by DirectSound (ie. you can't loop just part of a sample)
@'ManagedBass.BassFlags.SoftwareMixing' | Force the sample to not use hardware mixing
@'ManagedBass.BassFlags.Bass3D'         | Use 3D functionality. This is ignored if @'ManagedBass.DeviceInitFlags.Device3D' wasn't specified when calling @'ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)'. 3D samples must be mono (use @'ManagedBass.BassFlags.Mono')
@'ManagedBass.BassFlags.FX'             | Enable the old implementation of DirectX 8 effects. See the @'DX8Impl' section for details. Use @'ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)' to add effects to the stream
@'ManagedBass.BassFlags.AutoFree'       | Automatically free the stream's resources when it has reached the end, or when @'ManagedBass.Bass.ChannelStop(System.Int32)' (or @'ManagedBass.Bass.Stop') is called
@'ManagedBass.BassFlags.Decode'         | Decode the sample data, without outputting it. Use @'ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)' to retrieve decoded sample data. @'ManagedBass.BassFlags.SoftwareMixing'/@'ManagedBass.BassFlags.Bass3D'/@'ManagedBass.BassFlags.FX'/@'ManagedBass.BassFlags.AutoFree' are all ignored when using this flag, as are the @'SpeakerFlags'.
SPEAKER                                 | @'SpeakerFlags'.
@'ManagedBass.BassFlags.FxFreeSource'   | Free the source handle as well.

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