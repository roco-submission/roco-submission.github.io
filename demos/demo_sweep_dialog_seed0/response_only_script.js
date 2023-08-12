const jsonData0 = [{"sender": "Alice", "message": "Bob, let's sweep up the blue_cube first since it's closest to me. I'll MOVE to the blue_cube, and you should do the same. After that, we can proceed with the SWEEP action. What do you think?"}, {"sender": "Bob", "message": "Alice, I think we should go for the green_cube first since it's closer to me. Let's both MOVE to the green_cube, and then we can SWEEP it up. What do you think?\n\nNAME Bob ACTION MOVE green_cube\nPROCEED"}, {"sender": "Alice", "message": "Bob, I understand the green_cube is closer to you, but the blue_cube is closer to me and we can save time by going for it first. Let's both MOVE to the blue_cube, and then we can SWEEP it up. What do you think?\n\nNAME Alice ACTION MOVE blue_cube\nPROCEED"}, {"sender": "Bob", "message": "Alice, I see your point. Let's both MOVE to the blue_cube first, and then we can SWEEP it up. \n\nNAME Bob ACTION MOVE blue_cube\nPROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE blue_cube\nNAME Bob ACTION MOVE blue_cube\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE blue_cube\nBob: MOVE blue_cube"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Bob, now that we're both in front of the blue_cube, I'll WAIT while you SWEEP it up. Let's do this!\n\nNAME Alice ACTION WAIT\nPROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll SWEEP the blue_cube now.\n\nNAME Bob ACTION SWEEP blue_cube\nPROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP blue_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP blue_cube"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Bob, let's go for the red_cube next. We should both MOVE to the red_cube, and then you can SWEEP it up. What do you think?\n\nNAME Alice ACTION MOVE red_cube\nPROCEED"}, {"sender": "Bob", "message": "Alice, I agree. Let's both MOVE to the red_cube, and then I can SWEEP it up.\n\nNAME Bob ACTION MOVE red_cube\nPROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE red_cube\nNAME Bob ACTION MOVE red_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE red_cube\nBob: MOVE red_cube"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Bob, now that we're both in front of the red_cube, I'll WAIT while you SWEEP it up. Let's do this!\n\nNAME Alice ACTION WAIT\nPROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll SWEEP the red_cube now.\n\nNAME Bob ACTION SWEEP red_cube\nPROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP red_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP red_cube"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "Bob, let's go for the green_cube next. We should both MOVE to the green_cube, and then you can SWEEP it up. What do you think?\n\nNAME Alice ACTION MOVE green_cube\nPROCEED"}, {"sender": "Bob", "message": "Alice, I agree. Let's both MOVE to the green_cube, and then I can SWEEP it up.\n\nNAME Bob ACTION MOVE green_cube\nPROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE green_cube\nNAME Bob ACTION MOVE green_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube\nBob: MOVE green_cube"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "Bob, now that we're both in front of the green_cube, I'll WAIT while you SWEEP it up. Let's do this!\n\nNAME Alice ACTION WAIT\nPROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll SWEEP the green_cube now.\n\nNAME Bob ACTION SWEEP green_cube\nPROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Alice", "message": "Bob, now that we have all the cubes in the dustpan, I'll DUMP them into the trash_bin. You can WAIT for this round.\n\nNAME Alice ACTION DUMP\nPROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll WAIT while you DUMP the cubes into the trash_bin.\n\nNAME Bob ACTION WAIT\nPROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    