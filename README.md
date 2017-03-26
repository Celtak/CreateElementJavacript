# CreateElementJavacript
Create a tag html element with attributes and text quickly in javascript

## Description

Two functions to create nodeHtml with **create()** and nodeText **createText()**.

The function **create()** uses **createText()**.

## Usage

### create(Tag, AttributesOrText)

#### Parameters

|Parameters|Description|Example|
|-|-|-|
|Tag|A html tag|'div', 'p', 'a', etc|
|AttributesOrText|*Optionnal* object with one or more attrubutes and textNode|{'id':'part1', 'class':'blueBlock', 'text':'Lorem'}|

##### AttributesOrText

- id
- href
- class
- title

### createText(Text)

#### Parameters

Text = text

## Example

```js
<script>

  var divE = create('div', {'id': 'hello', 'text': 'Hello world !'});
  
</script>

// divE return <div id="hello">Hello world !</div>
```

```js
<script>

  var divE = create('div', {'id': 'hello','class':'red'});
  
  var pE = create('p', {'class':'whiteColor', 'text':'Hello world !'});
  
  divE.appendChild(pE);
  
</script>

// divE return <div id="hello" class="red"><p class="whiteColor">Hello world !</p></div>
```


