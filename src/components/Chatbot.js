import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const qaPairs = [
    { question: "What is a balanced diet?", answer: "A balanced diet includes a mix of fruits, vegetables, proteins, grains, and dairy in the right proportions." },
    { question: "How much water should I drink daily?", answer: "The general recommendation is about 2 liters or 8 glasses per day, but individual needs may vary." },
    { question: "What are good sources of protein?", answer: "Great protein sources include chicken, fish, beans, lentils, tofu, eggs, and dairy products." },
    { question: "What are healthy snacks?", answer: "Healthy snacks include nuts, fruits, yogurt, vegetable sticks with hummus, and whole-grain crackers." },
    { question: "How can I lose weight?", answer: "To lose weight, focus on a calorie deficit, eat nutrient-dense foods, and incorporate regular exercise." },
    { question: "What are the benefits of fiber?", answer: "Fiber helps with digestion, maintains blood sugar levels, and keeps you feeling full longer." },
    { question: "How can I gain weight healthily?", answer: "To gain weight, consume calorie-dense foods like nuts, avocados, and lean proteins, and ensure you're in a calorie surplus." },
    { question: "What foods are rich in vitamins?", answer: "Fruits, vegetables, whole grains, and lean proteins are great sources of essential vitamins." },
    { question: "What is the role of carbohydrates?", answer: "Carbohydrates provide energy for your body and brain, and are essential for daily functioning." },
    { question: "Are fats bad for you?", answer: "Not all fats are bad. Healthy fats, like those in avocados, nuts, and olive oil, are essential for your body." },
    { question: "What are the benefits of omega-3 fatty acids?", answer: "Omega-3s support brain health, reduce inflammation, and promote heart health." },
    { question: "What should I eat before a workout?", answer: "A small meal with carbs and protein, like a banana with peanut butter, can fuel your workout." },
    { question: "What should I eat after a workout?", answer: "A combination of protein and carbs, like a protein shake or chicken with rice, helps with recovery." },
    { question: "How much sugar is too much?", answer: "The WHO recommends limiting added sugars to less than 10% of your daily caloric intake." },
    { question: "What are good sources of calcium?", answer: "Dairy products, leafy greens, almonds, and fortified foods are excellent sources of calcium." },
    { question: "What is intermittent fasting?", answer: "Intermittent fasting is an eating pattern where you cycle between periods of eating and fasting." },
    { question: "Is coffee good for you?", answer: "In moderation, coffee can improve focus and energy, but excessive consumption can lead to negative effects." },
    { question: "What are superfoods?", answer: "Superfoods like blueberries, salmon, and spinach are nutrient-dense and offer multiple health benefits." },
    { question: "How can I reduce bloating?", answer: "Drink water, avoid high-sodium foods, and eat slowly to reduce bloating." },
    { question: "What are probiotics?", answer: "Probiotics are live bacteria that promote gut health, found in foods like yogurt and kimchi." },
    { question: "What are prebiotics?", answer: "Prebiotics are fibers that feed good gut bacteria, found in foods like bananas, onions, and garlic." },
    { question: "How do I know if I have a food allergy?", answer: "Symptoms like rashes, swelling, or digestive issues after eating certain foods could indicate an allergy. Consult a doctor for testing." },
    { question: "What is gluten?", answer: "Gluten is a protein found in wheat, barley, and rye. It can cause issues for those with celiac disease or gluten sensitivity." },
    { question: "What are healthy breakfast options?", answer: "Oatmeal with fruit, Greek yogurt with nuts, and whole-grain toast with avocado are great options." },
    { question: "How much protein do I need daily?", answer: "The recommended daily intake is about 0.8 grams per kilogram of body weight, but it may vary based on activity level." },
    { question: "What are the dangers of processed foods?", answer: "Processed foods often contain high levels of sugar, salt, and unhealthy fats, which can lead to health issues." },
    { question: "What are antioxidants?", answer: "Antioxidants are compounds that protect your cells from damage caused by free radicals." },
    { question: "What foods help boost immunity?", answer: "Foods like citrus fruits, garlic, ginger, and yogurt can support your immune system." },
    { question: "How can I reduce cholesterol?", answer: "Eat more fiber, reduce saturated fats, and include heart-healthy foods like fish and nuts." },
    { question: "What is the keto diet?", answer: "The keto diet is a low-carb, high-fat diet that can help with weight loss and improve certain health conditions." },
    { question: "Are meal replacements healthy?", answer: "Meal replacements can be convenient but shouldn't replace whole, balanced meals regularly." },
    { question: "What are the benefits of green tea?", answer: "Green tea is rich in antioxidants and can support metabolism and brain health." },
    { question: "How do I avoid overeating?", answer: "Practice portion control, eat slowly, and avoid distractions while eating." },
    { question: "What is mindful eating?", answer: "Mindful eating involves being present and paying attention to your food, hunger, and fullness cues." },
    { question: "What are healthy fats?", answer: "Healthy fats include monounsaturated and polyunsaturated fats, found in foods like nuts, seeds, and fish." },
    { question: "Can I eat carbs and still lose weight?", answer: "Yes, as long as you're in a calorie deficit and focus on complex carbs like whole grains." },
    { question: "What are the signs of dehydration?", answer: "Signs include dark urine, dry mouth, fatigue, and dizziness." },
    { question: "How do I build muscle?", answer: "Consume sufficient protein, stay in a slight calorie surplus, and engage in strength training." },
    { question: "What is BMI?", answer: "BMI, or Body Mass Index, is a measure of body fat based on height and weight." },
    { question: "Are supplements necessary?", answer: "Supplements can help fill nutritional gaps but shouldn't replace a balanced diet." },
    { question: "What is the Mediterranean diet?", answer: "The Mediterranean diet focuses on fruits, vegetables, whole grains, olive oil, and lean proteins." },
    { question: "How do I manage cravings?", answer: "Distract yourself, drink water, and choose healthier alternatives to satisfy your cravings." },
    { question: "What are whole foods?", answer: "Whole foods are minimally processed and include fruits, vegetables, nuts, and whole grains." },
    { question: "What are empty calories?", answer: "Empty calories come from foods with little nutritional value, like sugary drinks and snacks." },
    { question: "What are the benefits of meal prepping?", answer: "Meal prepping saves time, reduces food waste, and helps with portion control." },
    { question: "What is the role of iron in the body?", answer: "Iron helps transport oxygen in the blood and supports energy production." },
    { question: "What are signs of vitamin D deficiency?", answer: "Symptoms include fatigue, bone pain, and frequent infections." },
    { question: "What is the role of magnesium?", answer: "Magnesium supports muscle function, energy production, and bone health." },
    { question: "What are good post-workout meals?", answer: "Grilled chicken with sweet potatoes, or a smoothie with protein powder and fruit, are great options." },
    { question: "What are plant-based proteins?", answer: "Plant-based proteins include lentils, chickpeas, tofu, quinoa, and nuts." },
    { question: "How can I eat healthy on a budget?", answer: "Focus on whole foods, buy in bulk, and plan meals ahead to reduce waste." },
    { question: "What are the benefits of turmeric?", answer: "Turmeric contains curcumin, which has anti-inflammatory and antioxidant properties." }
  ];

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add the user's message
    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Generate Dr. Alice's response
    const botResponse = generateResponse(input);
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setInput(""); // Clear the input field
  };

  const generateResponse = (input) => {
    const normalizedInput = input.toLowerCase();

    // Match the input with predefined Q&A pairs
    const matchedPair = qaPairs.find((qa) => normalizedInput.includes(qa.question.toLowerCase()));

    if (matchedPair) {
      return { sender: "bot", text: matchedPair.answer };
    }

    // Default response
    return { sender: "bot", text: "I'm here to help! Could you please provide more details?" };
  };

  return (
    <div className="chatbot-container">
      <h1>Chat with Dr. Alice</h1>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
