# AddOns
The following AddOns (excluding Plugins) are supported:
- BassAsio
- BassCd
- BassEnc
- BassFx
- BassMidi
- BassMix
- BassWasapi
- BassWinamp
- BassWma

# Plugins
A Plugin plugs into standard BASS functions like sample or stream creation to provide support for more audio formats.

BASS has built in support for various audio codecs like MPEG, OGG, WAV, AIFF, etc.

A Plugin is loaded using @ManagedBass.Bass.PluginLoad(System.String) method and unloaded using @ManagedBass.Bass.PluginFree(System.Int32).

The following AddOns support the BASS Plugin system.
- BassAac
- BassAc3
- BassAdx
- BassAix
- BassAlac
- BassApe
- BassCd
- BassDsd
- BassFlac
- BassHls
- BassMidi
- BassMpc
- BassOfr
- BassOpus
- BassSpx
- BassTta
- BassWma
- BassWv