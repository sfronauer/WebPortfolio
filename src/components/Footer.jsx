function Footer() {
  return (
    <>
      <div>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-20">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - 
              Sophie Fronauer
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default Footer;
