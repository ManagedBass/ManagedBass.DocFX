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
<xref:ManagedBass.BassFlags.Byte>        | Use 8-bit resolution. If neither this or the <xref:ManagedBass.BassFlags.Float> flags are specified, then the stream is 16-bit.
<xref:ManagedBass.BassFlags.Float>       | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.RecordPause> | Start the recording paused. Use <xref:ManagedBass.Bass.ChannelPlay(System.Int32,System.Boolean)> to resume it.