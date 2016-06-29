---
uid: ManagedBass.Bass.PlaybackBufferLength
---

**Example**  
Use the recommended minimum buffer length with 1ms margin.

```csharp
// get update period
var len = Bass.UpdatePeriod;

// retrieve device info
BassInfo info;
Bass.GetInfo(out info);

// add the 'minbuf' plus 1ms margin
len += info.MinimumBufferLength + 1;

// set the buffer length
Bass.PlaybackBufferLength = len;
```