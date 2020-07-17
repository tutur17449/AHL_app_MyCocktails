import Link from 'next/link'
import { Button, Container, Row, Col } from "reactstrap"
import GitHubIcon from '@material-ui/icons/GitHub'
import './style.scss'

export default function AppFooter(){

    return(
        <footer className="footer footer-black footer-big">
        <Container>
          <Row>
            <Col className="text-center ml-auto mr-auto" md="3" sm="4" xs="12">
              <h4>Objectif Régime</h4>
              <div className="social-area">
                <Button className="btn-just-icon btn-round mr-1 btn-github">
                  <a className="btn btn-github" href="https://github.com/tutur17449" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </a>
                </Button>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="8" sm="8" xs="12">
              <Row>
                <Col md="4" sm="4" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <Link href="/">Accueil</Link>
                      </li>
                      <li>
                        <Link href="/recettes">Recettes</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="4" sm="4" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <Link href="/activite">Activité</Link>
                      </li>
                      <li>
                        <Link href="/produits">Produits</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="4" sm="4" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  © {new Date().getFullYear()} Objectif Régime - AHL app
                </div>
                <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <Link href="/mentions-legales">Mentions Légales</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}