import React from "react";
import "./Home.css"; // Importa o ficheiro de estilos específicos da página

export const Home = () => {
  return (
    <div className="learnquest-bg text-learnquest-text min-h-screen font-quest">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">🧭 LearnQuest</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Quests</li>
          <li>Clan</li>
          <li>Profile</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>⚔️ Embark on Your Study Adventure</h2>
        <p>
          Join fellow learners, conquer quests, and rise through the ranks of
          the academic kingdom!
        </p>
        <button className="cta-btn">Start a Quest</button>
      </section>

      {/* Dashboard */}
      <section className="dashboard">
        {/* Quests */}
        <div className="card">
          <h3>🎯 Active Quests</h3>
          <ul>
            <li>Complete 5 math scrolls</li>
            <li>Decode 2 history riddles</li>
            <li>Master 3 magical potions (Physics)</li>
          </ul>
        </div>

        {/* Clan Progress */}
        <div className="card">
          <h3>🛡️ Your Clan</h3>
          <p>House of Scholars</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "66%" }}></div>
          </div>
          <p className="text-sm">Progress to next tier: 66%</p>
        </div>

        {/* Leaderboard */}
        <div className="card">
          <h3>🏆 Leaderboard</h3>
          <ol>
            <li>Elena the Wise - 950 XP</li>
            <li>Tom the Swift - 920 XP</li>
            <li>You - 870 XP</li>
          </ol>
          <button className="cta-btn-small">View Full Rankings</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 LearnQuest Kingdom. All rights reserved.</p>
      </footer>
    </div>
  );
};
