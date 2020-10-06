# CB card sandbox
## Download
#### Compressed, minified version
- **cb-card.min.js :** https://cb.arthaud.dev/src/cb-card.min.js
- (optionnal) **cb-card.min.css :** https://cb.arthaud.dev/src/cb-card.min.css
#### Uncompressed version
- **cb-card.js :** https://cb.arthaud.dev/src/cb-card.js
- **cb-card.css :** https://cb.arthaud.dev/src/cb-card.css


## Documentation
#### Create a card
```javascript
const cb = new CB({
    parent: PARENT_ELEMENT_SELECTORS, 
    id: CUSTOM_ID // optionnal
})
cb.init()
```
#### Get data from the card :
```javascript
cb.data
```
>Will return
>```javascript
>{
>  code: String,
>  name: String,
>  expiration: String,
>  crypto: String
>}
>```
