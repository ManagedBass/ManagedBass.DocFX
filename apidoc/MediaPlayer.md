---
uid: ManagedBass.MediaPlayer
---

### What is MediaPlayer?
A **MediaPlayer** associates properties to itself instead of a **Channel** (as done by BASS).

This allows usage like a typical Music Player where you Load a Music, Play it, Load Another, Play it, and so on... while the properties or effects you set on it persist.

You load different music files using the <xref:ManagedBass.MediaPlayer.Load(System.String)> method.
Every **Property**/**Effect**/**DSP** you set on a **MediaPlayer** persists beyond subsequent loads.

They are appropriate for **Binding** to the UI due to implementation of **INotifyPropertyChanged** interface.

<xref:ManagedBass.Fx.MediaPlayerFX> adds features from <xref:ManagedBass.Fx.BassFx>: **Tempo**, **Pitch** and **Reverse**.

### Using MediaPlayer on UWP (NOT VERIFIED)
UWP requires that files be loaded asynchronously.

You should use a type inherited from MediaPlayer.

```csharp
namespace ManagedBass
{
    public class MediaPlayerUWP : MediaPlayer
    {
        public async void LoadAsync(string FileName)
        {
            // Request permission to access file.
            Windows.Storage.AccessCache.StorageApplicationPermissions.FutureAccessList.Add(FileName);

            // Load file asynchronously.
            await Task.Run(() => Load(FileName));
        }
    }
}
```