# AddOns
The following AddOns (excluding Plugins) are supported:
- <xref:ManagedBass.Asio.BassAsio>
- <xref:ManagedBass.Cd.BassCd>
- <xref:ManagedBass.Enc.BassEnc>
- <xref:ManagedBass.Fx.BassFx>
- <xref:ManagedBass.Midi.BassMidi>
- <xref:ManagedBass.Mix.BassMix>
- <xref:ManagedBass.Wasapi.BassWasapi>
- <xref:ManagedBass.Winamp.BassWinamp>
- <xref:ManagedBass.Wma.BassWma>

# Plugins
A Plugin plugs into standard BASS functions like sample or stream creation to provide support for more audio formats.

BASS has built in support for various audio codecs like MPEG, OGG, WAV, AIFF, etc.

A Plugin is loaded using <xref:ManagedBass.Bass.PluginLoad(System.String)> method and unloaded using <xref:ManagedBass.Bass.PluginFree(System.Int32)>.

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

# Currently not wrapped
Will only be wrapped if someone contributes
- Bass Tags
- Bass ZXTune
- Bass WADSP
- Bass VST
- Bass SFX
- Bass WA
- Bass DShow
- Bass XMMS