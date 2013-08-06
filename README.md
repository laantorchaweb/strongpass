Strong Passwords Plugin
=======================

A jQuery plugin to detect if the user is entering a strong password.

##How to use the plugin
You can initialize the plugin by giving the phrases that you want to display on each case:

```javascript
$('#pass').strongpass({
   strong: 'Strong Password!',
   medium: 'Not so strong...',
   weak: 'You can\'t be serious',
   warning: '#pass-result'
});
```

Demo: [http://laantorcha.net/strongpass/](http://laantorcha.net/strongpass/)
