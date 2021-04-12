export const RevealUpcoming = () => {
  return (
    <>
      <section className="upcoming-reveal-lt">
        <picture>
          <source
            media="(max-width: 991px)"
            srcset="./img/revealEvents/up-next-bg-m.png"
          ></source>
          <img
            src="./img/revealEvents/up-next-bg-xl.png"
            alt=""
            width="100%"
          ></img>
        </picture>
        <div className="up-re-content">
          <h3>UP NEXT:</h3>
          <p>SUPERVELOCE</p>
          <span>Video Premiere on April 7th at 7 PM CET</span>
        </div>
      </section>
    </>
  );
};
