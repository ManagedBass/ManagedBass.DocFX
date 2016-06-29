---
uid: ManagedBass.Bass.ChannelGetInfo(System.Int32,ManagedBass.ChannelInfo@)
---

**Example**  
Check if a channel is an MP3 stream.

```csharp
ChannelInfo info;
Bass.ChannelGetInfo(channel, out info); // get info

if (info.ChannelType == ChannelType.MP3) 
{
    // it's an MP3!
}
```