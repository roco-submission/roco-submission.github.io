const jsonData0 = [{"sender": "Alice", "message": "Hello everyone, I am Alice. My goal is to place the blue_square on panel2. However, I can only reach panel1, panel2, and panel3. Currently, I can only pick up pink_polygon and yellow_trapezoid. Can someone help me get the blue_square?\n\nFor now, I propose:\nNAME Alice ACTION PICK pink_polygon PLACE panel3\n\nWhat do you think, Bob and Chad?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I am Bob. My goal is to place the pink_polygon on panel4. I can only reach panel3, panel4, and panel5. Currently, I can pick up blue_square and yellow_trapezoid. \n\nAlice, your proposal sounds good. I will help you with the blue_square later.\n\nFor now, I propose:\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel5\n\nWhat do you think, Chad?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I am Chad. My goal is to place the yellow_trapezoid on panel6. I can only reach panel5, panel6, and panel7. Currently, I can pick up the blue_square.\n\nAlice and Bob, your proposals sound good. After Bob places the yellow_trapezoid on panel5, I can pick it up and place it on panel6.\n\nFor now, I propose:\nNAME Chad ACTION PICK blue_square PLACE panel7\n\nLet's proceed with the discussion."}, {"sender": "Alice", "message": "Hello Bob and Chad, thank you for your proposals. It seems like we have a good plan to move the cubes around.\n\nFor now, let's execute the following actions:\n\nEXECUTE\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel5\nNAME Chad ACTION PICK blue_square PLACE panel7"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK pink_polygon PLACE panel3\nBob: PICK yellow_trapezoid PLACE panel5\nChad: PICK blue_square PLACE panel7"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Hello Bob and Chad, we have successfully moved the cubes to their current positions. Now, we need to continue working on our goals.\n\nBob, can you please pick up the blue_square from panel7 and place it on panel3 so that I can reach it? After that, I can place it on panel2, which is my goal.\n\nFor now, I propose:\nNAME Alice ACTION WAIT\n\nWhat do you think, Bob and Chad?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I am Bob. Unfortunately, I cannot pick up the blue_square from panel7 as I can only reach panel3, panel4, and panel5. However, Chad can help with that since he can reach panel7.\n\nFor now, I propose:\nNAME Bob ACTION PICK pink_polygon PLACE panel4\n\nWhat do you think, Chad?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I am Chad. I can help with moving the blue_square from panel7 to panel3 so that Alice can reach it.\n\nFor now, I propose:\nNAME Chad ACTION PICK blue_square PLACE panel3\n\nLet's proceed with the discussion."}, {"sender": "Alice", "message": "Hello Bob and Chad, thank you for your proposals. It seems like we have a good plan to move the cubes around.\n\nFor now, let's execute the following actions:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK blue_square PLACE panel3"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK blue_square PLACE panel3\n- Goal Step Alice (-0.21, 1.18, 0.46); Bob (0.00, 0.50, 0.50); Chad (-0.28, 0.60, 0.50):\n   - Reachability failed: Out of reach: Chad (-0.28, 0.60, 0.50); \n  "}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK pink_polygon PLACE panel4\nChad: PICK blue_square PLACE panel3"}, {"sender": "Alice", "message": "Hello Bob and Chad, it seems that Chad cannot reach the blue_square on panel7. We need to come up with a new plan.\n\nChad, can you please confirm your reachable panels and cubes? We need to figure out how to get the blue_square to panel3 so I can place it on panel2.\n\nFor now, I propose:\nNAME Alice ACTION WAIT\n\nWhat do you think, Bob and Chad?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I am Bob. Chad, please confirm your reachable panels and cubes so we can come up with a new plan to get the blue_square to Alice.\n\nFor now, I propose:\nNAME Bob ACTION PICK pink_polygon PLACE panel4\n\nWhat do you think, Chad?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I am Chad. I apologize for the confusion. I can reach panel5, panel6, and panel7. Currently, I can pick up the blue_square from panel7 and the yellow_trapezoid from panel5.\n\nFor now, I propose:\nNAME Chad ACTION PICK blue_square PLACE panel5\n\nLet's proceed with the discussion."}, {"sender": "Alice", "message": "Hello Bob and Chad, thank you for the clarification. Since Chad can place the blue_square on panel5, Bob, you can pick it up from there and place it on panel3 so I can reach it.\n\nFor now, I propose:\nNAME Alice ACTION WAIT\n\nWhat do you think, Bob and Chad?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I am Bob. That sounds like a good plan. After Chad places the blue_square on panel5, I can pick it up and place it on panel3 for Alice.\n\nFor now, I propose:\nNAME Bob ACTION WAIT\n\nWhat do you think, Chad?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I am Chad. I agree with the plan. Let's execute the following actions:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel5"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT\nChad: PICK blue_square PLACE panel5"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Hello Bob and Chad, now that the blue_square is on panel5, Bob, you can pick it up and place it on panel3 so I can reach it and place it on panel2.\n\nFor now, I propose:\nNAME Alice ACTION WAIT\n\nWhat do you think, Bob and Chad?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I am Bob. I will pick up the blue_square from panel5 and place it on panel3 for Alice.\n\nFor now, I propose:\nNAME Bob ACTION PICK blue_square PLACE panel3\n\nWhat do you think, Chad?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I am Chad. That sounds like a good plan. While you both work on the blue_square, I will wait for the yellow_trapezoid to be available.\n\nFor now, I propose:\nNAME Chad ACTION WAIT\n\nLet's proceed with the discussion."}, {"sender": "Alice", "message": "Hello Bob and Chad, thank you for your proposals. It seems like we have a good plan to move the blue_square to panel3 so I can place it on panel2.\n\nLet's execute the following actions:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK blue_square PLACE panel3\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK blue_square PLACE panel3\nChad: WAIT"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Hello Bob and Chad, now that the blue_square is on panel3, I can pick it up and place it on panel2, which is my goal.\n\nFor now, I propose:\nNAME Alice ACTION PICK blue_square PLACE panel2\n\nWhat do you think, Bob and Chad?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I am Bob. That sounds good, Alice. Now that my goal is to place the pink_polygon on panel4, I can pick it up from panel3 and place it there.\n\nFor now, I propose:\nNAME Bob ACTION PICK pink_polygon PLACE panel4\n\nWhat do you think, Chad?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I am Chad. Alice, your proposal sounds good. Bob, your proposal also sounds good. Now that the yellow_trapezoid is available on panel5, I can pick it up and place it on panel6, which is my goal.\n\nFor now, I propose:\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6\n\nLet's proceed with the discussion."}, {"sender": "Alice", "message": "Hello Bob and Chad, thank you for your proposals. It seems like we have a good plan to achieve all our goals.\n\nLet's execute the following actions:\n\nEXECUTE\nNAME Alice ACTION PICK blue_square PLACE panel2\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK blue_square PLACE panel2\nBob: PICK pink_polygon PLACE panel4\nChad: PICK yellow_trapezoid PLACE panel6"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    