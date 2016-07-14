---
uid: ManagedBass.ChannelAttribute.Tempo
---

**Example**  
Set Tempo by BPM value:

```csharp
var tempo = (goalBPM / bpmValue - 1f) * 100f;

Bass.ChannelSetAttribute(chan, ChannelAttribute.Tempo, tempo);
```