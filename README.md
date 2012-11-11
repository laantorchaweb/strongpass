<h1>Strong Passwords Plugin</h1>
==========

A jQuery plugin to detect if the user is entering a strong password.

<h2>How to use the plugin</h2>
<p>You can initialize the plugin by giving the phrases that you want to display on each case:</p>
<div class="highlight">
<pre>
$('#pass').checkStrenght({
    strong: 'Strong Password!',
    medium: 'Not so strong...',
    weak: 'You can\'t be serious',
    warning: '#pass-result'
});​
</pre>
</div>
