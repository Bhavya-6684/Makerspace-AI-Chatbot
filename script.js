// Chatbot configuration
const chatbot = {
    name: 'MakerAI',
    responses: {
        greeting: [
            "Hello! How can I assist you today?",
            "Hi there! What can I do for you?",
            "Hey! I'm here to help. What do you need?",
            "Greetings! How may I assist you?"
        ],
        goodbye: [
            "Goodbye! Have a great day!",
            "See you later! Take care!",
            "Farewell! Feel free to come back anytime!",
            "Bye! It was nice chatting with you!"
        ],
        help: [
            "I'm MakerAI, your AI assistant. I can help you with various tasks, answer questions, or just have a conversation. What would you like to know?",
            "I'm here to help! You can ask me questions, request assistance, or just chat. What do you need?",
            "I can assist with answering questions, providing information, or having a friendly conversation. How can I help you today?"
        ],
        default: [
            "That's interesting! Can you tell me more?",
            "I see. How can I help you with that?",
            "I understand. Is there anything specific you'd like to know?",
            "Thanks for sharing! What else can I help you with?",
            "That's a good point. Let me know if you need any assistance!"
        ]
    },
    
    // Pattern matching for user inputs
    patterns: {
        greeting: /\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/i,
        goodbye: /\b(bye|goodbye|see you|farewell|exit|quit)\b/i,
        help: /\b(help|what can you do|how can you help|what are you)\b/i,
        name: /\b(what is your name|who are you|what's your name)\b/i,
        time: /\b(time|what time|current time|clock)\b/i,
        weather: /\b(weather|temperature|rain|sunny)\b/i,
        joke: /\b(joke|funny|humor|laugh)\b/i,
        thank: /\b(thank|thanks|appreciate)\b/i,
        about_makerspace: /\b(what is makerspace|tell me about makerspace|makerspace ka matlab kya hota hai|makerspace ky hai|makerspace ke baare me batao)\b/i,
        how_to_join: /\b(how can i join makerspace|what is the process to apply for makerspace|how to be part of makerspace|makerspace join kaise karen|apply kaise karu makerspace me|members banne ka process)\b/i,
        machines_available: /\b(what machines are available|which equipment does makerspace have|tools in makerspace|kaun kaun se machines hai|lab me kya tools milenge|3d printer hai kya)\b/i,
        council_info: /\b(who is the council of makerspace|what is the council of makerspace|council ka matlab kya hota hai|council ke baare me batao|council members ka naam kya hai)\b/i,
        team_social_info: /\b(what does social team do|role of social team in makerspace|makerspace social team purpose)\b/i,
        team_pr_outreach: /\b(what does PR team do|role of outreach team|makerspace pr and outreach explanation)\b/i,
        member_definition: /\b(who is considered a makerspace member|what qualifies someone as a maker|how do I become a member|membership criteria|process to be counted as member|who can join makerspace)\b/i,
        membership_privileges: /\b(what benefits do members get|member privileges|rights of makerspace member|what can a member do|what is allowed to members|do members get special access)\b/i,
        external_involvement: /\b(can members join other clubs|membership with other clubs|joining other clubs)\b/i,
        access_rules: /\b(who can access makerspace|access rules|lab usage rules|what is allowed inside makerspace|makerspace access instructions|lab me kaise aana allowed hai|access rules kya hai|lab ka use kab kar sakte hai)\b/i,
        rfid_info: /\b(what is rfid card|rfid permissions|how does access card work|who receives rfid card)\b/i,
        makers_panchayat: /\b(what is makers panchayat|makers panchayat ka matlab kya hota hai|makers panchayat ke baare me batao|makers panchayat members ka naam kya hai)\b/i,
        pact_info: /\b(what is pact|pact ka matlab kya hota hai|pact ke baare me batao|pact members ka naam kya hai)\b/i,
        general_rules: /\b(what are the general rules of makerspace|general rules of makerspace|makerspace me kya general rules hai|general rules ka list kya hai|general rules ka schedule kya hai)\b/i,
        equipment_usage: /\b(equipment usage rules|machine usage policy|how to use tools safely|machine use karne ke rules|training chahiye kya|guard hata sakte hai kya)\b/i,
        project_material_use: /\b(project approval rule|material usage rules|how to dispose waste safely)\b/i,
        conduct_and_collaboration: /\b(conduct rules|collaboration rules|makerspace behavior guidelines|how to behave in makerspace|what is expected of members|code of conduct)\b/i,
        disciplinary_action_fines: /\b(disciplinary action|disciplinary action in makerspace|disciplinary action rules|disciplinary action policy|disciplinary action fines|disciplinary action penalties)\b/i,
        emergency_procedures: /\b(emergency procedure|emergency procedures in makerspace|emergency procedures rules|emergency procedures policy|emergency procedures fines|emergency procedures penalties)\b/i,
        resign_process: /\b(how to resign from makerspace|member leaving process|what if i want to leave makerspace|resigning rules|steps to exit makerspace)\b/i,
        gold_star: /\b(what is gold star|how to get gold star|gold star meaning|when do members receive gold star)\b/i,
        black_star: /\b(what is black star|how to get black star|black star meaning|when do members receive black star)\b/i,
        star_system_rules: /\b(what are the rules of the star system in makerspace|rules in the star system in makerspace|star system me kya rules hai|star system ka list kya hai|star system ka schedule kya hai|what is the star system in makerspace|star system in makerspace|makerspace me kya star system hai)\b/i,
    },
    
    // Get response based on user input
    getResponse(input) {
        const lowerInput = input.toLowerCase().trim();
        
        // Check patterns
        if (this.patterns.greeting.test(lowerInput)) {
            return this.getRandomResponse(this.responses.greeting);
        }
        
        if (this.patterns.goodbye.test(lowerInput)) {
            return this.getRandomResponse(this.responses.goodbye);
        }
        
        if (this.patterns.help.test(lowerInput)) {
            return this.getRandomResponse(this.responses.help);
        }
        
        if (this.patterns.name.test(lowerInput)) {
            return `I'm ${this.name}, your AI assistant! I'm here to help you with various tasks and answer your questions.`;
        }
        
        if (this.patterns.time.test(lowerInput)) {
            const now = new Date();
            return `The current time is ${now.toLocaleTimeString()}.`;
        }
        
        if (this.patterns.weather.test(lowerInput)) {
            return "I don't have access to real-time weather data, but I'd recommend checking a weather app or website for accurate information!";
        }

        if (this.patterns.about_makerspace.test(lowerInput)) {
            return "Makerspace is a community where students create, build, experiment, and learn by doing. It's a creative lab with tools, projects, mentorship, and a team that helps you bring your ideas to life.";
        }

        if (this.patterns.how_to_join.test(lowerInput)) {
            return "To join Makerspace, simply fill out the membership/registration form during open recruitment. Pass the interview session and you're in!";
        }

        if (this.patterns.machines_available.test(lowerInput)) {
            return "Makerspace has a variety of tools and equipment available for members to use. Some of the machines include 3D printers, CNC machines, and more.";
        }

        if (this.patterns.council_info.test(lowerInput)) {
            return "The council of makerspace is a group of students who are responsible for the overall management and decision-making of the makerspace. They are elected by the members and are responsible for the smooth functioning of the makerspace.";
        }

        if (this.patterns.team_social_info.test(lowerInput)) {
            return "The social team is responsible for creating and managing the social media presence of the makerspace. They are responsible for creating content, engaging with the community, and promoting the makerspace.";
        }

        if (this.patterns.team_pr_outreach.test(lowerInput)) {
            return "The PR team is responsible for creating and managing the public relations of the makerspace. They are responsible for creating content, engaging with the community, and promoting the makerspace.";
        }
        if (this.patterns.member_definition.test(lowerInput)) {
            return "A Makerspace Member is someone who has successfully completed the official recruitment/induction process. This includes submitting the required documents, clearing the interview/exam, and paying the membership fees. Once approved, the person becomes an active member of the Makerspace community.";
        }

        if (this.patterns.membership_privileges.test(lowerInput)) {
            return "Members gain access to the Makerspace tools, events, projects, mentorship, and collaboration opportunities. They are allowed to use lab equipment under guidance, propose new projects, work in teams, and participate in official events and initiatives.";
        }

        if (this.patterns.external_involvement.test(lowerInput)) {
            return "Yes, members may participate in other clubs or external initiatives. However, their involvement must not interfere with Makerspace responsibilities. If external work causes neglect of Makerspace duties, it may lead to disciplinary action such as Black Stars.";
        }

        if (this.patterns.access_rules.test(lowerInput)) {
            return "Access to Makerspace is a privilege. It must only be used for academic, research, or Makerspace-approved projects. Any misuse of tools or space may result in suspension or disciplinary action.";
        }

        if (this.patterns.rfid_info.test(lowerInput)) {
            return "Every verified member receives an RFID card that grants entry and access permissions according to their role. Access levels can be modified by authorized Makerspace officials.";
        }

        if (this.patterns.makers_panchayat.test(lowerInput)) {
            return "Makers’ Panchayat is a weekly gathering where members share their progress and updates on projects. If a member or lead fails to show meaningful contribution for 4 consecutive Panchayats, disciplinary action such as Black Stars may be applied.";
        }

        if (this.patterns.pact_info.test(lowerInput)) {
            return "PACT (Positive Accountability and Conduct Team) manages discipline, security, equipment inventory, and ensures smooth functioning. They monitor access logs, resolve misconduct, and maintain order inside Makerspace.";
        }

        if (this.patterns.general_rules.test(lowerInput)) {
            return "Access is limited to registered members and authorized staff. Keep the lab clean and organized, report hazards, do not remove tools without permission, follow safety procedures, and no loud music or horseplay in the lab.";
        }

        if (this.patterns.equipment_usage.test(lowerInput)) {
            return "Members must receive proper training or supervision before using hazardous equipment such as soldering stations, power tools, 3D printers, CNC, or laser cutters. Always follow safety SOPs. Never bypass guards or interlocks.";
        }

        if (this.patterns.project_material_use.test(lowerInput)) {
            return "All projects must be approved by the Maker-Space Council before starting. Materials must be used responsibly, hazardous items handled safely, and members must document their project progress.";
        }

        if (this.patterns.conduct_and_collaboration.test(lowerInput)) {
            return "Members must maintain a respectful and professional attitude. No harassment or discrimination is allowed. Members must collaborate, share knowledge, and avoid unethical or unsafe experiments.";
        }

        if (this.patterns.disciplinary_action_fines.test(lowerInput)) {
            return "Disciplinary levels:\n1️⃣ Minor: Verbal warning + ₹50 fine\n2️⃣ Moderate: Written warning + ₹100–₹300 fine\n3️⃣ Major: Suspension 1–2 weeks or ₹500 fine\n4️⃣ Severe: Permanent ban + ₹1000 fine and disciplinary report.";
        }

        if (this.patterns.emergency_procedures.test(lowerInput)) {
            return "In case of fire, electric shock, or injury: Alert others, inform PACT Associate/Tech Leads, use emergency tools if trained, evacuate calmly, and log the incident in the Incident Log Book.";
        }

        if (this.patterns.resign_process.test(lowerInput)) {
            return "To resign from Makerspace, follow these steps: Inform your team lead, submit a written resignation letter, clear all dues, and complete the exit process. Your RFID card will be deactivated.";
        }

        if (this.patterns.gold_star.test(lowerInput)) {
            return "Gold Stars are awarded to members who have shown exceptional commitment and contribution to Makerspace. They are recognized for their leadership, creativity, and dedication to the community.";
        }

        if (this.patterns.black_star.test(lowerInput)) {
            return "Black Stars are awarded to members who have shown significant misconduct or negligence in their duties. They are recognized for their lack of commitment and contribution to the community.";
        }

        if (this.patterns.star_system_rules.test(lowerInput)) {
            return "The Star System is a reward and discipline system that recognizes exceptional performance and addresses misconduct. Gold Stars are awarded for outstanding contributions, while Black Stars are applied for significant misbehavior. Members can work towards removing Black Stars through consistent positive performance.";
        }

        if (this.patterns.joke.test(lowerInput)) {
            const jokes = [
                "Chirag-Are you talking about'makerspace mai apne project se aag kaise lagani hai?'",
                "Aapko dictatorship sikhni hai?,you know president",
                "Not naveen bhaiya stealing laptops of student to bring student to makerspace",
                "makerspace ki mental health?"
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        }
        
        if (this.patterns.thank.test(lowerInput)) {
            return "You're welcome! I'm glad I could help. Is there anything else you need?";
        }
        
        // Default response
        return this.getRandomResponse(this.responses.default);
    },
    
    // Get random response from array
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
};

// DOM elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const voiceButton = document.getElementById('voiceButton');
const voiceStatus = document.getElementById('voiceStatus');
const sphereContainer = document.getElementById('sphereContainer');
const sphere = document.getElementById('sphere');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let isListening = false;

// Audio analysis variables
let audioContext;
let analyser;
let microphone;
let dataArray;
let animationFrameId;
let pitchValue = 150; // Initial pitch (middle of human voice range 80-300Hz)
let volumeValue = 0;

// Sphere configuration
const SPHERE_RADIUS = 200;
const DOT_COUNT = 300;
let dots = [];
let idleAnimationId = null;
let isAnalyzingAudio = false;

// Background particles (will be initialized after DOM loads)
let bgParticles;
let particles = [];

// Initialize chatbot
function initChatbot() {
    // Focus on input
    userInput.focus();
    
    // Add event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Initialize sphere
    initSphere();
    
    // Initialize background particles
    initBackgroundParticles();
    
    // Initialize speech features
    initSpeechFeatures();
}

// Add message to chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    
    if (isUser) {
        avatarDiv.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 10a5 5 0 100-10 5 5 0 000 10zM10 12a7.5 7.5 0 00-7.5 7.5.75.75 0 001.5 0 6 6 0 0112 0 .75.75 0 001.5 0A7.5 7.5 0 0010 12z"/>
            </svg>
        `;
    } else {
        avatarDiv.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                <circle cx="10" cy="10" r="2"/>
            </svg>
        `;
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const textP = document.createElement('p');
    textP.textContent = content;
    
    contentDiv.appendChild(textP);
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator-container';
    typingDiv.id = 'typingIndicator';
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            <circle cx="10" cy="10" r="2"/>
        </svg>
    `;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    
    contentDiv.appendChild(typingIndicator);
    typingDiv.appendChild(avatarDiv);
    typingDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Scroll to bottom of chat
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message
function sendMessage(messageOverride) {
    const message = typeof messageOverride === 'string' ? messageOverride.trim() : userInput.value.trim();
    
    if (!message) {
        return;
    }
    
    // Add user message
    addMessage(message, true);
    
    // Clear input
    if (!messageOverride) {
        userInput.value = '';
    } else {
        userInput.value = '';
    }
    userInput.focus();
    
    // Disable input and button
    userInput.disabled = true;
    sendButton.disabled = true;
    if (voiceButton) {
        voiceButton.disabled = true;
    }
    
    if (isListening && recognition) {
        recognition.stop();
    }
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI thinking time
    setTimeout(() => {
        removeTypingIndicator();
        
        // Get bot response
        const response = chatbot.getResponse(message);
        
        // Add bot message
        addMessage(response, false);
        speak(response);
        
        // Re-enable input and button
        userInput.disabled = false;
        sendButton.disabled = false;
        if (voiceButton && SpeechRecognition) {
            voiceButton.disabled = false;
        }
        userInput.focus();
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

function initSpeechFeatures() {
    if (!voiceButton || !voiceStatus) {
        return;
    }
    
    if (!SpeechRecognition) {
        voiceButton.disabled = true;
        voiceButton.title = 'Speech recognition is not supported in this browser.';
        voiceStatus.textContent = 'Voice input is not supported in this browser.';
        setTimeout(() => {
            if (voiceStatus.textContent === 'Voice input is not supported in this browser.') {
                voiceStatus.textContent = '';
            }
        }, 5000);
        return;
    }
    
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = navigator.language || 'en-US';
    
    voiceButton.addEventListener('click', toggleVoiceInput);
    
    recognition.addEventListener('start', () => {
        isListening = true;
        voiceButton.classList.add('listening');
        voiceButton.setAttribute('aria-pressed', 'true');
        voiceStatus.textContent = 'Listening...';
    });
    
    recognition.addEventListener('end', () => {
        isListening = false;
        voiceButton.classList.remove('listening');
        voiceButton.setAttribute('aria-pressed', 'false');
        if (voiceStatus.textContent === 'Listening...') {
            voiceStatus.textContent = '';
        }
        if (!userInput.disabled) {
            voiceButton.disabled = false;
        }
    });
    
    recognition.addEventListener('result', (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        const cleaned = transcript.trim();
        
        if (cleaned) {
            voiceStatus.textContent = cleaned;
        }
        
        const isFinal = event.results[event.results.length - 1].isFinal;
        if (isFinal && cleaned) {
            voiceStatus.textContent = '';
            sendMessage(cleaned);
        }
    });
    
    recognition.addEventListener('error', (event) => {
        voiceStatus.textContent = `Voice error: ${event.error}`;
        voiceButton.classList.remove('listening');
        voiceButton.setAttribute('aria-pressed', 'false');
        isListening = false;
        setTimeout(() => {
            if (voiceStatus.textContent.startsWith('Voice error')) {
                voiceStatus.textContent = '';
            }
        }, 4000);
    });
}

function toggleVoiceInput() {
    if (!recognition) {
        return;
    }
    
    if (isListening) {
        recognition.stop();
        stopAudioAnalysis();
    } else {
        try {
            speechSynthesis.cancel();
        } catch (error) {
            // If speech synthesis isn't available, safely ignore
        }
        voiceButton.disabled = false;
        recognition.start();
        startAudioAnalysis();
    }
}

function speak(text) {
    if (!('speechSynthesis' in window)) {
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = navigator.language || 'en-US';
    
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

// Initialize sphere of dots
function initSphere() {
    if (!sphere) return;
    
    sphere.innerHTML = '';
    dots = [];
    
    // Generate dots in a sphere pattern using spherical coordinates
    for (let i = 0; i < DOT_COUNT; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        // Generate points on a sphere using Fibonacci sphere algorithm
        const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle
        const theta = goldenAngle * i;
        const y = 1 - (i / (DOT_COUNT - 1)) * 2; // y goes from 1 to -1
        const radius = Math.sqrt(1 - y * y); // radius at y
        
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        
        // Convert to pixel coordinates
        const px = SPHERE_RADIUS + x * SPHERE_RADIUS;
        const py = SPHERE_RADIUS + y * SPHERE_RADIUS;
        
        dot.style.left = px + 'px';
        dot.style.top = py + 'px';
        
        // Store 3D coordinates for animation
        dot.dataset.x = x;
        dot.dataset.y = y;
        dot.dataset.z = z;
        
        sphere.appendChild(dot);
        dots.push(dot);
    }
    
    // Start idle animation
    animateSphereIdle();
}

// Idle animation for sphere
function animateSphereIdle() {
    if (isAnalyzingAudio) return; // Don't run if audio analysis is active
    
    let angle = 0;
    const animate = () => {
        if (isAnalyzingAudio) return; // Stop if audio analysis starts
        
        angle += 0.005;
        
        dots.forEach((dot, index) => {
            const x = parseFloat(dot.dataset.x);
            const y = parseFloat(dot.dataset.y);
            const z = parseFloat(dot.dataset.z);
            
            // Rotate around Y axis
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const newX = x * cos - z * sin;
            const newZ = x * sin + z * cos;
            
            // Perspective projection
            const scale = 200 / (200 + newZ * SPHERE_RADIUS);
            const px = SPHERE_RADIUS + newX * SPHERE_RADIUS * scale;
            const py = SPHERE_RADIUS + y * SPHERE_RADIUS * scale;
            
            dot.style.transform = `translate(${px - 2}px, ${py - 2}px) scale(${scale})`;
            dot.style.opacity = 0.5 + (newZ + 1) * 0.25;
        });
        
        idleAnimationId = requestAnimationFrame(animate);
    };
    animate();
}

// Stop idle animation
function stopIdleAnimation() {
    if (idleAnimationId) {
        cancelAnimationFrame(idleAnimationId);
        idleAnimationId = null;
    }
}

// Update sphere based on pitch
function updateSphereFromPitch(pitch, volume) {
    if (!sphere || dots.length === 0 || !isAnalyzingAudio) return;
    
    // Normalize pitch: human voice range is roughly 80-300Hz
    // Map to 0-1 range where 80Hz = 0 (shrink) and 300Hz = 1 (burst)
    const minPitch = 80;
    const maxPitch = 300;
    const normalizedPitch = Math.min(1, Math.max(0, (pitch - minPitch) / (maxPitch - minPitch)));
    
    // Normalize volume (0-1 range)
    const normalizedVolume = Math.min(1, Math.max(0, volume / 80));
    
    // Scale factor: burst out when pitch is high, shrink when low
    // Base scale: 0.7 (shrunk) to 1.5 (burst)
    const baseScale = 0.7 + normalizedPitch * 0.8;
    // Volume adds additional expansion (up to 0.4x more)
    const volumeScale = 1 + normalizedVolume * 0.4;
    const totalScale = baseScale * volumeScale;
    
    // Rotation speed based on pitch
    const rotationSpeed = normalizedPitch * 0.015;
    const angle = Date.now() * 0.001 * rotationSpeed;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    
    // Update each dot
    dots.forEach((dot, index) => {
        const x = parseFloat(dot.dataset.x);
        const y = parseFloat(dot.dataset.y);
        const z = parseFloat(dot.dataset.z);
        
        // Rotate around Y axis based on pitch
        const newX = x * cos - z * sin;
        const newZ = x * sin + z * cos;
        
        // Calculate new position with scaling
        const scaledRadius = SPHERE_RADIUS * totalScale;
        const px = SPHERE_RADIUS + newX * scaledRadius;
        const py = SPHERE_RADIUS + y * scaledRadius;
        
        // Perspective projection
        const perspectiveDistance = 300;
        const perspectiveScale = perspectiveDistance / (perspectiveDistance + newZ * scaledRadius * 0.5);
        const finalX = SPHERE_RADIUS + newX * scaledRadius * perspectiveScale;
        const finalY = SPHERE_RADIUS + y * scaledRadius * perspectiveScale;
        
        dot.style.transform = `translate(${finalX - 2}px, ${finalY - 2}px) scale(${perspectiveScale})`;
        
        // Opacity based on depth and volume
        const depthOpacity = 0.4 + (newZ + 1) * 0.3;
        const volumeOpacity = normalizedVolume * 0.3;
        dot.style.opacity = Math.min(1, depthOpacity + volumeOpacity);
        
        // Color intensity based on pitch and volume
        const pitchIntensity = 0.5 + normalizedPitch * 0.5;
        const volumeIntensity = normalizedVolume * 0.3;
        const intensity = Math.min(1, pitchIntensity + volumeIntensity);
        
        dot.style.background = `rgba(99, 102, 241, ${intensity})`;
        dot.style.boxShadow = `0 0 ${4 + normalizedVolume * 8 + normalizedPitch * 4}px rgba(99, 102, 241, ${intensity * 0.9})`;
    });
}

// Start audio analysis for pitch detection
async function startAudioAnalysis() {
    try {
        stopIdleAnimation(); // Stop idle animation
        isAnalyzingAudio = true;
        
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Create audio context
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        
        // Configure analyser
        analyser.fftSize = 2048;
        analyser.smoothingTimeConstant = 0.8;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        
        // Connect microphone to analyser
        microphone.connect(analyser);
        
        // Start analysis loop
        analyzeAudio();
    } catch (error) {
        console.error('Error accessing microphone:', error);
        voiceStatus.textContent = 'Microphone access denied.';
        isAnalyzingAudio = false;
        animateSphereIdle(); // Resume idle animation
    }
}

// Stop audio analysis
function stopAudioAnalysis() {
    isAnalyzingAudio = false;
    
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    if (microphone) {
        microphone.disconnect();
        microphone = null;
    }
    
    if (audioContext && audioContext.state !== 'closed') {
        audioContext.close();
        audioContext = null;
    }
    
    analyser = null;
    dataArray = null;
    pitchValue = 0;
    volumeValue = 0;
    
    // Reset sphere to default state and resume idle animation
    if (dots.length > 0) {
        dots.forEach(dot => {
            dot.style.background = 'rgba(99, 102, 241, 0.8)';
            dot.style.boxShadow = '0 0 6px rgba(99, 102, 241, 0.6)';
        });
    }
    
    // Resume idle animation
    animateSphereIdle();
}

// Analyze audio and calculate pitch
function analyzeAudio() {
    if (!analyser || !dataArray) return;
    
    // Get frequency data for volume
    const frequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencyData);
    
    // Calculate volume (average amplitude)
    let sum = 0;
    for (let i = 0; i < frequencyData.length; i++) {
        sum += frequencyData[i];
    }
    volumeValue = sum / frequencyData.length;
    
    // Get time domain data for pitch detection
    const timeData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(timeData);
    
    // Calculate pitch using autocorrelation
    const pitch = calculatePitch(timeData, audioContext.sampleRate);
    
    // Smooth pitch transitions
    if (pitch) {
        pitchValue = pitchValue * 0.7 + pitch * 0.3; // Exponential smoothing
    } else if (volumeValue < 5) {
        // Fade toward neutral when quiet
        pitchValue = pitchValue * 0.95 + 150 * 0.05; // Return to neutral (150Hz)
    }
    
    // Update sphere animation (always update when analyzing)
    updateSphereFromPitch(pitchValue, volumeValue);
    
    // Continue analysis
    animationFrameId = requestAnimationFrame(analyzeAudio);
}

// Calculate pitch using autocorrelation
function calculatePitch(buffer, sampleRate) {
    if (!buffer || buffer.length === 0) return null;
    
    // Find the period by autocorrelation
    let bestOffset = -1;
    let bestCorrelation = 0;
    
    // Calculate RMS to check if there's enough signal
    let sumSquares = 0;
    for (let i = 0; i < buffer.length; i++) {
        const val = buffer[i] - 128; // Normalize to -128 to 127
        sumSquares += val * val;
    }
    const rms = Math.sqrt(sumSquares / buffer.length);
    
    if (rms < 10) return null; // Too quiet, no pitch detected
    
    // Autocorrelation: find the period
    const minPeriod = 40; // Minimum period in samples (high pitch limit ~1100Hz)
    const maxPeriod = Math.min(buffer.length / 2, 2000); // Maximum period in samples (low pitch limit ~20Hz)
    
    for (let offset = minPeriod; offset < maxPeriod; offset++) {
        let correlation = 0;
        for (let i = 0; i < buffer.length - offset; i++) {
            const val1 = buffer[i] - 128;
            const val2 = buffer[i + offset] - 128;
            correlation += val1 * val2;
        }
        
        // Normalize correlation
        correlation = correlation / (buffer.length - offset);
        
        if (correlation > bestCorrelation) {
            bestCorrelation = correlation;
            bestOffset = offset;
        }
    }
    
    // Threshold check
    if (bestOffset === -1 || bestCorrelation < rms * 0.1) return null;
    
    // Convert offset to frequency (pitch in Hz)
    const pitch = sampleRate / bestOffset;
    
    // Filter out unrealistic pitches (human voice range is roughly 80-300Hz for fundamental frequency)
    if (pitch < 50 || pitch > 1000) return null;
    
    return pitch;
}

// Initialize background particles
function initBackgroundParticles() {
    bgParticles = document.getElementById('bgParticles');
    if (!bgParticles) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 200);
    }
    
    // Continuously create new particles
    setInterval(() => {
        if (particles.length < particleCount) {
            createParticle();
        }
    }, 3000);
}

function createParticle() {
    if (!bgParticles) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 5;
    const duration = 10 + Math.random() * 10;
    
    particle.style.left = startX + 'px';
    particle.style.animationDelay = delay + 's';
    particle.style.animationDuration = duration + 's';
    
    // Random size
    const size = 1 + Math.random() * 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random opacity
    particle.style.opacity = 0.3 + Math.random() * 0.4;
    
    bgParticles.appendChild(particle);
    particles.push(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            particles = particles.filter(p => p !== particle);
        }
    }, (duration + delay) * 1000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initChatbot);
