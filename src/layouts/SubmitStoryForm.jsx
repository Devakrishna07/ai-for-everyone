import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PopupStatus from "../components/ui/PopupStatus";

export default function SubmitStoryForm() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [popupState, setPopupState] = useState("loading");

  const [formData, setFormData] = useState({
    name: "",
    ageGroup: "",
    title: "",
    role: "",
    story: "",
    toolsUsed: "",
    location: "",
    allowPublish: "Yes", // ✅ Default YES
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);
    setPopupState("loading");

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeSk0lggrZQxwGmF6Gs1p18KicVbPs3nykt9bYjUw8ZXgYH_Q/formResponse";

    const formBody = new FormData();

    // 🔥 Google hidden required fields
    formBody.append("fvv", "1");
    formBody.append("pageHistory", "0");

    // 📌 Actual form fields
    formBody.append("entry.2005620554", formData.name);
    formBody.append("entry.1045781291", formData.ageGroup);
    formBody.append("entry.1065046570", formData.title);
    formBody.append("entry.839337160", formData.role);
    formBody.append("entry.1166974658", formData.story);
    formBody.append("entry.839073006", formData.toolsUsed);
    formBody.append("entry.1985046271", formData.location);

    // ⭐ REQUIRED MCQ FIELD — ALLOW PUBLISH
    formBody.append("entry.1282912892", formData.allowPublish);

    fetch(googleFormURL, {
      method: "POST",
      body: formBody,
      mode: "no-cors",
    });

    setTimeout(() => {
      setPopupState("success");
      setTimeout(() => navigate("/stories"), 1500);
    }, 1500);
  };

  const togglePublish = () => {
    setFormData(prev => ({
      ...prev,
      allowPublish: prev.allowPublish === "Yes" ? "No" : "Yes"
    }));
  };

  return (
    <>
      {showPopup && <PopupStatus state={popupState} />}

      <div className="w-full mx-auto mt-8 p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black/80 border border-white/10 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Share Your AI Story
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="group">
            <input
              name="name"
              placeholder="Full Name"
              className="w-full p-4 rounded-2xl bg-white/5 text-white placeholder-white/40 
              border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/30
              transition-all duration-300 backdrop-blur-sm
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <select
              name="ageGroup"
              className="w-full p-4 rounded-2xl bg-white/5 text-white 
              border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/30
              transition-all duration-300 backdrop-blur-sm
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
              onChange={handleChange}
              required
            >
              <option value="">Select Age Group</option>
              <option value="Children">Children</option>
              <option value="Teens">Teens</option>
              <option value="Young Adults">Young Adults</option>
              <option value="Adults">Adults</option>
              <option value="Seniors">Seniors</option>
            </select>
          </div>

          <div className="group">
            <input
              name="title"
              placeholder="Story Title"
              className="w-full p-4 rounded-2xl bg-white/5 text-white placeholder-white/40 
              border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/30
              transition-all duration-300 backdrop-blur-sm
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <input
              name="role"
              placeholder="Your Role"
              className="w-full p-4 rounded-2xl bg-white/5 text-white placeholder-white/40 
              border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/30
              transition-all duration-300 backdrop-blur-sm
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <textarea
              name="story"
              placeholder="Write your story..."
              rows="6"
              className="w-full p-4 rounded-2xl bg-white/5 text-white placeholder-white/40 
              border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/30 
              transition-all duration-300 backdrop-blur-sm resize-none
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="group">
            <input
              name="toolsUsed"
              placeholder="AI Tools Used"
              className="w-full p-4 rounded-2xl bg-white/5 text-white placeholder-white/40 
              border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/30
              transition-all duration-300 backdrop-blur-sm
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <input
              name="location"
              placeholder="Your Location"
              className="w-full p-4 rounded-2xl bg-white/5 text-white placeholder-white/40 
              border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/30
              transition-all duration-300 backdrop-blur-sm
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
              onChange={handleChange}
              required
            />
          </div>

          {/* ⭐ ANIMATED GLASSMORPHIC TOGGLE SWITCH */}
          <div className="mt-6">
            <label className="block text-white/80 mb-4 text-lg font-medium">
              Allow us to publish your story?
            </label>
            
            <div 
              onClick={togglePublish}
              className="relative w-32 h-14 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-400/30"
            >
              {/* Track */}
              <div className="relative w-full h-full">
                {/* Background Slider */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-xl shadow-lg"
                  initial={false}
                  animate={{
                    x: formData.allowPublish === "Yes" ? 0 : "100%",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                />
                
                {/* Labels */}
                <div className="relative z-10 flex items-center justify-between w-full h-full px-3">
                  <motion.span
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      formData.allowPublish === "Yes" ? "text-white" : "text-white/50"
                    }`}
                    animate={{
                      scale: formData.allowPublish === "Yes" ? 1.1 : 1
                    }}
                  >
                    Yes
                  </motion.span>
                  <motion.span
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      formData.allowPublish === "No" ? "text-white" : "text-white/50"
                    }`}
                    animate={{
                      scale: formData.allowPublish === "No" ? 1.1 : 1
                    }}
                  >
                    No
                  </motion.span>
                </div>

                {/* Thumb */}
                <motion.div
                  className="absolute top-1 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/20 z-20"
                  initial={false}
                  animate={{
                    x: formData.allowPublish === "Yes" ? 2 : 58,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={formData.allowPublish}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs font-bold text-white"
                      >
                        {formData.allowPublish === "Yes" ? "✓" : "✗"}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Selected Value Display */}
            <motion.p 
              className="mt-3 text-sm text-white/60"
              key={formData.allowPublish}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              Currently selected: <span className="text-purple-300 font-medium">{formData.allowPublish}</span>
            </motion.p>
          </div>

          <div className="group mt-8">
            <button
              type="submit"
              className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-700 
              text-white text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/30 
              hover:scale-[1.02] transition-all duration-300"
            >
              Submit Story
            </button>
          </div>
        </form>
      </div>
    </>
  );
}