---
uid: ManagedBass.Bass.ChannelGetLength(System.Int32)
---

**Example**  
Get the duration (in seconds) of a channel.

```csharp
// the length in bytes
var len = Bass.ChannelGetLength(channel);

// the length in seconds
var time = Bass.ChannelBytes2Seconds(channel, len);
```
