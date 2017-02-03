# titleBarJs
A JavaScript library to create header and footer sections that display after the user scrolls below a certain point.

# API
### *titlebarJs*.startTypist(*[options]*);
* options
  * Optional. An object to override library defaults.

 | Property        | Type | Description           | Default  |
| ------------- |-------------:|-------------:| -----:|
| isTop      | Boolean | If true, the element is a header. If false, the element is a footer. | True
| id      | String      |   The CSS id of the titlebar | 'titlebar'
| triggerId | String      |    The CSS id of the titlebar triggering element | 'undefined'. The body tag will be used as the trigger.