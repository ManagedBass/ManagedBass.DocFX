---
uid: ManagedBass.Bass.PluginGetInfo(System.Int32)
---

**Example**  
List the formats supported by a plugin.

```csharp
// get the plugin info
var info = Bass.PluginGetInfo(plugin);

foreach (var format in info.Formats) 
{
    // display the array of formats...
    Console.WriteLine("Type={0} Name={1} Extensions={2}",
        format.ChannelType,
        format.Name,
        format.FileExtensions);
}
```