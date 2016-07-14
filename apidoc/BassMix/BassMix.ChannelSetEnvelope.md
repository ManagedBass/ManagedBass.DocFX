---
uid: ManagedBass.Mix.BassMix.ChannelSetEnvelope(System.Int32,ManagedBass.Mix.MixEnvelope,ManagedBass.Mix.MixerNode[],System.Int32)
---

**Example**  
Set an envelope to bounce the pan position between left and right every 4 seconds.

```csharp
var nodes = new MixerNode[4];

nodes[0].Position = 0;
nodes[0].Value = 0; // start at centre

nodes[1].Position = Bass.ChannelSeconds2Bytes(mixer, 1);
nodes[1].Value = -1; // full left after 1 second

nodes[2].Position = Bass.ChannelSeconds2Bytes(mixer, 3);
nodes[2].Value = 1; // full right after 3 seconds

nodes[3].Position = Bass.ChannelSeconds2Bytes(mixer, 4);
nodes[3].Value = 0; // back at centre after 4 seconds

// apply the envelope, looped
BassMix.ChannelSetEnvelope(channel, MixerEnvelope.Pan | MixerEnvelope.Loop, nodes, 4);
```