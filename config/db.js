const mongoose = require('mongoose');

// Définition de la fonction connectDB
const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;  // Utilisation de l'URI depuis le fichier .env
        await mongoose.connect(uri);  // Connexion sans options obsolètes
        console.log("MongoDB connecté avec succès...");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error.message);
        process.exit(1);  // Arrêter l'application si la connexion échoue
    }
};

// Export de la fonction connectDB
module.exports = connectDB;


