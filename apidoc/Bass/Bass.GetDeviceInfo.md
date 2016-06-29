---
uid: ManagedBass.Bass.GetDeviceInfo(System.Int32,ManagedBass.DeviceInfo@)
---

**Example**  
Get the total number of devices currently present.

```csharp
var count = 0;
DeviceInfo info;

for (var a = 0; Bass.GetDeviceInfo(a, out info); a++)
    if (info.IsEnabled) // device is enabled
        count++; // count it
```