---
uid: ManagedBass.Bass.ChannelLock(System.Int32,System.Boolean)
---

**Example**  
Lock a channel to ensure that 2 DSP functions start together.

```csharp
// lock channel
Bass.ChannelLock(channel, true);

// set 1st DSP
Bass.ChannelSetDSP(channel, DspProc1, IntPtr.Zero, 0);

// set 2nd DSP
Bass.ChannelSetDSP(channel, DspProc2, IntPtr.Zero, 0);

// unlock channel
Bass.ChannelLock(channel, false);
```