---
uid: ManagedBass.Bass.ChannelSetSync(System.Int32,ManagedBass.SyncFlags,System.Int64,ManagedBass.SyncProcedure,System.IntPtr)
---

**Example**  
Do some processing until a MOD music reaches the 10th order.

```csharp
var order10 = false; // the order 10 flag

...

// the sync callback
void MySyncProc(int handle, int channel, int data, IntPtr user)
{
    order10 = true; // set the order 10 flag
}

...

// set the one-time order 10 sync
Bass.ChannelSetSync(music, SyncFlags.MusicPosition | SyncFlags.Onetime, BitHelper.MakeLong(10, 0), MySyncProc, IntPtr.Zero);

while (!order10)
{
    // order 10 has not arrived, so do some processing
}

// order 10 has arrived!
```

Process metadata received from a Shoutcast stream. 

```csharp
var title = ""; // the current stream title

...

// the sync callback
void MyMetaSyncProc(int handle, int channel, int data, IntPtr user)
{
    // get metadata
    var meta = BASS_ChannelGetTags(channel, SyncFlags.MetadataReceived);
    
    // look for title
    foreach (var data in Extensions.ExtractMultiStringAnsi(meta))
    {
        if (data.StartsWith("StreamTitle='"))
        {
            // found
            title = data.SubString(13);
            break;
        }
    }
}

...

// set the meta sync
Bass.ChannelSetSync(stream, SyncFlags.MetadataReceived, 0, MyMetaSyncProc, IntPtr.Zero);
```