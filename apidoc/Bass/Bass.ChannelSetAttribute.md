---
uid: ManagedBass.ChannelAttribute.MusicPositionScaler
---

**Example**  
Get the position of a MOD music accurate to within a 10th of a row.

```csharp
// Set the Scaler
Bass.ChannelSetAttriute(music, ChannelAttribute.MusicPositionScaler, 10);

var pos = Bass.ChannelGetPosition(music, PositionFlags.MusicOrders);

var order = BitHelper.LoWord(pos);
var row = BitHelper.HiWord(pos) / 10;

var row10th = HiWord(pos) % 10;
```

---
uid: ManagedBass.ChannelAttribute.MusicVolumeChannel
---

**Example**
Count the number of channels in a MOD music.

```csharp
var channels = 0;
float dummy;

while (Bass.ChannelGetAttribute(music, ChannelAttribute.MusicVolumeChannel + channels, out dummy))
    channels++;
```

---
uid: ManagedBass.ChannelAttribute.MusicVolumeInstrument
---

**Example**
Count the number of instruments in a MOD music.

```csharp
var instruments = 0;
float dummy;

while (Bass.ChannelGetAttribute(music, ChannelAttribute.MusicVolumeInstrument + instruments, out dummy))
    instruments++;
```

---
uid: ManagedBass.ChannelAttribute.ScannedInfo
---

**Example**
Transfer scanned info from one stream to another stream of the same file.

```csharp
// get the size
var size = Bass.ChannelGetAttribute(stream1, ChannelAttribute.ScannedInfo, IntPtr.Zero, 0);

// allocate a buffer for the data
void scaninfo = Marshal.AllocHGlobal(size);

// get the data
Bass.ChannelGetAttribute(stream1, ChannelAttribute.ScannedInfo, scaninfo, size);

// apply it to the other stream
Bass.ChannelSetAttribute(stream2, ChannelAttribute.ScannedInfo, scaninfo, size);

Marshal.FreeHGlobal(scaninfo);
```