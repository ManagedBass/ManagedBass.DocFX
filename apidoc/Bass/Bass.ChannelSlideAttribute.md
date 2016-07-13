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
ChannelAttribute                                      | Description
------------------------------------------------------|-------------
@'ManagedBass.ChannelAttribute.EaxMix'                | EAX wet/dry mix.
@'ManagedBass.ChannelAttribute.Frequency'             | Sample rate.
@'ManagedBass.ChannelAttribute.MusicAmplify'          | Music Amplification level.
@'ManagedBass.ChannelAttribute.BPM'                   | Music BPM.
@'ManagedBass.ChannelAttribute.MusicPanSeparation'    | Music Pan Separation Level.
@'ManagedBass.ChannelAttribute.MusicPositionScaler'   | Music Position Scaler.
@'ManagedBass.ChannelAttribute.MusicSpeed'            | Music Speed.
@'ManagedBass.ChannelAttribute.MusicVolumeChannel'    | A channel volume level.
@'ManagedBass.ChannelAttribute.MusicVolumeGlobal'     | Global music volume level.
@'ManagedBass.ChannelAttribute.MusicVolumeInstrument' | An instrument/sample volume level.
@'ManagedBass.ChannelAttribute.Pan'                   | Panning/balance position.
@'ManagedBass.ChannelAttribute.Volume'                | Volume level.