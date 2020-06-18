var sec=document.getElementById("section");
var description = new Array ();
description[0] = "Those who dare to fail miserably can achieve greatly.";
description[1] = "Wisely, and slow. They stumble that run fast";
description[2] = "It's time to kick ass and chew bubble gum... and I'm all outta gum";
description[3] = "Nothing is true,everything is permitted";
description[4]="It's dangerous to go alone, take this!"
var auth=new Array();
auth[0]="- J.F. Kenndy";
auth[1]="- William Shakespeare";
auth[2]="- Duke Nukem";
auth[3]="- Ezio";
auth[4]="- Lezend of Zelda"
var size = description.length
var x = Math.floor(size*Math.random());
//document.write('"'+description[x]+'."<br> <div class="author">- '+auth[x]+'</div>');
sec.appendChild(document.createTextNode(description[x]));
let brk=document.createElement('br');
sec.appendChild(brk);
let div=document.createElement('div');
div.className="author";
div.appendChild(document.createTextNode(auth[x]));
sec.appendChild(div);

