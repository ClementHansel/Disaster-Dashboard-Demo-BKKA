const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-3 fixed bottom-0 w-full">
      © {new Date().getFullYear()} Disaster Dashboard. All rights reserved.
    </footer>
  );
};

export default Footer;
