---
uid: ManagedBass.Enc.BassEnc.CastInit(System.Int32,System.String,System.String,System.String,System.String,System.String,System.String,System.String,System.String,System.Int32,System.Boolean)
---

**Example**  
Start encoding a stereo 44100hz channel to 128kb/s MP3, and send the output to a Shoutcast server.

```csharp
// setup the encoder
var encoder = BassEnc.EncodeStart(channel, "lame -r -s 44100 -b 128 -", EncodeFlags.NoHeader, null, IntPtr.Zero);

// start the cast
BassEnc.CastInit(encoder, "server.com:8000", "password", BassEnc.MimeMp3, "name", "url", "genre", null, null, 128, true);
```

Setup PCM encoding on a dummy stream to send pre-encoded MP3 data to a Shoutcast server. 

```csharp
// create a dummy stream to host the encoder
var dummy = Bass.CreateStream(44100, 1, BassFlags.Decode, StreamProcedureType.Dummy);

// setup the PCM encoder
encoder = BassEnc.EncodeStart(dummy, null, EncodeFlags.PCM | EncodeFlags.NoHeader | EncodeFlags.UnlimitedCastDataRate, null, IntPtr.Zero);

// start the cast
BassEnc.CastInit(encoder, "server.com:8000", "password", BassEnc.MimeMp3, "name", "url", "genre", null, null, 128, true);

---

// feed MP3 data to the encoder/caster (repeat periodically)
BassEnc.EncodeWrite(encoder, mp3data, length);
```