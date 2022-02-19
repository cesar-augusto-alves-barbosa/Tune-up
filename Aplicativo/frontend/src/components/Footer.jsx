import "../assets/css/footer.css";

export default function Footer() {
    return (
        <footer className="container_footer">
            <div className="title_footer">
                Entre em contato conosco:
                    </div>
            <div className="description_footer">Email: tuneUp@gmail.com</div>
            <div className="description_footer">Telefone: +55 (11) 5613-4546</div>
            <div className="links_footer">
                <i className="social_link-footer fab fa-instagram-square"></i>
                <i className="social_link-footer fab fa-facebook-square"></i>
                <i className="social_link-footer fab fa-linkedin"></i>
            </div>
        </footer>
    );
}