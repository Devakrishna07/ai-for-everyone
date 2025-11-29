import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PopupStatus from "../components/ui/PopupStatus";

export default function SubmitStoryForm() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [popupState, setPopupState] = useState("loading");

  // 🔑 UPDATED: Default values added for all fields
  const [formData, setFormData] = useState({
    name: "Jane Doe", 
    ageGroup: "Adults", // Default to a valid option
    title: "My AI-Generated Title", 
    role: "AI Enthusiast", 
    story: "This is my placeholder story about artificial intelligence...", 
    toolsUsed: "ChatGPT, Midjourney", 
    location: "Global Citizen", 
    allowPublish: "Yes", 
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowPopup(true);
    setPopupState("loading");

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeSk0lggrZQxwGmF6Gs1p18KicVbPs3nykt9bYjUw8ZXgYH_Q/formResponse";

    const formBody = new FormData();

    // REQUIRED hidden Google Form fields
    formBody.append("fvv", "1");
    formBody.append("draftResponse", "[]");
    formBody.append("pageHistory", "0");
    formBody.append("fbzx", Date.now().toString()); 

    // Your fields (These IDs must be confirmed as 100% correct)
    formBody.append("entry.2005620554", formData.name);
    formBody.append("entry.1045781291", formData.ageGroup);
    formBody.append("entry.1065046570", formData.title);
    formBody.append("entry.839337160", formData.role);
    formBody.append("entry.1166974658", formData.story);
    formBody.append("entry.839073006", formData.toolsUsed);
    formBody.append("entry.1985046271", formData.location);
    formBody.append("entry.1282912892", formData.allowPublish);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      });

      // Success logic runs after the request is sent
      setPopupState("success");
      setTimeout(() => navigate("/stories"), 1500); 

    } catch (error) {
      console.error("Network/CORS Submission Error (data may still have been sent):", error);
      setPopupState("error");
      setTimeout(() => setShowPopup(false), 3000); 
    }
  };

  const togglePublish = () => {
    setFormData((prev) => ({
      ...prev,
      allowPublish: prev.allowPublish === "Yes" ? "No" : "Yes",
    }));
  };

  return (
    <>
      {showPopup && <PopupStatus state={popupState} />}

      <div className="w-full mx-auto mt-8 p-6 md:p-8 rounded-3xl backdrop-blur-2xl
                     bg-gradient-to-br from-gray-900/90 via-purple-900/40 to-indigo-900/60
                     border border-white/20 shadow-2xl shadow-purple-500/10
                     relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent animate-pulse-slow"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center
                         bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300
                         bg-clip-text text-transparent drop-shadow-lg">
            Share Your AI Story
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20
                              rounded-3xl blur-sm group-hover:blur-md transition-all duration-500
                              opacity-0 group-hover:opacity-100"></div>
              <input
                name="name"
                placeholder="Full Name"
                className="relative w-full p-4 rounded-2xl bg-gray-800/40 backdrop-blur-md
                            text-white placeholder-gray-400 border border-white/10
                            focus:border-purple-400/60 focus:ring-4 focus:ring-purple-500/20
                            transition-all duration-300 shadow-lg shadow-black/20"
                onChange={handleChange}
                required
                value={formData.name}
              />
            </div>

            {/* AGE GROUP */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20
                              rounded-3xl blur-sm group-hover:blur-md transition-all duration-500
                              opacity-0 group-hover:opacity-100"></div>
              <select
                name="ageGroup"
                className="relative w-full p-4 rounded-2xl bg-gray-800/40 backdrop-blur-md
                            text-white border border-white/10
                            focus:border-purple-400/60 focus:ring-4 focus:ring-purple-500/20
                            transition-all duration-300 shadow-lg shadow-black/20"
                onChange={handleChange}
                required
                value={formData.ageGroup}
              >
                <option value="" disabled>Select Age Group</option> 
                <option value="Children">Children</option>
                <option value="Teens">Teens</option>
                <option value="Young Adults">Young Adults</option>
                <option value="Adults">Adults</option>
                <option value="Seniors">Seniors</option>
              </select>
            </div>

            {/* TITLE */}
            <div className="group relative">
              <input
                name="title"
                placeholder="Story Title"
                className="relative w-full p-4 rounded-2xl bg-gray-800/40 backdrop-blur-md
                            text-white placeholder-gray-400 border border-white/10
                            focus:border-purple-400/60 focus:ring-4 focus:ring-purple-500/20"
                onChange={handleChange}
                required
                value={formData.title}
              />
            </div>

            {/* ROLE */}
            <div className="group relative">
              <input
                name="role"
                placeholder="Your Role"
                className="relative w-full p-4 rounded-2xl bg-gray-800/40 backdrop-blur-md
                            text-white placeholder-gray-400 border border-white/10"
                onChange={handleChange}
                required
                value={formData.role}
              />
            </div>

            {/* STORY */}
            <div className="group relative">
              <textarea
                name="story"
                placeholder="Write your story..."
                rows="6"
                className="relative w-full p-4 rounded-2xl bg-gray-800/40 backdrop-blur-md
                            text-white placeholder-gray-400 border border-white/10 resize-none"
                onChange={handleChange}
                required
                value={formData.story}
              ></textarea>
            </div>

            {/* TOOLS */}
            <div className="group relative">
              <input
                name="toolsUsed"
                placeholder="AI Tools Used"
                className="relative w-full p-4 rounded-2xl bg-gray-800/40 backdrop-blur-md
                            text-white placeholder-gray-400 border border-white/10"
                onChange={handleChange}
                required
                value={formData.toolsUsed}
              />
            </div>

            {/* LOCATION */}
            <div className="group relative">
              <input
                name="location"
                placeholder="Your Location"
                className="relative w-full p-4 rounded-2xl bg-gray-800/40 backdrop-blur-md
                            text-white placeholder-gray-400 border border-white/10"
                onChange={handleChange}
                required
                value={formData.location}
              />
            </div>

            {/* TOGGLE — Allow Publish */}
            <div className="mt-8 relative">
              <label className="block text-white/90 mb-6 text-xl font-semibold text-center
                               bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent
                               drop-shadow-md">
                Allow us to publish your story?
              </label>

              <div className="flex justify-center">
                <div 
                  onClick={togglePublish}
                  className="relative w-40 h-16 bg-gray-800/60 backdrop-blur-2xl rounded-3xl p-2
                            border border-white/20 shadow-2xl shadow-purple-500/20 cursor-pointer"
                >
                  <motion.div
                    className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-purple-600 to-pink-600
                                 rounded-2xl shadow-lg shadow-purple-500/50"
                    initial={false}
                    animate={{ x: formData.allowPublish === "Yes" ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />

                  <div className="relative z-10 flex items-center justify-between w-full h-full px-4">
                    <motion.span
                      className={`text-base font-bold ${
                        formData.allowPublish === "Yes" ? "text-white" : "text-gray-400"
                      }`}
                    >
                      Yes
                    </motion.span>
                    <motion.span
                      className={`text-base font-bold ${
                        formData.allowPublish === "No" ? "text-white" : "text-gray-400"
                      }`}
                    >
                      No
                    </motion.span>
                  </div>

                  <motion.div
                    className="absolute top-1 w-14 h-14 bg-white/30 backdrop-blur-2xl
                                 rounded-2xl shadow-2xl border border-white/40 z-20"
                    initial={false}
                    animate={{ x: formData.allowPublish === "Yes" ? 2 : 82 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={formData.allowPublish}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm font-black text-white"
                        >
                          {formData.allowPublish === "Yes" ? "✓" : "✗"}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="group relative mt-12">
              <button
                type="submit"
                className="relative w-full p-5 rounded-2xl bg-gradient-to-r
                            from-purple-700/90 via-pink-700/90 to-cyan-700/90
                            text-white text-xl font-black shadow-2xl border border-white/30
                            backdrop-blur-xl transition-all duration-500"
              >
                Submit Your Story
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}