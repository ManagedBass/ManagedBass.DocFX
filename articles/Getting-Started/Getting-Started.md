# Getting Started
Here are some guides to get you started with ManagedBass.PInvoke.

> It is assumed that you are familiar with your IDE (whether Xamarin Studio or Visual Studio) and the NuGet package manager.

---
The general steps are:

1. Install the NuGet package, in the Package Manager Console type: (you may also use the GUI)
   ```powershell
   Install-Package ManagedBass.PInvoke
   ```

2. Download bass libraries as per the platform from [here](http://www.un4seen.com/bass.html).

3. Copy the libraries to build output directory (typically `bin\Release` or `bin\Debug`) taking care of processor architecture (x86/x64/ARM etc.).

---

> A software containing an Mp3 decoder needs to be licensed for commercial use.
  You can use the Mp3-free version of BASS to avoid that.
  This version makes use of the OS's already licensed decoder.

---

See the OS specific guides in sidebar for more info.