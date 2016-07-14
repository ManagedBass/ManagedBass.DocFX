---
uid: ManagedBass.Mix.BassMix.MixerAddChannel(System.Int32,System.Int32,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

Any combination of these flags.

BassFlags                                  | Description
-------------------------------------------|-------------
<xref:ManagedBass.BassFlags.MixerMatrix>   | Creates a channel matrix, allowing the source's channels to be sent to any of the mixer output channels, at any levels. The matrix can be retrieved and modified via the <xref:ManagedBass.Mix.BassMix.ChannelGetMatrix(System.Int32,System.Single[0:,0:])> and <xref:ManagedBass.Mix.BassMix.ChannelSetMatrix(System.Int32,System.Single[0:,0:])> functions. The matrix will initially contain a one-to-one mapping, eg. left out = left in, right out = right in, etc.
<xref:ManagedBass.BassFlags.MixerDownMix>  | If the source has more channels than the mixer output (and that is stereo or mono), then matrix mixing is enabled and initialized with the appropriate downmixing matrix. Note the source data is assumed to follow the standard channel ordering, as described in the <xref:ManagedBass.StreamProcedure> documentation.
<xref:ManagedBass.BassFlags.MixerBuffer>   | Buffer the sample data, for use by <xref:ManagedBass.Mix.BassMix.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> and <xref:ManagedBass.Mix.BassMix.ChannelGetLevel(System.Int32)> and <xref:ManagedBass.Mix.BassMix.ChannelGetLevel(System.Int32,System.Single[],System.Single,ManagedBass.LevelRetrievalFlags)>. This increases memory requirements, so should not be enabled needlessly. The size of the buffer can be controlled via the <xref:ManagedBass.Mix.BassMix.MixerBufferLength> config option.
<xref:ManagedBass.BassFlags.MixerLimit>    | Limit the mixer processing to the amount of data available from this source, while the source is active (not ended). If the source stalls, then the mixer will too, rather than continuing to mix other sources, as it would normally do. This flag can only be applied to one source per mixer, so it will automatically be removed from any other source of the same mixer.
<xref:ManagedBass.BassFlags.MixerNoRampin> | Do not ramp-in the start, including after seeking (<xref:ManagedBass.Mix.BassMix.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)>). This is useful for gap-less playback, where a source channel is intended to seamlessly follow another. This does not affect volume and pan changes, which are always ramped.
<xref:ManagedBass.BassFlags.MixerPause>    | Pause processing of the source. Use <xref:ManagedBass.Mix.BassMix.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)> to resume processing.
<xref:ManagedBass.BassFlags.AutoFree>      | Automatically free the source channel when it ends. This allows you to add a channel to a mixer and forget about it, as it will automatically be freed when it has reached the end, or when the source is removed from the mixer or when the mixer is freed.
SPEAKER                                    | <xref:SpeakerFlags>. If matrix mixing is enabled then the matrix will be initialized to place the source on the requested speaker(s), with downmixing also applied if the <xref:ManagedBass.BassFlags.MixerDownMix> flag is specified. The <xref:ManagedBass.DeviceInitFlags.NoSpeakerAssignment> flag applied in <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)> has effect here.

---
uid: ManagedBass.Mix.BassMix.MixerAddChannel(System.Int32,System.Int32,ManagedBass.BassFlags,System.Int64,System.Int64)
syntax:
  parameters:
    - id: Flags
      description: *content
---

Any combination of these flags.

BassFlags                                  | Description
-------------------------------------------|-------------
<xref:ManagedBass.BassFlags.MixerMatrix>   | Creates a channel matrix, allowing the source's channels to be sent to any of the mixer output channels, at any levels. The matrix can be retrieved and modified via the <xref:ManagedBass.Mix.BassMix.ChannelGetMatrix(System.Int32,System.Single[0:,0:])> and <xref:ManagedBass.Mix.BassMix.ChannelSetMatrix(System.Int32,System.Single[0:,0:])> functions. The matrix will initially contain a one-to-one mapping, eg. left out = left in, right out = right in, etc.
<xref:ManagedBass.BassFlags.MixerDownMix>  | If the source has more channels than the mixer output (and that is stereo or mono), then matrix mixing is enabled and initialized with the appropriate downmixing matrix. Note the source data is assumed to follow the standard channel ordering, as described in the <xref:ManagedBass.StreamProcedure> documentation.
<xref:ManagedBass.BassFlags.MixerBuffer>   | Buffer the sample data, for use by <xref:ManagedBass.Mix.BassMix.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> and <xref:ManagedBass.Mix.BassMix.ChannelGetLevel(System.Int32)> and <xref:ManagedBass.Mix.BassMix.ChannelGetLevel(System.Int32,System.Single[],System.Single,ManagedBass.LevelRetrievalFlags)>. This increases memory requirements, so should not be enabled needlessly. The size of the buffer can be controlled via the <xref:ManagedBass.Mix.BassMix.MixerBufferLength> config option.
<xref:ManagedBass.BassFlags.MixerLimit>    | Limit the mixer processing to the amount of data available from this source, while the source is active (not ended). If the source stalls, then the mixer will too, rather than continuing to mix other sources, as it would normally do. This flag can only be applied to one source per mixer, so it will automatically be removed from any other source of the same mixer.
<xref:ManagedBass.BassFlags.MixerNoRampin> | Do not ramp-in the start, including after seeking (<xref:ManagedBass.Mix.BassMix.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)>). This is useful for gap-less playback, where a source channel is intended to seamlessly follow another. This does not affect volume and pan changes, which are always ramped.
<xref:ManagedBass.BassFlags.MixerPause>    | Pause processing of the source. Use <xref:ManagedBass.Mix.BassMix.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)> to resume processing.
<xref:ManagedBass.BassFlags.AutoFree>      | Automatically free the source channel when it ends. This allows you to add a channel to a mixer and forget about it, as it will automatically be freed when it has reached the end, or when the source is removed from the mixer or when the mixer is freed.
SPEAKER                                    | <xref:SpeakerFlags>. If matrix mixing is enabled then the matrix will be initialized to place the source on the requested speaker(s), with downmixing also applied if the <xref:ManagedBass.BassFlags.MixerDownMix> flag is specified. The <xref:ManagedBass.DeviceInitFlags.NoSpeakerAssignment> flag applied in <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)> has effect here.

---
uid: ManagedBass.Mix.BassMix.MixerAddChannel(System.Int32,System.Int32,ManagedBass.BassFlags,System.Int64,System.Int64)
---

**Example**  
Add a channel to a mixer, delaying the start by 1 second and limiting the duration to 2 seconds.

```csharp
var start = Bass.ChannelSeconds2Bytes(mixer, 1); // delay
var length = BASS_ChannelSeconds2Bytes(mixer, 2); // duration

// add the channel
BassMix.MixerAddChannel(mixer, channel, 0, start, length);
```