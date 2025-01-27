import { model, generationConfig } from '../../../lib/api';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { input } = req.body;

    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    try {
        const result = await chatSession.sendMessage(input);
        const responseText = await result.response.text();
        res.status(200).json({ response: responseText });
    } catch (error) {
        console.error('Error during chat session:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}