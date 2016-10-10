---
uid: ManagedBass.BassTags.Read(System.Int32,System.String)
syntax:
  parameters:
    - id: Format
      description: *content
---

Format String, can contain the following things:
- Plain text like `Some song`. This text is merely copied to the output.
- Special identifier, beginning with `%` to substitute for the tag value:

  ID    | Description
  ------|-------------
  %TITL | song title
  %ARTI | song artist
  %ALBM | album name
  %GNRE | song genre
  %YEAR | song/album year
  %CMNT | comment
  %TRCK | track number (may include total track count "track/total")
  %COMP | composer
  %COPY | copyright
  %SUBT | subtitle
  %AART | album artist
  %DISC | disc number (may include total disc count "disc/total")
  %PUBL | publisher

- Expression:
  
  Expression     | Effect
  ---------------|---------
  `%IFV1(x,a)`   | If x is not empty, then this evaluates to a, or to an empty string otherwise.
  `%IFV2(x,a,b)` | If x is not empty, then this evaluates to a, else to b.
  `%IUPC(x)`     | Brings x to uppercase, so `%IUPC(foO)` yields `FOO`.
  `%ILWC(x)`     | Brings x to lowercase, so `%ILWC(fOO)` yields `foo`.
  `%ICAP(x)`     | Capitalizes first letter in each word of x, so `%ICAP(FoO bAR)` yields `Foo Bar`.
  `%ITRM(x)`     | Removes beginning and trailing spaces from x.

- Escaped symbols:

  Symbol | Character
  -------|-----------
  `%%`   | `%`
  `%(`   | `(`
  `%,`   | `,`
  `%)`   | `)`
       
## Example
Assume we have the following information in the tag:

Tag    | Value
-------|-------
Title  | Nemo
Artist | nightwish
Album  | Once
Track  | 3
Year   | 2004

Format string: `%IFV1(%TRCK,%TRCK. )%IFV2(%ARTI,%ICAP(%ARTI),no artist) - %IFV2(%TITL,%ICAP(%TITL) -,no title -) %IFV1(%ALBM,%IUPC(%ALBM))%IFV1(%YEAR, %(%YEAR%))`  
Output: `3.- Nightwish - Nemo - ONCE (2004)`

if 'Artist' and 'Title' are empty, the output will be:  
`3. - no artist - no title - ONCE (2004)`

if only 'Track' is empty, the output will be:  
`Nightwish - Nemo - ONCE (2004)`

## Caution
`%IFV2(sometext ,a,b)` always evaluates to a, because a space after `sometext` causes the condition string to be not empty.
This is intentional.

## Another caution
symbols `%(,)` are reserved, that is, they must be escaped if they are inteded to appear in the output.  
See the above example: the parens around `%YEAR` are escaped with `%` to prevent misinterpretation.