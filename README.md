# MoLang
This library is a Minecraft bedrock command parser for JavaScript/TypeScript applications.


TODO: finish the readme


## Usage
```javascript
import MoLang from "molang";

const interpreter = new MoLang.Interpreter({
  query: {
    x: 1,
    get(slot) {
      return slot * 2;
    }
  }
});

interpreter.parse("query.x + query.get(3) == 7");
```
