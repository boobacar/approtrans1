import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter la soumission du formulaire ici
    alert("Message envoyé !");
  };

  return (
    <section className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#aebf74] mb-4">
          Contactez-nous
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Vous avez une question ? Un projet à discuter ? N’hésitez pas à nous
          contacter.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-[#aebf74] mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fdc767]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-[#aebf74] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fdc767]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-[#aebf74] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fdc767]"
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#fdc767] text-black font-semibold py-3 rounded-2xl hover:bg-[#fba964] transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
