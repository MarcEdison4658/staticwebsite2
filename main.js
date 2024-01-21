function showService(n){
    document.getElementById("content"+n).style.display = "flex";
    for(i=1;i<=6;i++){
        if(i!=n){
            document.getElementById("content"+i).style.display = "none";
        }
    }
}
function showContent(n){
   let c = document.getElementById("contentPanel");
   //console.log("c->"+c);
   let content = [
   "A so-called <i>'Jack Of All Trades'</i>, because I am not focusing only in one discipline but a lot, in terms computer technology and applications. I've been working, mostly, in Food and Beverage service industry but still have some knowledge and skills in computers, both hardware and software. I am 35-years old. I come from Cebu, Philippines. My favourite hobbies are playing drums, bass guitar, and  studying more about computer technologies through online learnings.",
   "<b>Waiter</b><br>Norwegian Cruise Line Holdings, <br>March 2013-July 2023, <i>USA</i>.<br><br> <b>Waiter</b><br>Waterfront Hotel & Casino Mactan, <br>February 2011-February 2012, <i>PH</i>. <br><br><b>Merchandiser</b><br>Ace Hardware Phils, <br>April 2010-September 2010, <i>PH</i>. <br><br> <b>Service Crew</b><br>North Wing Cafe, <br>December 2009-March 2010, <i>PH</i>",
   "<b>Computer Network Technology</b><br>Ontario College of Technology, <i>CA</i>.<br><br> <b>BSBA-Marketing Management</b><br>University of San Jose-Recoletos, <i>PH</i>. <br><br> <b>Food and Beverage Service</b><br>North Central Mindanao Colleges, <i>PH</i>",
   "<b>Intern Technical Support</b><br>Logic Gate Technology Institute, <i>PH</i>. <br><br> <b>Basic Computer Network Installation and Administration</b><br>Logic Gate Technology Institute, <i>PH</i>. <br><br> <b>Practicum Trainee</b><br>Shangrila's Mactan Resort & Spa, <i>PH</i>",
   "<i><b>Web Development<br><br>Social Media Marketing<br><br>Ethical Hacking / Cybersecurity<br><br>Windows & Linux Server Administration<br><br>Microsoft Office<br><br>CCNA<br><br>Install, set-up, configure, maintain and repair computer systems, servers and networks</i></b>",
   "<b><a href='https://marcedison.wixsite.com/penandorderpad/my-blog' target='_blank'>Mr. Thoughtful</a><ul><i><a href='https://marcedison.wixsite.com/penandorderpad/post/kakeibo-the-art-of-saving-money-budgeting-system-that-help-you-save' target='_blank'>KAKEIBO: The Art of Saving Money and Budgeting System</a></i><br><br><i><a href='https://marcedison.wixsite.com/penandorderpad/post/zombies-are-coming' target='_blank'>Zombies Are Coming!</a></i><br><br><i><a href='https://marcedison.wixsite.com/penandorderpad/post/how-to-survive-social-isolation-during-covid-19-pandemic' target='_blank'>How To Survive Social Isolation?</a></i><br><br><i><a href='https://marcedison.wixsite.com/penandorderpad/post/how-do-i-apply-to-work-in-a-restaurant-on-a-cruise-ship' target='_blank'>How Did I Apply To Work In A Restaurant On A Cruise Ship?</a></i></u></b>",
];
   
   // the Array index start from 0
   // verify the parameter n (1-6)
   if(n>=1 & n<=6){
      c.innerHTML = content[n-1];
   }else{
      c.innerHTML = "Out of Range!";
   }
//    if(n==1){
//       c.innerHTML = "...";
//    }else if(n==2){
//       c.innerHTML = "...";
//    }else if(n==3){
//       c.innerHTML = "...";
//    }else if(n==4){
//       c.innerHTML = "...";
//    }else if(n==5){
//       c.innerHTML = "...";
//    }
}