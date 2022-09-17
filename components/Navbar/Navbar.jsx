import Image from 'next/image';
import StyledNavbar from './StyledNavbar';
import Link from 'next/link';

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo">
        <Image width={70} height={70} src="/favicon.webp" alt="Fort Logo" />
        <h1>Fort</h1>
      </div>
      <div className="options">
        <ul>
          <li>
            <Link  href= "/aboutUs" >
              <a>
                    About us
              </a>
            </Link>
          </li>
          <li>
            <Link  href= "/docs" >
              <a>
                    Docs
              </a>
            </Link>
          </li>
          <li>
            <Link  href= "/features" >
              <a>
                    Features
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="register">
        <div>
          <h2>
            <Link href="/registration">
              <a>
              Get Started
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
