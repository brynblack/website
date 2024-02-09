export default function Page() {
  return (
    <main>
      <div className="about-page">
        <div className="main-content">
          <div className="main-content-wrapper">
            <div className="temp">
              <div className="temp2">
                <div className="slide-right" style={{['--animation-order' as any]: 1}}>
                  <h1>My name is Brynley Llewellyn-Roux.</h1>
                  <h2>I am a software engineer based in Sydney, Australia.</h2>
                </div>
                <div className="slide-right" style={{['--animation-order' as any]: 2}}>
                  <p>I have 6 years of programming experience and I&apos;m currently studying at the University of Technology Sydney.</p>
                </div>
                <div className="slide-right" style={{['--animation-order' as any]: 3}}>
                  <h3><span className="magic-text">I am open to work.</span></h3>
                </div>
              </div>
              <div className="pfp-img slide-right" style={{['--animation-order' as any]: 1}}>
                <img src="https://avatars.githubusercontent.com/u/49110391?v=4" alt="Profile Picture" />
              </div>
            </div>
            <div className="slide-right" style={{['--animation-order' as any]: 4.5}}>
              <h2>You can check out more info about me by going to my GitHub <a href="https://github.com/brynblack"><span className="magic-text">here.</span></a></h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
