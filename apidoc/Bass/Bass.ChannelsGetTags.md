---
uid: ManagedBass.Bass.ChannelGetTags(System.Int32,ManagedBass.TagType)
---

**Examples**  
List an OGG stream's comments.

```csharp
// get a pointer to the 1st comment
var comments = Bass.ChannelGetTags(channel, TagType.OGG);

if (comments != IntPtr.Zero)
{
    foreach (var comment in Extensions.ExtractMultiStringAnsi(comments))
        Console.WriteLine(comment);
}
```

List a MOD music's samples. 

```csharp
IntPtr ptr;
int n = 0;

while ((ptr = Bass.ChannelGetTags(channel, TagType.MusicSample + n)) != IntPtr.Zero)
{
    // display the sample text
    Console.WriteLine("sample {0} = {1}", n + 1, text);

    ++n; // move on to next sample
}
```