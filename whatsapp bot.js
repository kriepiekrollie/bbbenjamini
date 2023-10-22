//  ---  CLASSES  ---  //

function Messager() {
  this.send = function(text) { //Send message to current chat
    var event = new InputEvent('input', {
      bubbles: true
    } ) ;
    let inputboxes = document.getElementsByClassName('_2S1VP');
    var textbox = inputboxes[inputboxes.length - 1]; //The input box to enter the text
    textbox.textContent = text;
    textbox.dispatchEvent(event);  //Trigger the typing event
    document.getElementsByClassName('_35EW6')[0].click();  //Send the message
  }

  this.getLatestMessage = function(){ //Get the latest message in the current chat
    let arr = document.getElementsByClassName('_3_7SH message-in');
    let msgin = arr[arr.length - 1].getElementsByClassName('_3zb-j')[0]; //The text bubble
    return msgin.getElementsByTagName('SPAN')[0].textContent; //The text content
  }

  this.getLatestSender = function (){
    let arr = document.getElementsByClassName('_111ze');
    return arr[arr.length - 1].querySelector('span').textContent;
  }
}

function Recorder(){
  this.startRecord = function (){
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent ('mousedown', true, true);
    document.getElementsByClassName('_2SbJ1')[0].dispatchEvent (clickEvent);
  } //Click start record

  this.endRecord = function(){
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent ('mouseup', true, true);
    document.getElementsByClassName('cOcmP')[1].dispatchEvent (clickEvent);
  } //Click confirm record
}
var messager = new Messager();

var recorder = new Recorder();


//list of prompts

var Custom = [
  ['stop', 'YEEEEEE'],
  ['wat', 'SHHHHHH'],
  ["Wat maak 'n trekker ver in die veld?", 'hEy bAbEs']
];


//(automated replies)


function AutoReply() {
  window.oldMessage=window.message;
  window.message=messager.getLatestMessage();
  if (window.message == 'stop' && window.oldMessage != 'stop') {
    messager.send('hello');
  }
}

setInterval(AutoReply, 1000)



function AutoReply2() {
  window.oldMessage2=window.message2;
  window.message2=messager.getLatestMessage();
  if (window.message2 == "Wat maak 'n trekker ver in die veld?" && window.oldMessage2 != "Wat maak 'n trekker ver in die veld?") {
    messager.send('YEEEEEEEEEEEEEE');
  }
}

setInterval(AutoReply2, 1000)



function AutoReply3() {
  window.oldMessage3=window.message3;
  window.message3=messager.getLatestMessage();
  if (window.message3 == "wat" && window.oldMessage3 != "wat") {
    messager.send('shhhhhhhhhhhh');
  }
}

setInterval(AutoReply3, 1000)



//(custom replies)

function CutomReply() {
  window.oldCustom=window.Custom;
  window.Custom=messager.getLatestMessage();
  if (window.Custom == "prompt" && window.oldCustom != "prompt") {

    window.oldCustom=window.Custom;
    window.Custom=messager.getLatestMessage();
      if (window.Custom != window.oldCustom) {

        window.autoInput = messager.getLatestMessage();
        window.oldCustom=window.Custom;
        window.Custom=messager.getLatestMessage();
        if (window.Custom != window.oldCustom) {

          window.autoOutput = messager.getLatestMessage();
          Custom.push([window.autoInput + "," + window.autoOutput])
      }
  }
}
}

setInterval(Customreply, 1000)
