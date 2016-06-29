---
uid: ManagedBass.Bass.CurrentDevice
---

**Example**  
Create a stream of an MP3 file on device 2.

```csharp
Bass.CurrentDevice = 2; // select device 2
var stream = Bass.CreateStream("afile.mp3"); // create the stream
```