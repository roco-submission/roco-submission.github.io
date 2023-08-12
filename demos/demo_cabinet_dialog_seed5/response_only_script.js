const jsonData0 = [{"sender": "Alice", "message": "Hello Bob and Chad, we need to pick a mug and a cup from the cabinet and place them on the correct coasters. I can only reach the left_door_handle, mug, and cup. We need to open both cabinet doors and hold them open while picking the items. Let's coordinate our actions to complete the task efficiently.\n\nI propose that I PICK the left_door_handle and OPEN it. Bob, you can WAIT for now. Chad, you can move to the right_door_handle and PICK it. \n\nMy action for this round: PICK left_door_handle\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I agree with your plan. Since I can only reach the right_door_handle, I will WAIT for now as you suggested. Chad, please go ahead and PICK the right_door_handle.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I agree with the plan. Since I can reach the right_door_handle, mug, and cup, I will PICK the right_door_handle as suggested.\n\nMy action for this round: PICK right_door_handle\nWhat do you think?"}, {"sender": "Alice", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK left_door_handle\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK right_door_handle\n"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION PICK left_door_handle\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK right_door_handle\nTask Constraints:\n faild, Chad cannot reach door\n"}, {"sender": "Action", "message": "Alice: PICK left_door_handle\nBob: WAIT\nChad: PICK right_door_handle"}, {"sender": "Alice", "message": "Hello Bob and Chad, it seems Chad cannot reach the right_door_handle. Let's revise our plan. \n\nBob, since you can reach the right_door_handle, please PICK it instead of waiting. Chad, you can WAIT for now.\n\nMy action for this round remains the same: PICK left_door_handle\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I understand the situation now. I will PICK the right_door_handle instead. Chad, please WAIT for now.\n\nMy action for this round: PICK right_door_handle\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I understand the revised plan. Since I cannot reach the right_door_handle, I will WAIT for now as suggested.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Alice", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK left_door_handle\nNAME Bob ACTION PICK right_door_handle\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK left_door_handle\nBob: PICK right_door_handle\nChad: WAIT"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Hello Bob and Chad, now that we have picked the door handles, let's proceed to open the cabinet doors. I will OPEN the left_door_handle, and Bob, you should OPEN the right_door_handle. Chad, please continue to WAIT for now.\n\nMy action for this round: OPEN left_door_handle\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I agree with the plan. I will OPEN the right_door_handle, and Chad, please continue to WAIT for now.\n\nMy action for this round: OPEN right_door_handle\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I understand the plan. I will continue to WAIT for now as you both open the cabinet doors.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Alice", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION OPEN left_door_handle\nNAME Bob ACTION OPEN right_door_handle\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: OPEN left_door_handle\nBob: OPEN right_door_handle\nChad: WAIT"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Hello Bob and Chad, now that the cabinet doors are open, let's proceed to pick the mug and cup. I will PICK the mug and PLACE it on the mug_coaster. Bob, please continue to hold the right_door_handle open. Chad, since you can reach the cup, please PICK the cup and PLACE it on the cup_coaster.\n\nMy action for this round: PICK mug PLACE mug_coaster\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I understand the plan. I will continue to hold the right_door_handle open while you both pick the mug and cup. Chad, please PICK the cup and PLACE it on the cup_coaster.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I agree with the plan. I will PICK the cup and PLACE it on the cup_coaster while Bob continues to hold the right_door_handle open.\n\nMy action for this round: PICK cup PLACE cup_coaster\nWhat do you think?"}, {"sender": "Alice", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK mug PLACE mug_coaster\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK cup PLACE cup_coaster"}, {"sender": "Feedback", "message": "\nThis previous response from [Alice] failed to parse!: 'Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK mug PLACE mug_coaster\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK cup PLACE cup_coaster'\nRobot Alice is already holding an object, can't pick another one. Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK mug PLACE mug_coaster\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK cup PLACE cup_coaster"}, {"sender": "Alice", "message": "Hello Bob and Chad, I made a mistake in my previous plan. I need to first let go of the left_door_handle before I can pick the mug. So, I will WAIT for this round. Bob, please continue to hold the right_door_handle open. Chad, please PICK the cup and PLACE it on the cup_coaster.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I understand the revised plan. Alice, you can WAIT for this round. I will continue to hold the right_door_handle open. Chad, please PICK the cup and PLACE it on the cup_coaster.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I understand the revised plan. Alice, you can WAIT for this round while you let go of the left_door_handle. Bob, please continue to hold the right_door_handle open. I will PICK the cup and PLACE it on the cup_coaster.\n\nMy action for this round: PICK cup PLACE cup_coaster\nWhat do you think?"}, {"sender": "Alice", "message": "Alice:\nGreat, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK cup PLACE cup_coaster"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT\nChad: PICK cup PLACE cup_coaster"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Hello Bob and Chad, now that the cabinet doors are open and Chad has placed the cup on its coaster, I will let go of the left_door_handle and PICK the mug. Bob, please continue to hold the right_door_handle open. Chad, you can WAIT for this round.\n\nMy action for this round: PICK mug PLACE mug_coaster\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I understand the plan. Alice, you can PICK the mug and PLACE it on the mug_coaster. I will continue to hold the right_door_handle open. Chad, please WAIT for this round.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I understand the plan. Alice, you can PICK the mug and PLACE it on the mug_coaster. Bob, please continue to hold the right_door_handle open. I will WAIT for this round.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Alice", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK mug PLACE mug_coaster\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "\nThis previous response from [Alice] failed to parse!: 'Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK mug PLACE mug_coaster\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT'\nRobot Alice is already holding an object, can't pick another one. Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION PICK mug PLACE mug_coaster\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Alice", "message": "Hello Bob and Chad, I made a mistake in my previous plan. I need to first let go of the left_door_handle before I can pick the mug. So, I will WAIT for this round. Bob, please continue to hold the right_door_handle open. Chad, you can also WAIT for this round.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I understand the revised plan. Alice, you can WAIT for this round to let go of the left_door_handle. I will continue to hold the right_door_handle open. Chad, please WAIT for this round as well.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I understand the revised plan. Alice, you can WAIT for this round to let go of the left_door_handle. Bob, please continue to hold the right_door_handle open. I will also WAIT for this round.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Alice", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT\nTask Constraints:\n faild, At least one robot should be acting, you can't all WAIT.\n"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT\nChad: WAIT"}, {"sender": "Alice", "message": "Hello Bob and Chad, I made a mistake in my previous plan. I need to first let go of the left_door_handle before I can pick the mug. So, I will WAIT for this round. Bob, please continue to hold the right_door_handle open. Chad, since we can't all WAIT, please PICK the mug and PLACE it on the mug_coaster.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Bob", "message": "Hello Alice and Chad, I understand the revised plan. Alice, you can WAIT for this round to let go of the left_door_handle. I will continue to hold the right_door_handle open. Chad, please PICK the mug and PLACE it on the mug_coaster.\n\nMy action for this round: WAIT\nWhat do you think?"}, {"sender": "Chad", "message": "Hello Alice and Bob, I understand the revised plan. Alice, you can WAIT for this round to let go of the left_door_handle. Bob, please continue to hold the right_door_handle open. I will PICK the mug and PLACE it on the mug_coaster.\n\nMy action for this round: PICK mug PLACE mug_coaster\nWhat do you think?"}, {"sender": "Alice", "message": "Great, we all have our actions for this round. Let's proceed with the plan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK mug PLACE mug_coaster"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT\nChad: PICK mug PLACE mug_coaster"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    