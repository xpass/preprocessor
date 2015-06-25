# preprocessor

[![Join the chat at https://gitter.im/xpass/preprocessor](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/xpass/preprocessor?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
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
