---
uid: ManagedBass.Bass.ChannelGetLevel(System.Int32)
---

**Example**  
Get the left and right levels of a stereo channel.

```csharp
var level = Bass.ChannelGetLevel(channel);
var left = BitHelper.LoWord(level); // the left level
var right = BitHelper.HiWord(level); // the right level
```

---
uid: ManagedBass.Bass.ChannelGetLevel(System.Int32,System.Single,ManagedBass.LevelRetrievalFlags)
---

**Example**
Replicate <xref:ManagedBass.Bass.ChannelGetLevel(System.Int32)> but with floating-point levels.

```csharp
var levels = new float[2];
Bass.ChannelGetLevel(handle, levels, 0.02f,  LevelRetrievalFlags.Stereo);
```

Get a mono RMS level reading in decibels using 50ms of data. 

```csharp
var level = new float[1];

// get the level
Bass.ChannelGetLevel(handle, level, 0.05f, LevelRetrievalFlags.Mono | LevelRetrievalFlags.RMS);

// translate it to dB
var dblevel = level > 0 ? 20 * log10(level) : -1000;
```

Get a peak level reading for each channel using 20ms of data. 

```csharp
ChannelInfo ci;
Bass.ChannelGetInfo(handle, out ci);

// allocate an array for each channel's level
var levels = new float[ci.chans];

// get the levels
Bass.ChannelGetLevel(handle, levels, 0.02f, 0);
```