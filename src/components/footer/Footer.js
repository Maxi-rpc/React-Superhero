import "./Footer.css";
import { Version, GithubRep, Linkedin, Github } from "../../services/Config";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid bg-dark text-white fixed-bottom">
        <div className="row mx-0 pt-2">
          <div className="col">
            <ul className="social">
              <li className="social-icon">
                <a href={Linkedin} target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icon">
                <a href={Github} target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="text-end">
              <p>
                Version<span className="fw-bold"> - {Version} - </span>
                <a
                  className="btn btn-sm btn-outline-info"
                  href={GithubRep}
                  target="_blank"
                >
                  Link al repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
