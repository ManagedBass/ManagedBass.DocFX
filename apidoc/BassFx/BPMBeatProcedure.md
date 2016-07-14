---
uid: ManagedBass.Fx.BPMBeatProcedure
---

**Example**  
A very simple way to count the BPM in real-time, using only 2 beats.

```csharp
double prevBeatPos; // previous beat position in seconds
double bpm; // the bpm 

void BeatProcGetBPM(int handle, double beatpos, IntPtr user)
{
    if (beatpos != prevBeatPos)
        bpm = 60 / (beatpos - prevBeatPos); // calculate the bpm

    prevBeatPos = beatpos; // save current beat position
}
```

Get the detection progress in percents:

```csharp
var progress = 100 * (beatpos - startpos) / (endpos - startpos);
```