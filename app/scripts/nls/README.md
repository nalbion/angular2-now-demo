# Internationalisation (i18n)

See http://requirejs.org/docs/api.html#i18n


## Usage:

```javascript
define(["i18n!my/nls/colors"], function(colors) {
  return {
    testMessage: "The name for red in this locale is: " + colors.red
  }
});
```

```javascript
requirejs.config({
    config: {
        //Set the config for the i18n
        //module ID
        i18n: {
            locale: 'fr-fr'
        }
    }
});
```
