# Getting Started - iOS
> This page is in the process of being written. Information here may be inaccurate or inadequate.

1. Install the NuGet package

   ```powershell
   Install-Package ManagedBass.PInvoke
   ```

2. Download bass libraries for iOS from [here](http://www.un4seen.com/forum/?topic=10910.0) and place in project directory.

4. Set `Link Behaviour` = **Link All**

5. Set mtouch arguments to:
```
-gcc_flags "-L$(ProjectDir) -lbass -framework CFNetwork -framework AudioToolbox -framework SystemConfiguration -framework Accelerate -force_load $(ProjectDir)/libbass.a"
```