---
uid: ManagedBass.Bass.Init(System.Int32,System.Int32,ManagedBass.DeviceInitFlags,System.IntPtr,System.IntPtr)
syntax:
  parameters:
    - id: Flags
      description: *content
---

A combination of these flags:  

DeviceInitFlags                                      | Description
-----------------------------------------------------|-------------
@ManagedBass.DeviceInitFlags.Byte                    | Use 8-bit resolution, else 16-bit.
@ManagedBass.DeviceInitFlags.Mono                    | Mono output.
@ManagedBass.DeviceInitFlags.Default                 | Limit the output to stereo, saving some CPU if the device has more speakers available.
@ManagedBass.DeviceInitFlags.Device3D                | Enable 3D functionality.
@ManagedBass.DeviceInitFlags.Latency                 | Calculates the latency of the device, that is the delay between requesting a sound to play and it actually being heard. A recommended minimum buffer length is also calculated. Both values are retrievable in the @ManagedBass.BassInfo structure. These calculations can increase the time taken by this function by 1-3 seconds.
@ManagedBass.DeviceInitFlags.CPSpeakers              | Use the Windows control panel setting to detect the number of speakers. Soundcards generally have their own control panel to set the speaker config, so the Windows control panel setting may not be accurate unless it matches that. This flag has no effect on Vista, as the speakers are already accurately detected.
@ManagedBass.DeviceInitFlags.ForcedSpeakerAssignment | Force the enabling of speaker assignment. With some devices/drivers, the number of speakers BASS detects may be 2, when the device in fact supports more than 2 speakers. This flag forces the enabling of assignment to 8 possible speakers. This flag has no effect with non-WDM drivers.
@ManagedBass.DeviceInitFlags.NoSpeakerAssignment     | Ignore speaker arrangement. This flag tells BASS not to make any special consideration for speaker arrangements when using the @SpeakerFlags, eg. swapping the CENLFE and REAR speaker channels in 5/7.1 speaker output. This flag should be used with plain multi-channel (rather than 5/7.1) devices.
@ManagedBass.DeviceInitFlags.Frequency               | Set the device's output rate to Frequency, otherwise leave it as it is.
