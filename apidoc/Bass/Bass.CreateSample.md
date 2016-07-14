---
uid: ManagedBass.Bass.CreateSample(System.Int32,System.Int32,System.Int32,System.Int32,ManagedBass.BassFlags)
---

**Example**  
Create a 440 Hz sine wave sample.

```csharp
// create sample
var sample = Bass.CreateSample(256, 28160, 1, 1, BassFlags.Loop | BassFlags.SampleOverrideLongestPlaying);

var data = new short[128]; // data buffer

for (var a = 0; a < 128; a++)
    data[a]= (short)(32767 * Math.Sin((double)a * 6.283185 / 64)); // sine wave

// set the sample's data
Bass.SampleSetData(sample, data);
```

---
uid: ManagedBass.Bass.CreateSample(System.Int32,System.Int32,System.Int32,System.Int32,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                                 | Description
----------------------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Byte>                         | Use 8-bit resolution. If neither this or the <xref:ManagedBass.BassFlags.Float> flags are specified, then the sample is 16-bit.
<xref:ManagedBass.BassFlags.Float>                        | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.Loop>                         | Looped? Note that only complete sample loops are allowed; you cannot loop just a part of the sample. More fancy looping can be achieved via streaming.
<xref:ManagedBass.BassFlags.SoftwareMixing>               | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.VAM>                          | Enables the DX7 voice allocation and management features on the sample, which allows the sample to be played in software or hardware. This flag is ignored if the <xref:ManagedBass.BassFlags.SoftwareMixing> flag is also specified.
<xref:ManagedBass.BassFlags.Bass3D>                       | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.MuteMax>                      | Mute the sample when it is at (or beyond) its max distance (software-mixed 3D samples only).
<xref:ManagedBass.BassFlags.SampleOverrideLowestVolume>   | Override: the channel with the lowest volume is overridden.
<xref:ManagedBass.BassFlags.SampleOverrideLongestPlaying> | Override: the longest playing channel is overridden.
<xref:ManagedBass.BassFlags.SampleOverrideDistance>       | Override: the channel furthest away (from the listener) is overridden (3D samples only).