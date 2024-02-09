export default function Page() {
  return (
    <main>
      <div className="home-page">
        <nav>
          <div className="nav-inner">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-icon">
                <img className="hamburger-icon" src="images/hamburger_icon.svg" alt="Hamburger Icon" />
                <img className="close-icon" src="images/arrow_icon.svg" alt="Arrow Icon" />
              </div>
            </label>
            <a href="index.html" className="nav-logo" aria-label="Home">
              <img src="images/trans_flag.svg" alt="Transgender Flag" />
            </a>
            <div className="nav-links">
              <a href="about.html">About</a>
              <a href="projects.html">Projects</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>
        </nav>
        <div className="fancy-content" id="wrapper"></div>
        <div className="info-box">
          <h1>Welcome to <span className="magic-text">my portfolio!</span></h1>
          <h3>Made with love by Brynley 💜</h3>
          <div className="info-box-links">
            <a href="https://github.com/brynblack" aria-label="GitHub">
              <img src="images/github.svg" alt="GitHub Logo" />
            </a>
            <a href="https://www.youtube.com/@brynblack9433" aria-label="YouTube">
              <img src="images/youtube.svg" alt="YouTube Logo" />
            </a>
            <a href="https://tech.lgbt/@brynblack" aria-label="Mastodon">
              <img src="images/mastodon.svg" alt="Mastodon Logo" />
            </a>
            <a href="https://twitch.tv/brynblack" aria-label="Twitch">
              <img src="images/twitch.svg" alt="Twitch Logo" />
            </a>
            <a href="https://steamcommunity.com/id/brynblack" aria-label="Steam">
              <img src="images/steam.svg" alt="Steam Logo" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
