---
uid: ManagedBass.Bass.StreamGetFilePosition(System.Int32,ManagedBass.FileStreamPosition)
---

**Examples**  
Get the percentage downloaded of an internet file stream, or the buffer level when streaming in blocks.

```csharp
// file/buffer length
var len = Bass.StreamGetFilePosition(stream, FileStreamPosition.End);

// buffer level
var buf = Bass.StreamGetFilePosition(stream, FileStreamPosition.Buffer);

// percentage of buffer filled
var progress = 100 * buf / len;
```