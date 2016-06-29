---
uid: ManagedBass.Bass.Set3DFactors(System.Single,System.Single,System.Single)
---

**Example**  
Use yards as the distance measurement unit, while leaving the current rolloff and doppler factors untouched.

```csharp
Bass.Set3DFactors(0.9144f, -1, -1);
Bass.Apply3D(); // apply the change
```