import Nav from './nav'
import Logo from './logo'
import Link from 'next/link'

export default () => (
  <header>
    <div className="left">
     <Link prefetch href="/">
       <a>
         <span className="logo">
           <Logo />
         </span>
         <span className="title">Hacker Next</span>
         <span className="title">(<a href="https://kevinridgway.com/?ref=hackernewsclone">Kevin Edition</a>)</span>
       </a>
      </Link>
      <div className="nav">
        <Nav />
      </div>
    </div>
    <div className="right">
      <Link prefetch href="/login"><a className="login">login</a></Link>
    </div>

    <style jsx>{`
      header {
        background: #ffa52a;
        display: flex;
      }

      .logo {
        margin: 4px 5px 2px 4px;
        display: inline-block;
      }

      .left {
        flex: 9;
      }

      .right {
        flex: 1;
        text-align: right;
      }

      .title {
        font-weight: bold;
        display: inline-block;
        text-decoration: none;
        padding: 8px 10px 8px 4px;
        color: #000;
        vertical-align: top;
      }

      .title a {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 10px 8px 4px;
        color: #000;
        vertical-align: top;
      }

      a.login {
        padding: 10px;
        display: inline-block;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      .login:hover {
        color: #fff;
      }

      .nav {
        display: inline-block;
        vertical-align: top;
      }

      @media (max-width: 750px) {
        .title {
          padding-bottom: 0;
        }

        a.login {
          padding: 24px 10px 23px;
        }

        .nav {
          display: block;
        }
      }
    `}</style>
  </header>
)
