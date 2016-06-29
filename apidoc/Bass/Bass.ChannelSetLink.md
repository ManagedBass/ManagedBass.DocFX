---
uid: ManagedBass.Bass.ChannelSetLink(System.Int32,System.Int32)
---

**Example**  
Link 2 streams and play them together.

```csharp
// link stream2 to stream1
Bass.ChannelSetLink(stream1, stream2);

// start both streams together
Bass.ChannelPlay(stream1);
```