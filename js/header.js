let header=document.getElementById("header");
var description = new Array();
description[0] = "Seeking Adventure";
description[1] = "Isn't it cool";
description[2] = "Back for Awsomeness";
description[3] = "Strange things";
description[4] = "Wuba Luba Dub Dub";
var size = description.length;
var x = Math.floor(size * Math.random());
header.appendChild(document.createTextNode(description[x]));