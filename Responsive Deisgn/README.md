# Notes 🤯

## CSS Units
### Absolute Units:- 
* Pixels(px), pt, cm, mm.
* Percentages - are easy to understand and are mainly used for widths. They are relative to their Parent(except on height).
### Relative Units:-
* Relative to font-size:- em and rem
* Relative to the viewport:- vw, vh, vmin, vmax.

**Note:-**

1. The em and rem units are considered relative, because they are relative to the font-size of other elements.
2.  * **em are relative to their parent's font-size.**
    * Font-size is an inherited property, so if you don't declare it anywhere, it's getting it from the body(or the default, which is normally 16px)
    * 1.5em =150% of parent font-size
3. em units are very convenient for some things, but **when we use the font-size** of an element though, it can create **a cascading effect.**
4. The rem unit is short for **Root Em.**
5.  * That means it's always relative to the "root" of our document.
    * **The root of an HTML page is always the html element.**
  ```
  General Rule of thumb:
   Font-size = rem
   Padding and margin = em
   Widths = em or percentage
```

6. *How to decide which unit to use?*
    * em is relative of the font-size of particular element, so if used as margin it will apply accordingly

---
## FlexBox
```
Elements normally have a display:block or a display:inline as a default from the browser.

We can change this behaviour by setting the display property to flex on the parent element.
```
## Media Queries
```
Media queries let us add new styles that target only specific conditions.

Syntax:-
    @media media-type and (media-features){...}

The media types let's us target different types of media
- Screen @media screen {...}
- Print @media print {...}
- Speech @media speech {...}

The media conditions let's us target specific conditions within that media type
- Widths @media (min-width:600px) {...}
- Orientation @media (orientation:landscape) {...}
- Specific features @media (hover) {...}

Both media types and conditions are optional.

You can combine a type with a condition by using and.
```








