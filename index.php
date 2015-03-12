<!Doctype HTML>

<html>
<?php include( 'head.html') ?>
<?php include( 'menu.html') ?>
<title>Jwb Media | Click-Style</title>

<body>

    <div class="main">

        <div class="content" style="margin-top:320px;">
            <h1>Click-Style <a href="https://github.com/jwbmedia/click-style/archive/master.zip"><button>Download .zip</button></a></h1> Click Style is a simple but good looking and helpful jQuery plugin. It styles the way a button looks when clicked automatically Usage Put the jquery.clickstyle.min.js and clickstyle.css(optional) into your website's directory. In HTML file add:
            <code>
<script src="jquery.clickstyle.js"></script>
            </code> In jQuery script add: $('button').clickStyle(); To change the parameters, do this:

            <code>
$('button').clickStyle({
  onclick: true, 
  color: "white", 
  background: "#29bf35",
  text: "Success!",
  rotate: true,
  transition: "1000",
  bordercolor: "none"
});
            </code> Inside the quotation marks change it to your desires. Install with npm npm install click-style
        </div>
    </div>
</body>
<?php include( 'footer.html') ?>

</html>