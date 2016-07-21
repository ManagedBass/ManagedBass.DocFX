# <div class="text-info">ManagedBass</div>

---------------
Free Open-Source .Net Wrapper for un4seen [BASS](http://un4seen.com/bass.html) including Managed Types.  
**ManagedBass** depends on **ManagedBass.PInvoke**.

## Why?
The existing BASS.NET wrapper is closed-source and needs to be licensed for commercial use.  
ManagedBass is free and open-souce.  
Also, it tries to make the API friendly to a .NET developer.

# ManagedBass.PInvoke
.Net interop library for un4seen [BASS](http://un4seen.com/bass.html) audio library.

> If you just need the basic functionality of getting BASS API wrapped, always prefer **ManagedBass.PInvoke** because it is much more API stable.

Lots of <xref:Samples> are available on the [GitHub Organization](https://github.com/ManagedBass) to get you started.

# Distribution
ManagedBass.PInvoke is distributed as a NuGet package.
Also, being open-source you can build it yourself (requires Visual Studio 2015 with Xamarin).
The Linux part needs to be built manually in any case since there is no NuGet support for Linux as of June 2016.

The following platforms are supported:
- Windows (.Net 4.5)
- Linux (Mono)
- Mac (Mono/Xamarin.Mac)
- Android (Xamarin.Android)
- iOS (Xamarin.iOS)

The iOS part has been fixed to work fine from v0.2.1.

Also, there is a Portable Class Library which could target all the above platforms and WindowsStore (except iOS).
> NOTE: Some issues have been reported with .Net Native.

[Bait and Switch](http://log.paulbetts.org/the-bait-and-switch-pcl-trick/) PCL trick is employed through the NuGet package.

The native BASS libraries are NOT included and need to be downloaded separately as per platform and processor architecture from http://un4seen.com.  
Place the native BASS libraries in the project output directory.  

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

See the OS specific guides in **Articles** section for more info.