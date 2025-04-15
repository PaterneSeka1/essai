
import React, { useState, } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importation des icônes

export default function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const location = useLocation(); // Utilisation de useLocation pour obtenir l'URL actuelle
    console.log(location); // Affiche l'URL actuelle dans la console
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                INSCRIPTION
                </h2>
                <form className="p-6 rounded-lg space-y-4">
                    {/* Champ Nom d'utilisateur */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                        Nom d'utilisateur
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="JohnDoe"
                        />
                    </div>
                    {/* Champ Email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="exemple@email.com"
                        />
                    </div>
                    {/* Champ Mot de passe avec bouton de visibilité */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                        Mot de passe
                        </label>
                        <div className="relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            placeholder="********"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-700"
                        >
                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        </div>
                    </div>
                    {/* Bouton Soumettre */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                    >
                        S'inscrire
                    </button>
                        <p className="text-sm text-gray-600 mt-4 text-center">
                            Déjà inscrit ?{" "}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                Se connecter
                            </Link>
                        </p>
                </form>
            </div>
        </div>
    );
}
