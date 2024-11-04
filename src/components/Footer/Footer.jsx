const Footer = () => {
  return (
    <footer className="footer footer-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
