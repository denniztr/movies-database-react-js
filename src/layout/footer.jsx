export const Footer = () => {
  return (
      <footer className="page-footer blue-grey darken-3">
          <div className="footer-copyright">
              <div className="container">
                  © {new Date().getFullYear()}
                  <a className="grey-text text-lighten-4 right" href="https://github.com/denniztr">denniztr</a>
              </div>
          </div>
      </footer>
  )
}