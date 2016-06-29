---
uid: ManagedBass.Bass.SampleGetChannel(System.Int32,System.Boolean)
---

**Example**  
Play a sample with its default settings.

```csharp
// get a sample channel
var channel = Bass.SampleGetChannel(sample, false);

Bass.ChannelPlay(channel); // play it
```