---
uid: ManagedBass.Bass.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)
---

**Example**  
Set the position of a channel to 1000000 bytes.

```csharp
Bass.ChannelSetPosition(channel, 1000000);
```

Set the position of a MOD music to row 20 of order 10, and stop all currently playing notes. 

```csharp
Bass.ChannelSetPosition(music, BitHelper.MakeLong(10, 20), PositionFlags.MusicOrders | PositionFlags.MusicPositionReset);
```