---
uid: ManagedBass.Bass.RecordStart(System.Int32,System.Int32,ManagedBass.BassFlags,ManagedBass.RecordProcedure,System.IntPtr)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                | Description
-----------------------------------------|-------------
@ManagedBass.BassFlags.Byte        | Use 8-bit resolution. If neither this or the @ManagedBass.BassFlags.Float flags are specified, then the stream is 16-bit.
@ManagedBass.BassFlags.Float       | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
@ManagedBass.BassFlags.RecordPause | Start the recording paused. Use @ManagedBass.Bass.ChannelPlay(System.Int32,System.Boolean) to resume it.