# What is a Channel?
A "Channel" can be a sample playback channel (HCHANNEL), a sample stream (HSTREAM), a MOD music (HMUSIC), or a recording (HRECORD).
Each "Channel" function can be used with one or more of these channel types.

## The types of channel
Type     | Returned by
---------|--------------
HCHANNEL | <xref:ManagedBass.Bass.SampleGetChannel(System.Int32,System.Boolean)>
HSTREAM  | <xref:ManagedBass.Bass>.CreateStream and add-on provided functions
HMUSIC   | <xref:ManagedBass.Bass>.MusicLoad
HRECORD  | <xref:ManagedBass.Bass.RecordStart(System.Int32,System.Int32,ManagedBass.BassFlags,ManagedBass.RecordProcedure,System.IntPtr)>

A sample stream (HSTREAM) or MOD music (HMUSIC) that has been created with the <xref:ManagedBass.BassFlags.Decode> flag is sometimes referred to as a "decoding channel".
