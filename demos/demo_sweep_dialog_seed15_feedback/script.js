const jsonData0 = [{"sender": "Alice", "message": "Bob, let's sweep up the blue_cube first since it's the closest to me. I'll MOVE to the blue_cube, and you should MOVE there too. After that, I'll WAIT while you SWEEP it. What do you think?"}, {"sender": "Bob", "message": "Alice, actually the green_cube is closer to me. Let's go for the green_cube first. I'll MOVE to the green_cube, and you should MOVE there too. After that, you can WAIT while I SWEEP it. What do you think? PROCEED"}, {"sender": "Alice", "message": "Alright, Bob. Let's go for the green_cube first. I'll MOVE to the green_cube, and you should MOVE there too. After that, I'll WAIT while you SWEEP it. PROCEED"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION MOVE green_cube\nNAME Bob ACTION MOVE green_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube\nBob: MOVE green_cube"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Bob, now that we're both at the green_cube, I'll WAIT while you SWEEP it. PROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll SWEEP the green_cube while you WAIT. PROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Bob, let's go for the blue_cube next. I'll MOVE to the blue_cube, and you should MOVE there too. After that, I'll WAIT while you SWEEP it. What do you think? PROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. Let's go for the blue_cube next. I'll MOVE to the blue_cube, and you should MOVE there too. After that, you can WAIT while I SWEEP it. PROCEED"}, {"sender": "Alice", "message": "Alright, Bob. Let's execute our plan. I'll MOVE to the blue_cube, and you should MOVE there too. After that, I'll WAIT while you SWEEP it. \nEXECUTE\nNAME Alice ACTION MOVE blue_cube\nNAME Bob ACTION MOVE blue_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE blue_cube\nBob: MOVE blue_cube"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Bob, now that we're both at the blue_cube, I'll WAIT while you SWEEP it. What do you think? PROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll SWEEP the blue_cube while you WAIT. PROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP blue_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP blue_cube"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "Bob, now that we have both green_cube and blue_cube in the dustpan, let's go for the red_cube. I'll MOVE to the red_cube, and you should MOVE there too. After that, I'll WAIT while you SWEEP it. What do you think? PROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. Let's go for the red_cube next. I'll MOVE to the red_cube, and you should MOVE there too. After that, you can WAIT while I SWEEP it. PROCEED"}, {"sender": "Alice", "message": "Alright, Bob. Let's execute our plan. I'll MOVE to the red_cube, and you should MOVE there too. After that, I'll WAIT while you SWEEP it. \nEXECUTE\nNAME Alice ACTION MOVE red_cube\nNAME Bob ACTION MOVE red_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE red_cube\nBob: MOVE red_cube"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "Bob, now that we're both at the red_cube, I'll WAIT while you SWEEP it. What do you think? PROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll SWEEP the red_cube while you WAIT. PROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP red_cube"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP red_cube"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Alice", "message": "Bob, now that we have all three cubes in the dustpan, I'll MOVE to the trash_bin and DUMP the cubes. You can WAIT while I do this. What do you think? PROCEED"}, {"sender": "Bob", "message": "Alice, that sounds good. I'll WAIT while you MOVE to the trash_bin and DUMP the cubes. PROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE trash_bin\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION MOVE trash_bin\nNAME Bob ACTION WAIT\nTask Constraints:\n faild, MOVE target must be a cube, you can directly dump without moving to trash_bin\n"}, {"sender": "Action", "message": "Alice: MOVE trash_bin\nBob: WAIT"}, {"sender": "Alice", "message": "Bob, I made a mistake. I don't need to MOVE to the trash_bin. I'll DUMP the cubes directly from the dustpan. You can WAIT while I do this. What do you think? PROCEED"}, {"sender": "Bob", "message": "Alice, that's alright. I'll WAIT while you DUMP the cubes directly from the dustpan. PROCEED"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Alice", "message": "Bob, we have successfully cleaned up all the cubes and dumped them into the trash_bin. Great job! We can now finish our task. PROCEED"}, {"sender": "Bob", "message": "Alice, thank you! We did a great job together. Let's finish our task now. PROCEED"}, {"sender": "Alice", "message": "Great job, Bob! We've completed our task. Let's finish up. PROCEED"}, {"sender": "Bob", "message": "Thank you, Alice! We've successfully completed our task. Good teamwork! PROCEED"}, {"sender": "Alice", "message": "We've successfully completed our task, Bob. Great teamwork! Let's finish up. PROCEED"}, {"sender": "Bob", "message": "Thank you, Alice! We've completed our task successfully. Great teamwork indeed! Let's finish up. PROCEED"}, {"sender": "Alice", "message": "We've completed our task successfully, Bob. Great teamwork! Let's finish up. PROCEED"}, {"sender": "Bob", "message": "Thank you, Alice! We've successfully completed our task. Great teamwork! Let's finish up. PROCEED"}, {"sender": "Alice", "message": "We've successfully completed our task, Bob. Great teamwork! Let's finish up. PROCEED"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Alice", "message": "Bob, it seems we have already cleaned up all the cubes and dumped them into the trash_bin. We can now finish our task. PROCEED"}, {"sender": "Bob", "message": "Alice, you're right. We have successfully cleaned up all the cubes and dumped them into the trash_bin. Great job! Let's finish our task. PROCEED"}, {"sender": "Alice", "message": "We've successfully completed our task, Bob. Great teamwork! Let's finish up. PROCEED"}, {"sender": "Bob", "message": "Thank you, Alice! We've successfully completed our task. Great teamwork! Let's finish up. PROCEED\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Alice", "message": "Bob, it seems we have already cleaned up all the cubes and dumped them into the trash_bin. We can now finish our task. PROCEED"}, {"sender": "Bob", "message": "Alice, you're right. We have successfully cleaned up all the cubes and dumped them into the trash_bin. Great job! Let's finish our task. PROCEED"}, {"sender": "Alice", "message": "We've successfully completed our task, Bob. Great teamwork! Let's finish up. PROCEED"}, {"sender": "Bob", "message": "Thank you, Alice! We've successfully completed our task. Great teamwork! Let's finish up. PROCEED\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    