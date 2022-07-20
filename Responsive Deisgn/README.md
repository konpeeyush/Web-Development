# Notes

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
    * P
    * 







