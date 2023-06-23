function Footer() {
    return <footer className="page-footer indigo accent-4">
        <div className="footer-copyright">
            <div className="container">
                {new Date().getFullYear()} All rights reserved
                <a className="grey-text text-lighten-4 right" href="https://github.com/SemenovVasilii">GitHub</a>
            </div>
        </div>
    </footer>
}

export { Footer }