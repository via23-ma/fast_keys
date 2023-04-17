chrome.commands.onCommand.addListener((c) => {
  switch(c){
  case "command1":
    chrome.tabs.create({url: "https://www.codechef.com/"}, ()=>{});
    break;
  case "command2":
    chrome.tabs.create({url: "https://github.com/"}, ()=>{});
    break;
  case "command3":
    chrome.tabs.create({url: "https://www.youtube.com/"}, ()=>{});
    break;  
  case "command4":
    chrome.tabs.create({url: "https://www.linkedin.com/"}, ()=>{});
    break;  
  }
  
  
});