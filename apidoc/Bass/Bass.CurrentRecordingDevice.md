---
uid: ManagedBass.Bass.CurrentRecordingDevice
---

**Example**  
Start recording on device 2.

```csharp
// select device 2
Bass.CurrentRecordingDevice = 2;

// start recording
var hrecord = Bass.RecordStart(44100, 2, 0, MyRecordProc, IntPtr.Zero);
```