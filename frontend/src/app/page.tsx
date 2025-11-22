export default function HomePage() {
  return (
    <div className="page">
      {/* HERO SECTION: image + text card */}
      <section className="museum-hero">
        <div className="museum-hero-image" />

        <div className="museum-hero-card">
          <p className="museum-eyebrow">Welcome to</p>
          <h1 className="museum-hero-title">The Exhibition</h1>
          <p className="museum-hero-body">
            A curated interface for the Delta Library Management System. Browse
            the catalogue, trace loans and reservations, and observe the movement
            of books and members as if they were works in a living collection.
          </p>

          <div className="museum-hero-buttons">
            <button className="museum-primary-btn">View catalogue</button>
            <button className="museum-ghost-btn">About the system</button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION – like “Our Highlights” cards */}
      <section className="section museum-highlights">
        <h2 className="section-heading">Key views in the system</h2>
        <ul className="museum-highlight-row">
          <li className="museum-highlight-card">
            <p className="museum-highlight-title">Catalogue</p>
            <p className="museum-highlight-sub">
              Searchable list of books, copies, and availability across branches.
            </p>
          </li>
          <li className="museum-highlight-card">
            <p className="museum-highlight-title">Members &amp; loans</p>
            <p className="museum-highlight-sub">
              Track member activity, active loans, and borrowing limits at a glance.
            </p>
          </li>
          <li className="museum-highlight-card">
            <p className="museum-highlight-title">Reservations</p>
            <p className="museum-highlight-sub">
              See who is waiting for which title, with clear queue positions.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
