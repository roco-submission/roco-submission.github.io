const jsonData0 = [{"sender": "Alice", "message": "Hi Bob, I see the following objects on the table:\napple: (-0.24, 0.37, 0.30)\nbanana: (-0.25, 0.59, 0.27)\nmilk: (-0.77, 0.42, 0.47)\nsoda_can: (-0.71, 0.61, 0.33)\nbread: (-0.06, 0.42, 0.31)\ncereal: (-0.47, 0.38, 0.44)\n\nMy gripper is empty and at (0.29, 0.06, 0.51).\n\nI will pick up the apple. Here is my plan:\nNAME Alice ACTION PICK apple PATH [(0.29, 0.15, 0.51), (0.29, 0.25, 0.51), (0.02, 0.31, 0.51), (-0.24, 0.37, 0.51)]\n\nWhat's your plan, Bob? PROCEED"}, {"sender": "Bob", "message": "Hi Alice, my gripper is empty and at (0.35, 1.05, 0.62). I will pick up the banana. Here is my plan:\nNAME Bob ACTION PICK banana PATH [(0.35, 0.95, 0.62), (0.35, 0.8, 0.62), (0.05, 0.7, 0.62), (-0.25, 0.59, 0.62)]\n\nPROCEED"}, {"sender": "Alice", "message": "Great, Bob. Let's execute our plans. Here is the final output:\n\nEXECUTE\nNAME Alice ACTION PICK apple PATH [(0.29, 0.15, 0.51), (0.29, 0.25, 0.51), (0.02, 0.31, 0.51), (-0.24, 0.37, 0.51)]\nNAME Bob ACTION PICK banana PATH [(0.35, 0.95, 0.62), (0.35, 0.8, 0.62), (0.05, 0.7, 0.62), (-0.25, 0.59, 0.62)]\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK apple PATH [(0.29, 0.15, 0.51), (0.29, 0.25, 0.51), (0.02, 0.31, 0.51), (-0.24, 0.37, 0.51)]\nBob: PICK banana PATH [(0.35, 0.95, 0.62), (0.35, 0.8, 0.62), (0.05, 0.7, 0.62), (-0.25, 0.59, 0.62)]"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Hi Bob, I'm currently holding the apple. I'll place it in bin_front_left. My proposed action is:\nNAME Alice ACTION PLACE apple bin_front_left PATH [(-0.23, 0.37, 0.5), (0.0, 0.37, 0.5), (0.15, 0.41, 0.5), (0.25, 0.41, 0.5)]\nWhat's your plan? PROCEED"}, {"sender": "Bob", "message": "Hi Alice, I'm currently holding the banana. I'll place it in bin_front_right. My proposed action is:\nNAME Bob ACTION PLACE banana bin_front_right PATH [(-0.25, 0.60, 0.5), (0.0, 0.60, 0.5), (0.45, 0.51, 0.5), (0.65, 0.41, 0.5)]\nLet's execute our actions. EXECUTE\nNAME Alice ACTION PLACE apple bin_front_left PATH [(-0.23, 0.37, 0.5), (0.0, 0.37, 0.5), (0.15, 0.41, 0.5), (0.25, 0.41, 0.5)]\nNAME Bob ACTION PLACE banana bin_front_right PATH [(-0.25, 0.60, 0.5), (0.0, 0.60, 0.5), (0.45, 0.51, 0.5), (0.65, 0.41, 0.5)]\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PLACE apple bin_front_left PATH [(-0.23, 0.37, 0.5), (0.0, 0.37, 0.5), (0.15, 0.41, 0.5), (0.25, 0.41, 0.5)]\nBob: PLACE banana bin_front_right PATH [(-0.25, 0.60, 0.5), (0.0, 0.60, 0.5), (0.45, 0.51, 0.5), (0.65, 0.41, 0.5)]"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Hi Bob, I am going to pick up the bread from the table. My current gripper position is (0.29, 0.06, 0.51) and the bread is at (-0.06, 0.42, 0.31). \n\nMy action is: \nACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\n\nWhat's your plan? PROCEED"}, {"sender": "Bob", "message": "Hi Alice, I will pick up the soda_can from the table. My current gripper position is (0.36, 1.05, 0.61) and the soda_can is at (-0.71, 0.61, 0.34).\n\nMy action is:\nACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\n\nPROCEED"}, {"sender": "Alice", "message": "Hi Bob, your plan to pick up the soda_can looks good. Now, I am going to place the bread into the bin_front_middle slot. The slot is at (0.45, 0.41, 0.36) and my current gripper position is (-0.06, 0.42, 0.51).\n\nMy action is:\nACTION PLACE bread bin_front_middle PATH [(-0.06, 0.42, 0.61), (0.15, 0.42, 0.61), (0.35, 0.41, 0.61), (0.45, 0.41, 0.61)]\n\nWhat's your plan? PROCEED"}, {"sender": "Bob", "message": "Hi Alice, I will place the soda_can into the bin_back_middle slot. The slot is at (0.45, 0.58, 0.36) and my current gripper position is (-0.71, 0.61, 0.61).\n\nMy action is:\nACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]\n\nEXECUTE\nNAME Alice ACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nNAME Bob ACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.42, 0.61), (0.15, 0.42, 0.61), (0.35, 0.41, 0.61), (0.45, 0.41, 0.61)]\nNAME Bob ACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]"}, {"sender": "Feedback", "message": "\nThis previous response from [Bob] failed to parse!: 'Hi Alice, I will place the soda_can into the bin_back_middle slot. The slot is at (0.45, 0.58, 0.36) and my current gripper position is (-0.71, 0.61, 0.61).\n\nMy action is:\nACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]\n\nEXECUTE\nNAME Alice ACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nNAME Bob ACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.42, 0.61), (0.15, 0.42, 0.61), (0.35, 0.41, 0.61), (0.45, 0.41, 0.61)]\nNAME Bob ACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]'\nResponse must contain exactly one ACTION for each robot, and must contain all keywords: ['NAME', 'ACTION', 'PATH'] Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "Hi Alice, I will place the soda_can into the bin_back_middle slot. The slot is at (0.45, 0.58, 0.36) and my current gripper position is (-0.71, 0.61, 0.61).\n\nMy action is:\nACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]\n\nEXECUTE\nNAME Alice ACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nNAME Bob ACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.42, 0.61), (0.15, 0.42, 0.61), (0.35, 0.41, 0.61), (0.45, 0.41, 0.61)]\nNAME Bob ACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nNAME Bob ACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.42, 0.61), (0.15, 0.42, 0.61), (0.35, 0.41, 0.61), (0.45, 0.41, 0.61)]\nNAME Bob ACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]"}, {"sender": "Feedback", "message": "\nThis previous response from [Alice] failed to parse!: 'EXECUTE\nNAME Alice ACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nNAME Bob ACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.42, 0.61), (0.15, 0.42, 0.61), (0.35, 0.41, 0.61), (0.45, 0.41, 0.61)]\nNAME Bob ACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]'\nResponse must contain exactly one ACTION for each robot, and must contain all keywords: ['NAME', 'ACTION', 'PATH'] Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "EXECUTE\nNAME Alice ACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nNAME Bob ACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.42, 0.61), (0.15, 0.42, 0.61), (0.35, 0.41, 0.61), (0.45, 0.41, 0.61)]\nNAME Bob ACTION PLACE soda_can bin_back_middle PATH [(-0.71, 0.61, 0.61), (-0.4, 0.6, 0.61), (0.15, 0.58, 0.61), (0.45, 0.58, 0.61)]"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nNAME Bob ACTION PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK bread PATH [(0.29, 0.15, 0.51), (0.15, 0.25, 0.51), (0.05, 0.35, 0.51), (-0.06, 0.42, 0.51)]\nBob: PICK soda_can PATH [(0.36, 0.9, 0.61), (0.1, 0.75, 0.61), (-0.4, 0.68, 0.61), (-0.71, 0.61, 0.61)]"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Hi Bob, I'm currently holding the bread. I will place the bread in the bin_front_middle slot. Here's my action:\n\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.41, 0.45), (0.1, 0.41, 0.45), (0.3, 0.41, 0.45), (0.45, 0.41, 0.45)]\n\nWhat will you do?"}, {"sender": "Bob", "message": "Hi Alice, I'm currently holding the soda_can. I will place the soda_can in the bin_back_right slot. Here's my action:\n\nNAME Bob ACTION PLACE soda_can bin_back_right PATH [(-0.71, 0.62, 0.45), (-0.4, 0.62, 0.45), (0.1, 0.62, 0.45), (0.65, 0.58, 0.45)]\n\nLet's execute these actions."}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION PLACE bread bin_front_middle PATH [(-0.06, 0.41, 0.45), (0.1, 0.41, 0.45), (0.3, 0.41, 0.45), (0.45, 0.41, 0.45)]\nNAME Bob ACTION PLACE soda_can bin_back_right PATH [(-0.71, 0.62, 0.45), (-0.4, 0.62, 0.45), (0.1, 0.62, 0.45), (0.65, 0.58, 0.45)]"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PLACE bread bin_front_middle PATH [(-0.06, 0.41, 0.45), (0.1, 0.41, 0.45), (0.3, 0.41, 0.45), (0.45, 0.41, 0.45)]\nBob: PLACE soda_can bin_back_right PATH [(-0.71, 0.62, 0.45), (-0.4, 0.62, 0.45), (0.1, 0.62, 0.45), (0.65, 0.58, 0.45)]"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "Hi Bob, let's start putting the groceries away. Currently, my gripper is at (0.30, 0.07, 0.50) and holding nothing. I'm planning to pick up the milk at (-0.77, 0.42, 0.47). Here's my path:\n\nPICK milk PATH [(0.30, 0.07, 0.50), (0.00, 0.20, 0.60), (-0.40, 0.35, 0.60), (-0.77, 0.42, 0.60)]\n\nWhat do you think? PROCEED"}, {"sender": "Bob", "message": "Hi Alice, your path looks good. My gripper is at (0.36, 1.05, 0.61) and holding nothing. I will pick up the cereal at (-0.47, 0.38, 0.44). Here's my path:\n\nPICK cereal PATH [(0.36, 1.05, 0.61), (0.05, 0.80, 0.60), (-0.20, 0.50, 0.60), (-0.47, 0.38, 0.60)]\n\nWhat do you think? PROCEED"}, {"sender": "Alice", "message": "Hi Bob, your path looks good too. Let's execute these actions:\n\nEXECUTE\nNAME Alice ACTION PICK milk PATH [(0.30, 0.07, 0.50), (0.00, 0.20, 0.60), (-0.40, 0.35, 0.60), (-0.77, 0.42, 0.60)]\nNAME Bob ACTION PICK cereal PATH [(0.36, 1.05, 0.61), (0.05, 0.80, 0.60), (-0.20, 0.50, 0.60), (-0.47, 0.38, 0.60)]"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK milk PATH [(0.30, 0.07, 0.50), (0.00, 0.20, 0.60), (-0.40, 0.35, 0.60), (-0.77, 0.42, 0.60)]\nBob: PICK cereal PATH [(0.36, 1.05, 0.61), (0.05, 0.80, 0.60), (-0.20, 0.50, 0.60), (-0.47, 0.38, 0.60)]"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "Bob, I currently have the milk in my gripper. I'll place the milk in bin_back_left.\n\nMy action will be: \nNAME Alice ACTION PLACE milk bin_back_left PATH [(-0.76, 0.42, 0.6), (-0.5, 0.5, 0.6), (0.0, 0.5, 0.6), (0.25, 0.58, 0.6)]\n\nWhat will you do?"}, {"sender": "Bob", "message": "Alice, I currently have the cereal in my gripper. I'll place the cereal in bin_back_middle.\n\nMy action will be: \nNAME Bob ACTION PLACE cereal bin_back_middle PATH [(-0.46, 0.38, 0.6), (-0.23, 0.48, 0.6), (0.11, 0.53, 0.6), (0.45, 0.58, 0.6)]\n\nNow we can execute our actions.\n\nEXECUTE\nNAME Alice ACTION PLACE milk bin_back_left PATH [(-0.76, 0.42, 0.6), (-0.5, 0.5, 0.6), (0.0, 0.5, 0.6), (0.25, 0.58, 0.6)]\nNAME Bob ACTION PLACE cereal bin_back_middle PATH [(-0.46, 0.38, 0.6), (-0.23, 0.48, 0.6), (0.11, 0.53, 0.6), (0.45, 0.58, 0.6)]"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PLACE milk bin_back_left PATH [(-0.76, 0.42, 0.6), (-0.5, 0.5, 0.6), (0.0, 0.5, 0.6), (0.25, 0.58, 0.6)]\nBob: PLACE cereal bin_back_middle PATH [(-0.46, 0.38, 0.6), (-0.23, 0.48, 0.6), (0.11, 0.53, 0.6), (0.45, 0.58, 0.6)]"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    