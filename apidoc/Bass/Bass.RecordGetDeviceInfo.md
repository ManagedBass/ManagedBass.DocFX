---
uid: ManagedBass.Bass.RecordGetDeviceInfo(System.Int32,ManagedBass.DeviceInfo@)
---

**Example**  
Get the total number of devices currently present.

```csharp
var count = 0;
DeviceInfo info;

for (var a = 0; Bass.RecordGetDeviceInfo(a, out info); a++)
    if (info.IsEnabled) // device is enabled
        count++; // count it
```

Find a microphone. 

```
DeviceInfo info;

for (var a = 0; Bass.RecordGetDeviceInfo(a, out info); a++)
    if (info.IsEnabled && info.Type == DeviceType.Microphone)
    {
        // found an enabled microphone
        // do something
    }
```