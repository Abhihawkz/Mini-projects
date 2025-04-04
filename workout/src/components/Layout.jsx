const Layout = ({ children }) => {
  const header = (
    <header>
      <h1 className="text-gradient"> Workout Planner </h1>
      <p>
        <strong>The 30 Simple workouts Program</strong>
      </p>
    </header>
  );
  const footer = (
    <footer>
      <p>
        Built By <a href="#" target="_blank">Abhi </a>
      </p>
    </footer>
  );
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

export default Layout;
