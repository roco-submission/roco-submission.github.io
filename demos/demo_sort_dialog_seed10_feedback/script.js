const jsonData0 = [{"sender": "Alice", "message": "Hello everyone, I am Alice. My goal is to place the blue_square on panel2, but I can only reach panel1, panel2, and panel3. Currently, I can only pick up pink_polygon and yellow_trapezoid. Can someone help me get the blue_square?\n\nFor now, I propose:\nNAME Alice ACTION PICK pink_polygon PLACE panel3\n\nPlease share your proposals and let's discuss the best plan. PROCEED"}, {"sender": "Bob", "message": "Hello Alice and Chad, I am Bob. My goal is to place the pink_polygon on panel4, but I can only reach panel3, panel4, and panel5. Currently, I can only pick up the yellow_trapezoid. \n\nSince Alice is moving the pink_polygon to panel3, I can pick it up in the next round. For now, I propose:\nNAME Bob ACTION WAIT\n\nChad, please share your proposal and let's discuss the best plan. PROCEED"}, {"sender": "Chad", "message": "Hello Alice and Bob, I am Chad. My goal is to place the yellow_trapezoid on panel6, but I can only reach panel5, panel6, and panel7. Currently, I can only pick up the blue_square.\n\nFor now, I propose:\nNAME Chad ACTION PICK blue_square PLACE panel5\n\nLet's discuss the best plan. PROCEED"}, {"sender": "Alice", "message": "Great, Chad. Since you can pick up the blue_square, please place it on panel3 instead of panel5, so I can pick it up in the next round. \n\nSo the updated plan is:\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel3\n\nIf everyone agrees, let's execute this plan. EXECUTE"}, {"sender": "Feedback", "message": "\nThis previous response from [Alice] failed to parse!: 'Great, Chad. Since you can pick up the blue_square, please place it on panel3 instead of panel5, so I can pick it up in the next round. \n\nSo the updated plan is:\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel3\n\nIf everyone agrees, let's execute this plan. EXECUTE'\nResponse must contain exactly one ACTION for each robot, and must contain all keywords: ['NAME', 'ACTION'] Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "Great, Chad. Since you can pick up the blue_square, please place it on panel3 instead of panel5, so I can pick it up in the next round. \n\nSo the updated plan is:\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel3\n\nIf everyone agrees, let's execute this plan. EXECUTE"}, {"sender": "Alice", "message": "Great, Chad. Since you can pick up the blue_square, please place it on panel3 instead of panel5, so I can pick it up in the next round. \n\nSo the updated plan is:\nEXECUTE\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel3"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel3\n- Goal Step Alice (-0.28, 0.60, 0.50); Bob (0.55, -0.05, 0.62); Chad (-0.28, 0.60, 0.50):\n   - Reachability failed: Out of reach: Chad (-0.28, 0.60, 0.50); \n  "}, {"sender": "Action", "message": "Alice: PICK pink_polygon PLACE panel3\nBob: WAIT\nChad: PICK blue_square PLACE panel3"}, {"sender": "Alice", "message": "I apologize for the mistake. Chad, since you can't reach panel3, please place the blue_square on panel5 as you initially proposed. \n\nSo the updated plan is:\nEXECUTE\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel5"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK pink_polygon PLACE panel3\nBob: WAIT\nChad: PICK blue_square PLACE panel5"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Bob, Chad, our goal is to place the blue_square on panel2. Since I can't reach the blue_square, one of you will need to move it to a panel I can reach. \n\nBob, can you please pick up the blue_square from panel5 and place it on panel3? Then, I can pick it up and place it on panel2 in the next round.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, I understand our goal is to place the blue_square on panel2. I can pick up the blue_square from panel5 and place it on panel3 for you to reach it in the next round. \n\nSo my proposed action is:\nNAME Bob ACTION PICK blue_square PLACE panel3\n\nChad, please confirm if you agree with this plan.\n\nPROCEED"}, {"sender": "Chad", "message": "Alice, Bob, I agree with the plan. Our goal is to place the yellow_trapezoid on panel6, and I can do that once the blue_square is moved.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK blue_square PLACE panel3\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK blue_square PLACE panel3\nChad: WAIT"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Bob, Chad, thank you for moving the blue_square to panel3. Now I can pick it up and place it on panel2, which is our goal.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION PICK blue_square PLACE panel2\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Bob", "message": "Alice, that sounds good. Since our goal is to place the pink_polygon on panel4, I can pick it up from panel3 and place it on panel4 in the next round.\n\nSo for this round, I will wait as you move the blue_square to panel2.\n\nPROCEED"}, {"sender": "Chad", "message": "Alice, Bob, I agree with the plan. Once the blue_square is placed on panel2, I can focus on placing the yellow_trapezoid on panel6.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION PICK blue_square PLACE panel2\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK blue_square PLACE panel2\nBob: WAIT\nChad: WAIT"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Bob, Chad, now that the blue_square is on panel2, we can focus on placing the pink_polygon on panel4 and the yellow_trapezoid on panel6.\n\nBob, since you can reach panel4, please pick up the pink_polygon from panel3 and place it on panel4. Chad, you can pick up the yellow_trapezoid from panel3 and place it on panel6.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6"}, {"sender": "Bob", "message": "Alice, I agree with the plan. I will pick up the pink_polygon from panel3 and place it on panel4. Chad, please pick up the yellow_trapezoid from panel3 and place it on panel6.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6"}, {"sender": "Chad", "message": "Alice, Bob, I cannot reach panel3 to pick up the yellow_trapezoid. Bob, after you place the pink_polygon on panel4, please pick up the yellow_trapezoid from panel3 and place it on panel5 so I can reach it.\n\nFor this round, I will wait.\n\nPROCEED"}, {"sender": "Alice", "message": "Chad, I apologize for the oversight. You're right, you can't reach panel3. \n\nBob, please proceed with placing the pink_polygon on panel4. In the next round, you can move the yellow_trapezoid to panel5 for Chad.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK pink_polygon PLACE panel4\nChad: WAIT"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "Bob, Chad, thank you for placing the pink_polygon on panel4. Now, we need to move the yellow_trapezoid to panel6. \n\nBob, please pick up the yellow_trapezoid from panel3 and place it on panel5 so Chad can reach it. Chad, please wait for the yellow_trapezoid to be moved to panel5.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel5\nNAME Chad ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Chad", "message": "Alice, I agree with the plan. I will wait for Bob to move the yellow_trapezoid to panel5 so I can reach it and place it on panel6.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel5\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK yellow_trapezoid PLACE panel5\nChad: WAIT"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "Chad, now that the yellow_trapezoid is on panel5, you can pick it up and place it on panel6, which is our goal. Bob and I will wait.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6"}, {"sender": "Bob", "message": "Alice, I agree with the plan. Chad, please pick up the yellow_trapezoid from panel5 and place it on panel6. I will wait.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6"}, {"sender": "Chad", "message": "Alice, Bob, I agree with the plan. I will pick up the yellow_trapezoid from panel5 and place it on panel6, which is our goal.\n\nSo the plan for this round is:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT\nChad: PICK yellow_trapezoid PLACE panel6"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    