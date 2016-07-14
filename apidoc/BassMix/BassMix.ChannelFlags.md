---
uid: ManagedBass.Mix.BassMix.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags.

BassFlags                                  | Description
-------------------------------------------|-------------
<xref:ManagedBass.BassFlags.MixerBuffer>   | Buffer the sample data, for use by <xref:ManagedBass.Mix.BassMix.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> and <xref:ManagedBass.Mix.BassMix.ChannelGetLevel(System.Int32)> and <xref:ManagedBass.Mix.BassMix.ChannelGetLevel(System.Int32,System.Single[],System.Single,ManagedBass.LevelRetrievalFlags)>.
<xref:ManagedBass.BassFlags.MixerLimit>    | Limit the mixer processing to the amount of data available from this source. This flag can only be applied to one source per mixer, so it will automatically be removed from any other source of the same mixer.
<xref:ManagedBass.BassFlags.MixerNoRampin> | Do not ramp-in the start, including after seeking (<xref:ManagedBass.Mix.BassMix.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)>).
<xref:ManagedBass.BassFlags.MixerPause>    | Pause processing of the source.
<xref:ManagedBass.BassFlags.AutoFree>      | Automatically free the source channel when it ends.
SPEAKER                                    | <xref:SpeakerFlags>. If matrix mixing is enabled, then the matrix will be modified to place the source on the requested speaker(s).