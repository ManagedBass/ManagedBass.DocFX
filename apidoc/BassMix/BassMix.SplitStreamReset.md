---
uid: ManagedBass.Mix.BassMix.SplitStreamReset(System.Int32,System.Int32)
---

**Example**  
Create a new splitter stream that will first play 0.5s of already buffered data (if available).

```csharp
// create a splitter stream
var split = Bass.CreateSplitStream(source, 0, null);

// set it 0.5s back in the buffer
Bass.SplitStreamReset(split, Bass.ChannelSeconds2Bytes(source, 0.5));

// start playing
Bass.ChannelPlay(split, false);
```