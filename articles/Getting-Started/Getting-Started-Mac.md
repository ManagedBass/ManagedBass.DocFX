# Getting Started - Xamarin.Mac

1. Install the NuGet package

   ```powershell
   Install-Package ManagedBass.PInvoke
   ```

2. Download bass libraries for Mac from [here](http://www.un4seen.com/bass.html).

3. Add `libbass.dylib` as Dynamic **NativeReference**.

3. Include the bass libraries in your project for the architectures you want to support in respective folders: `lib\<Architecture>`.
   - armeabi - `lib\armebabi\libbass.so`
   - armeabi-v7a - `lib\armeabi-v7a\libbass.so`
   - x86 - `lib\x86\libbass.so`

4. Repeat the previous step for any addons you require.
