---
uid: ManagedBass.Bass.SampleSetInfo(System.Int32,ManagedBass.SampleInfo)
---

**Example**  
Set a sample's default volume to 0.5.

```csharp
// get the sample's current info
SampleInfo info;
Bass.SampleGetInfo(sample, ref info);

// set the default volume to 0.5
info.Volume = 0.5;

// set the updated info
Bass.SampleSetInfo(sample, info);
```