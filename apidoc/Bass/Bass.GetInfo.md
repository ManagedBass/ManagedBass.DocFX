---
uid: ManagedBass.Bass.GetInfo(ManagedBass.BassInfo@)
---

**Example**  
Check if the current device can have multiple inputs enabled.

```csharp
RecordInfo info;
Bass.RecordGetInfo(out info);

if (!info.SingleInput)
{
    // device does allow multiple inputs to be enabled
}
```