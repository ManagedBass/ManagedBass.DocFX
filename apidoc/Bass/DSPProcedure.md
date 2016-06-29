---
uid: ManagedBass.DSPProcedure
---

**Example**  
A simple DSP function to swap the left/right channels of a stereo 16-bit channel.

```csharp
unsafe void SwapDSP(int handle, int channel, IntPtr buffer, int length, IntPtr user)
{
    for (var s = (short*)buffer; length != 0; length -= 4, s += 2)
    {
        var temp = s[0];
        s[0] = s[1];
        s[1] = temp;
    }
}
```

A panning/balance DSP function for a stereo 16-bit channel. 

```csharp
// panning position, set as you would the ChannelAttribute.Pan attribute
float pan;

unsafe void PanDSP(int handle, int channel, IntPtr buffer, int length, IntPtr user)
{
    // no processing neeeded for centre panning
    if (pan == 0)
        return;

    for (var s = (short*)buffer; length != 0; length -= 4, s += 2)
    {
        // pan left = reduce right
        if (pan < 0)
            s[1] *= 1 + pan;
        // vice versa
        else s[0] *= 1 - pan;
    }
}
```