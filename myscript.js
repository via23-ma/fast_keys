window.onload = () => {
  chrome.commands.getAll((c) => {
    let text = "";
    for (let {name, shortcut, description} of c){
      text += `Use  ${shortcut}  ${ description}\n`;
    }
    document.getElementById("id_text").value = text;
  });
}