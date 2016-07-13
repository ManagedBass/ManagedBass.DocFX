---
uid: SpeakerFlags
---

# Speaker Assignment Flags
Most soundcards these days are capable of more than plain stereo output.
To take advantage of this, HSTREAM and HMUSIC channels can be assigned to specific speakers.
For example, channels can be played on the front or rear speakers to effectively have 2 separate stereo outputs from the one device.
A 3rd stereo output is available on 5.1 cards, and a 4th on 7.1 cards.
The @'ManagedBass.BassInfo.SpeakerCount' member of the @'ManagedBass.BassInfo' structure can be used to check how many speakers are available.

## Stereo speaker assignment flags
BassFlags                                  | Definition
-------------------------------------------|------------
@'ManagedBass.BassFlags.SpeakerFront'      | The front speakers.
@'ManagedBass.BassFlags.SpeakerRear'       | The rear/side speakers.
@'ManagedBass.BassFlags.SpeakerCenterLFE'  | The center and LFE (subwoofer) speakers in a 5.1 setup.
@'ManagedBass.BassFlags.SpeakerRearCenter' | The rear center speakers in a 7.1 setup.

## Mono speaker assignment flags
BassFlag                                        | Definition
------------------------------------------------|------------
@'ManagedBass.BassFlags.SpeakerFrontLeft'       | The left-front speaker.
@'ManagedBass.BassFlags.SpeakerFrontRight'      | The right-front speaker.
@'ManagedBass.BassFlags.SpeakerRearLeft'        | The left-rear/side speaker.
@'ManagedBass.BassFlags.SpeakerRearRight'       | The right-rear/side speaker.
@'ManagedBass.BassFlags.SpeakerCenter'          | The center speaker in a 5.1 speaker setup.
@'ManagedBass.BassFlags.SpeakerLFE'             | The LFE (subwoofer) speaker in a 5.1 setup.
@'ManagedBass.BassFlags.SpeakerRearCenterLeft'  | The left-rear center speaker in a 7.1 setup.
@'ManagedBass.BassFlags.SpeakerRearCenterRight' | The right-rear center speaker in a 7.1 setup.

As well as these defined speaker location flags, there is the @'ManagedBass.Extensions.SpeakerN(System.Int32)' function that can be used to access the extra speakers of soundcards that have more than 8 speakers, where n is the n'th pair of speakers (up to a maximum of 15).
For example, `Extensions.SpeakerN(1)` is equivalent to @'ManagedBass.BassFlags.SpeakerFront'.
To use a speaker in mono, add the @'ManagedBass.BassFlags.SpeakerLeft' or @'ManagedBass.BassFlags.SpeakerRight' flags.

The stereo speaker assignment flags can also be used with mono channels, so that, for example, a mono channel can be played on both the front speakers.
But mono speaker assignment flags cannot be used with stereo channels, so, for example, it is not possible to play a stereo channel on just the center speaker.
