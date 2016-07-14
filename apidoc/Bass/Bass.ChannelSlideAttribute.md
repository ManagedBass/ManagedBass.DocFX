---
uid: ManagedBass.Bass.ChannelSlideAttribute(System.Int32,ManagedBass.ChannelAttribute,System.Single,System.Int32)
---

**Example**  
Fadeout a channel's volume over a period of 1 second.

```csharp
Bass.ChannelSlideAttribute(channel, ChannelAttribute.Volume, 0, 1000);
```

---
uid: ManagedBass.Bass.ChannelSlideAttribute(System.Int32,ManagedBass.ChannelAttribute,System.Single,System.Int32)
syntax:
  parameters:
    - id: Flags
      description: *content
---

The attribute to slide the value of... one of the following.
ChannelAttribute                                          | Description
----------------------------------------------------------|-------------
<xref:ManagedBass.ChannelAttribute.EaxMix>                | EAX wet/dry mix.
<xref:ManagedBass.ChannelAttribute.Frequency>             | Sample rate.
<xref:ManagedBass.ChannelAttribute.MusicAmplify>          | Music Amplification level.
<xref:ManagedBass.ChannelAttribute.BPM>                   | Music BPM.
<xref:ManagedBass.ChannelAttribute.MusicPanSeparation>    | Music Pan Separation Level.
<xref:ManagedBass.ChannelAttribute.MusicPositionScaler>   | Music Position Scaler.
<xref:ManagedBass.ChannelAttribute.MusicSpeed>            | Music Speed.
<xref:ManagedBass.ChannelAttribute.MusicVolumeChannel>    | A channel volume level.
<xref:ManagedBass.ChannelAttribute.MusicVolumeGlobal>     | Global music volume level.
<xref:ManagedBass.ChannelAttribute.MusicVolumeInstrument> | An instrument/sample volume level.
<xref:ManagedBass.ChannelAttribute.Pan>                   | Panning/balance position.
<xref:ManagedBass.ChannelAttribute.Volume>                | Volume level.