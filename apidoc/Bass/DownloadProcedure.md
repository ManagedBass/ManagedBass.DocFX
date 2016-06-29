---
uid: ManagedBass.DownloadProcedure
---

**Extensions**  
Stream an MP3 file, and save a local copy.

```csharp
var file = new FileStream("afile.mp3", FileMode.OpenOrCreate, FileAccess.Write, FileShare.Read);
byte[] _buffer;

...

void MyDownloadProc(IntPtr buffer, int length, IntPtr user)
{
    if (buffer == IntPtr.Zero)
    {
        // finished downloading
        file.Close();
        return;
    }

    if (_buffer == null || _buffer.Length < length)
        _buffer = new byte[length];

    Marshal.Copy(buffer, _buffer, 0, length);

    File.Write(_buffer, 0, length);
}

...

var stream = Bass.CreateStream("http://www.asite.com/afile.mp3", 0, 0, MyDownloadProc, IntPtr.Zero);
```