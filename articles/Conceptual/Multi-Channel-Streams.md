# Multi-Channel Streams
Most soundcards these days are capable of more than plain stereo output.
To take advantage of this, as well as the speaker assignment flags, BASS has support for multi-channel user streams, and also has built-in support for multi-channel OGG, WAV and AIFF files.
Add-ons provide support for other multi-channel formats.

When a stream having more channels than there are speakers is played, the extra channels will generally not be heard, but may be heard on other speakers instead in some cases on Windows.
The @ManagedBass.ChannelInfo.Channels member of the @ManagedBass.ChannelInfo structure can be used to check how many channels a stream has, and the @ManagedBass.BassInfo.SpeakerCount member of the @ManagedBass.BassInfo structure can be used to check how many speakers there are.

**Platform-specific**  
On Windows prior to Vista, multi-channel streams require the output device to have WDM drivers installed.
