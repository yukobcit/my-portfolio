const Footer = () => {
    // copyright
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center mb-20">
                <p>© {year} Yuko Ishida. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </>
    );
};

export default Footer;
