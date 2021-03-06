---
uid: ManagedBass.Bass.CreateStream(System.Int32,System.Int32,ManagedBass.BassFlags,ManagedBass.StreamProcedure,System.IntPtr)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                   | Description
--------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Byte>           | Use 8-bit resolution. If neither this or the <xref:ManagedBass.BassFlags.Float> flags are specified, then the stream is 16-bit.
<xref:ManagedBass.BassFlags.Float>          | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.SoftwareMixing> | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>         | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.FX>             | Enable the old implementation of DirectX 8 effects. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.
<xref:ManagedBass.BassFlags.AutoFree>       | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>         | Decode the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and Speaker Assignment Flags cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.  
SPEAKER                                     | Speaker Assignment Flags. These flags have no effect when the stream is more than stereo.

---
uid: ManagedBass.Bass.CreateStream(System.Int32,System.Int32,ManagedBass.BassFlags,ManagedBass.StreamProcedureType)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                   | Description
--------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Byte>           | Use 8-bit resolution. If neither this or the <xref:ManagedBass.BassFlags.Float> flags are specified, then the stream is 16-bit.
<xref:ManagedBass.BassFlags.Float>          | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.SoftwareMixing> | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>         | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.FX>             | Enable the old implementation of DirectX 8 effects. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.  
<xref:ManagedBass.BassFlags.AutoFree>       | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>         | Decode the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and Speaker Assignment Flags cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.  
SPEAKER                                     | Speaker Assignment Flags. These flags have no effect when the stream is more than stereo.

---
uid: ManagedBass.Bass.CreateStream(System.String,System.Int64,System.Int64,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                   | Description
--------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Float>          | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.Mono>           | Decode/play the stream (MP3/MP2/MP1 only) in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if <xref:ManagedBass.DeviceInitFlags.Mono> was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>.
<xref:ManagedBass.BassFlags.SoftwareMixing> | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>         | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.Loop>           | Loop the file. This flag can be toggled at any time using <xref:ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)>.
<xref:ManagedBass.BassFlags.FX>             | Enable the old implementation of DirectX 8 effects. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.  
<xref:ManagedBass.BassFlags.Prescan>        | Pre-scan the file for accurate seek points and length reading in MP3/MP2/MP1 files and chained OGG files (has no effect on normal OGG files). This can significantly increase the time taken to create the stream, particularly with a large file and/or slow storage media. <xref:ManagedBass.Bass.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)> can be used to scan the file after stream creation instead.  
<xref:ManagedBass.BassFlags.AutoFree>       | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>         | Decode the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and Speaker Assignment Flags cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.  
SPEAKER                                     | Speaker Assignment Flags. These flags have no effect when the stream is more than stereo.
<xref:ManagedBass.BassFlags.AsyncFile>      | Read the file asynchronously. When enabled, the file is read and buffered in parallel with the decoding, to reduce the chances of the decoder being affected by I/O delays. This can be particularly useful with slow storage media and/or low latency output. The size of the file buffer is determined by the <xref:ManagedBass.Bass.AsyncFileBufferLength> config option.

---
uid: ManagedBass.Bass.CreateStream(System.Byte[],System.Int64,System.Int64,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                   | Description
--------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Float>          | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.Mono>           | Decode/play the stream (MP3/MP2/MP1 only) in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if <xref:ManagedBass.DeviceInitFlags.Mono> was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>.
<xref:ManagedBass.BassFlags.SoftwareMixing> | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>         | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.Loop>           | Loop the file. This flag can be toggled at any time using <xref:ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)>.
<xref:ManagedBass.BassFlags.FX>             | Enable the old implementation of DirectX 8 effects. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.  
<xref:ManagedBass.BassFlags.Prescan>        | Pre-scan the file for accurate seek points and length reading in MP3/MP2/MP1 files and chained OGG files (has no effect on normal OGG files). This can significantly increase the time taken to create the stream, particularly with a large file and/or slow storage media. <xref:ManagedBass.Bass.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)> can be used to scan the file after stream creation instead.  
<xref:ManagedBass.BassFlags.AutoFree>       | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>         | Decode the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.Byte[],System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and Speaker Assignment Flags cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.  
SPEAKER                                     | Speaker Assignment Flags. These flags have no effect when the stream is more than stereo.

---
uid: ManagedBass.Bass.CreateStream(System.IntPtr,System.Int64,System.Int64,ManagedBass.BassFlags)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                   | Description
--------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Float>          | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.Mono>           | Decode/play the stream (MP3/MP2/MP1 only) in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if <xref:ManagedBass.DeviceInitFlags.Mono> was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>.
<xref:ManagedBass.BassFlags.SoftwareMixing> | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>         | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.Loop>           | Loop the file. This flag can be toggled at any time using <xref:ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)>.
<xref:ManagedBass.BassFlags.FX>             | Enable the old implementation of DirectX 8 effects. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.  
<xref:ManagedBass.BassFlags.Prescan>        | Pre-scan the file for accurate seek points and length reading in MP3/MP2/MP1 files and chained OGG files (has no effect on normal OGG files). This can significantly increase the time taken to create the stream, particularly with a large file and/or slow storage media. <xref:ManagedBass.Bass.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)> can be used to scan the file after stream creation instead.  
<xref:ManagedBass.BassFlags.AutoFree>       | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>         | Decode the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and Speaker Assignment Flags cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.  
SPEAKER                                     | Speaker Assignment Flags. These flags have no effect when the stream is more than stereo.

---
uid: ManagedBass.Bass.CreateStream(System.String,System.Int32,ManagedBass.BassFlags,ManagedBass.DownloadProcedure,System.IntPtr)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                         | Description
--------------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Float>                | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.Mono>                 | Decode/play the stream (MP3/MP2/MP1 only) in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if <xref:ManagedBass.DeviceInitFlags.Mono> was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>.
<xref:ManagedBass.BassFlags.SoftwareMixing>       | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>               | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.Loop>                 | Loop the file. This flag can be toggled at any time using <xref:ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)>.
<xref:ManagedBass.BassFlags.FX>                   | Enable the old implementation of DirectX 8 effects. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.  
<xref:ManagedBass.BassFlags.RestrictDownloadRate> | Restrict the download rate of the file to the rate required to sustain playback. If this flag is not used, then the file will be downloaded as quickly as the user's internet connection allows.
<xref:ManagedBass.BassFlags.StreamDownloadBlocks> | Download and play the file in smaller chunks, instead of downloading the entire file to memory. Uses a lot less memory than otherwise, but it is not possible to seek or loop the stream; once it has ended, the file must be opened again to play it again. This flag will automatically be applied when the file length is unknown, for example with Shout/Icecast streams. This flag also has the effect of restricting the download rate.
<xref:ManagedBass.BassFlags.StreamStatus>         | Pass status info (HTTP/ICY tags) from the server to the <xref:ManagedBass.DownloadProcedure> callback during connection. This can be useful to determine the reason for a failure.
<xref:ManagedBass.BassFlags.AutoFree>             | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>               | Decode the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and Speaker Assignment Flags cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.  
SPEAKER                                           | Speaker Assignment Flags. These flags have no effect when the stream is more than stereo.

---
uid: ManagedBass.Bass.CreateStream(ManagedBass.StreamSystem,ManagedBass.BassFlags,ManagedBass.FileProcedures,System.IntPtr)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

BassFlags                                         | Description
--------------------------------------------------|-------------
<xref:ManagedBass.BassFlags.Float>                | Use 32-bit floating-point sample data. Not really recommended for samples as it (at least) doubles the memory usage.
<xref:ManagedBass.BassFlags.Mono>                 | Decode/play the stream (MP3/MP2/MP1 only) in mono, reducing the CPU usage (if it was originally stereo). This flag is automatically applied if <xref:ManagedBass.DeviceInitFlags.Mono> was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>.
<xref:ManagedBass.BassFlags.SoftwareMixing>       | Force the sample to not use hardware mixing.
<xref:ManagedBass.BassFlags.Bass3D>               | Enable 3D functionality. This requires that the <xref:ManagedBass.DeviceInitFlags.Device3D> flag was specified when calling <xref:ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)>, and the sample must be mono (Channels = 1).
<xref:ManagedBass.BassFlags.Loop>                 | Loop the file. This flag can be toggled at any time using <xref:ManagedBass.Bass.ChannelFlags(System.Int32,ManagedBass.BassFlags,ManagedBass.BassFlags)>.
<xref:ManagedBass.BassFlags.FX>                   | Enable the old implementation of DirectX 8 effects. Use <xref:ManagedBass.Bass.ChannelSetFX(System.Int32,ManagedBass.EffectType,System.Int32)> to add effects to the stream.
<xref:ManagedBass.BassFlags.Prescan>              | Pre-scan the file for accurate seek points and length reading in MP3/MP2/MP1 files and chained OGG files (has no effect on normal OGG files). This can significantly increase the time taken to create the stream, particularly with a large file and/or slow storage media. <xref:ManagedBass.Bass.ChannelSetPosition(System.Int32,System.Int64,ManagedBass.PositionFlags)> can be used to scan the file after stream creation instead.
<xref:ManagedBass.BassFlags.RestrictDownloadRate> | Restrict the download rate of the file to the rate required to sustain playback. If this flag is not used, then the file will be downloaded as quickly as the user's internet connection allows.
<xref:ManagedBass.BassFlags.StreamDownloadBlocks> | Download and play the file in smaller chunks, instead of downloading the entire file to memory. Uses a lot less memory than otherwise, but it is not possible to seek or loop the stream; once it has ended, the file must be opened again to play it again. This flag will automatically be applied when the file length is unknown, for example with Shout/Icecast streams. This flag also has the effect of restricting the download rate.
<xref:ManagedBass.BassFlags.AutoFree>             | Automatically free the stream when playback ends.
<xref:ManagedBass.BassFlags.Decode>               | Decode the sample data, without playing it. Use <xref:ManagedBass.Bass.ChannelGetData(System.Int32,System.IntPtr,System.Int32)> to retrieve decoded sample data. The <xref:ManagedBass.BassFlags.Bass3D>, <xref:ManagedBass.BassFlags.AutoFree> and Speaker Assignment Flags cannot be used together with this flag. The <xref:ManagedBass.BassFlags.SoftwareMixing> and <xref:ManagedBass.BassFlags.FX> flags are also ignored.  
SPEAKER                                           | Speaker Assignment Flags. These flags have no effect when the stream is more than stereo.
<xref:ManagedBass.BassFlags.AsyncFile>            | Read the file asynchronously. When enabled, the file is read and buffered in parallel with the decoding, to reduce the chances of the decoder being affected by I/O delays. This can be particularly useful with slow storage media and/or low latency output. The size of the file buffer is determined by the <xref:ManagedBass.Bass.AsyncFileBufferLength> config option.