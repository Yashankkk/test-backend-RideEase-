const Contact = require("../../models/Contact");

const contact = async (req, res) => {
    try {
        const {fullName, email, phone, message } = req.body;
        if (!fullName || email || phone || message ) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const contact = new Contact({ fullname, email, phone, message});
        await contact.save();
        res.status(201).json({ message: "Message sent successfully!" });
        
    } catch(error) {
        console.error("Error submitting contact form", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {contact};