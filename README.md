# preprocessor
Xpath to CSS preprocessor


Will convert 

```xpath
//body//td[@id='foo'] {
  color: black;
 
  //*[contains(@class, 'bar')] {
    color: yellow;
  }
}
```
to 

```css
body td[@id='foo'] {
  color: black;
}

body td[@id='foo'] *[@class='bar'] {
  color: yellow;
}
```
