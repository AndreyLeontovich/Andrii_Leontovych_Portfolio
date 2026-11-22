import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
    })
);

app.use(express.json({ limit: "10kb" }));

// Защита от слишком частых запросов
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
});

// Проверка работы сервера
app.get("/", (req, res) => {
    res.json({
        message: "Server is running",
    });
});

// Получение данных из контактной формы
app.post("/api/contact", contactLimiter, async (req, res) => {
    const { name, email, phone = "", message } = req.body || {};

    // Проверка данных
    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof phone !== "string" ||
        typeof message !== "string" ||
        !name.trim() ||
        !message.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        name.length > 100 ||
        email.length > 254 ||
        phone.length > 50 ||
        message.length > 3000
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid form data",
        });
    }

    // Формируем сообщение для Telegram
    const text = `
🚀 New client request

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || "Not specified"}

💬 Message:
${message}
    `;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                }),
                signal: AbortSignal.timeout(10000),
            }
        );

        const data = await response.json();

        if (!response.ok || !data.ok) {
            console.error("Telegram error:", data.description);
            throw new Error("Telegram API error");
        }

        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });

    } catch (error) {
        console.error("Message delivery failed");

        res.status(500).json({
            success: false,
            message: "Failed to send message",
        });
    }
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});