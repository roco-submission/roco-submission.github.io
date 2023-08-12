const jsonData0 = [{"sender": "Chad", "message": "Dave, please PICK bread_slice1. I will WAIT this round.\n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will PICK bread_slice1 and you can WAIT.\n\nPROCEED"}, {"sender": "Chad", "message": "Dave, please PUT bread_slice1 on the cutting_board. I will PICK tomato.\n\nPROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Chad ACTION PICK tomato\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "Feedback", "message": "\nThis previous response from [Dave] failed to parse!: 'EXECUTE\nNAME Chad ACTION PICK tomato\nNAME Dave ACTION PUT bread_slice1 cutting_board'\nObject bread_slice1 cannot be PUT down, robot Dave is not in contact with it. Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "EXECUTE\nNAME Chad ACTION PICK tomato\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "Chad", "message": "Dave, please PICK bread_slice1 again. I will WAIT this round.\n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will PICK bread_slice1 and you can WAIT.\n\nPROCEED"}, {"sender": "Chad", "message": "Chad:\nDave, please PUT bread_slice1 on the cutting_board. I will PICK tomato.\n\nPROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Chad ACTION PICK tomato\nNAME Dave ACTION PICK bread_slice1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK tomato\nDave: PICK bread_slice1"}];
function createChatBubble(sender, message) {
    const bubbleWrapper = document.createElement("div");
    bubbleWrapper.className = "bubble-wrapper";

    const nameBox = document.createElement("div");
    nameBox.className = "user-name-box";
    nameBox.innerText = sender;

    const bubble = document.createElement("div");
    bubble.className = `.chat-bubble ${sender}-bubble`;
    bubble.innerText = message;

    bubbleWrapper.appendChild(nameBox);
    bubbleWrapper.appendChild(bubble);
    return bubbleWrapper;
    }  
        
// Get the chat container element
const chatContainer0 = document.getElementById("chat-container-0");
    
// Iterate over the JSON data and generate chat bubbles
jsonData0.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer0.appendChild(bubble);
    
});
    
const jsonData1 = [{"sender": "Chad", "message": "Dave, please PUT bread_slice1 on the cutting_board. I will WAIT this round.\n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will PUT bread_slice1 on the cutting_board and you can WAIT.\n\nEXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice1 cutting_board"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Chad", "message": "Dave, please WAIT while I PUT the tomato on the bread_slice1. \n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will WAIT while you PUT the tomato on the bread_slice1.\n\nPROCEED"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PUT tomato bread_slice1\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT tomato bread_slice1\nDave: WAIT"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Chad", "message": "Dave, please PICK cheese. I will PICK beef_patty.\n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will PICK cheese and you can PICK beef_patty.\n\nPROCEED"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PICK beef_patty\nNAME Dave ACTION PICK cheese"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty\nDave: PICK cheese"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Chad", "message": "Dave, please WAIT while I PUT the beef_patty on the tomato. \n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will WAIT while you PUT the beef_patty on the tomato.\n\nPROCEED"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PUT beef_patty tomato\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Chad ACTION PUT beef_patty tomato\nNAME Dave ACTION WAIT\nTask Constraints:\n faild, recipe says beef_patty must be put on cheese\n\n"}, {"sender": "Action", "message": "Chad: PUT beef_patty tomato\nDave: WAIT"}, {"sender": "Chad", "message": "Dave, it seems I made a mistake. We need to put the cheese on the tomato first. Please PUT the cheese on the tomato while I WAIT.\n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will PUT the cheese on the tomato while you WAIT.\n\nPROCEED\n[Chad]:\nEXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT cheese tomato"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT cheese tomato"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Chad", "message": "Dave, please WAIT while I PUT the beef_patty on the cheese. \n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will WAIT while you PUT the beef_patty on the cheese.\n\nPROCEED"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PUT beef_patty cheese\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty cheese\nDave: WAIT"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Chad", "message": "Dave, please PICK bread_slice2. I will WAIT this round.\n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will PICK bread_slice2 and you can WAIT.\n\nPROCEED"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PICK bread_slice2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PICK bread_slice2"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Chad", "message": "Dave, please PUT bread_slice2 on the beef_patty. I will WAIT this round.\n\nPROCEED"}, {"sender": "Dave", "message": "Alright, I will PUT bread_slice2 on the beef_patty while you WAIT.\n\nEXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice2 beef_patty"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice2 beef_patty"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    