---
uid: ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)
---

**Example**  
Perform a 1024 sample FFT on a channel and list the result.

```csharp
var fft = new float[512]; // fft data buffer

Bass.ChannelGetData(channel, fft, (int)DataFlags.FFT1024);

for (int a = 0; a < 512; a++)
    Console.WriteLine("{0}: {1}", a, fft[a]);
```

Perform a 1024 sample FFT on a channel and list the complex result. 

```csharp
var fft = new float[2048]; // fft data buffer

Bass.ChannelGetData(channel, fft, (int)(DataFlags.FFT1024 | DataFlags.FFTComplex));

for (int a = 0; a < 1024; a++)
    Console.WriteLine("{0}: ({1}, {2})", a, fft[a * 2], fft[a * 2 + 1]);
```
